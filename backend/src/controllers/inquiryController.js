import { saveInquiry, getInquiries, getInquiryById, updateInquiryStatus } from '../services/storageService.js';
import { sendInquiryNotification, sendCustomerAcknowledgment } from '../services/emailService.js';
import { config } from '../config/index.js';
import { logInquiry, logEmail, logRateLimit, logSpam, logDedupe, logError } from '../services/logService.js';

// Simple in-memory rate limiting map (IP -> timestamps)
const submissionRateMap = new Map();

// In-memory deduplication map (key -> { timestamp, response }) to prevent duplicate emails from rapid clicks/retries
const recentSubmissionsMap = new Map();

export async function createInquiry(req, res, next) {
  try {
    const { name, email, phone, company, product, location, message, source, website_hp, _gotcha } = req.body;

    // Honeypot check (catches automated bot scripts)
    if (website_hp || _gotcha) {
      console.warn(`[SPAM DETECTED] Honeypot triggered from IP: ${req.ip}`);
      logSpam(req.ip);
      return res.status(200).json({
        success: true,
        message: 'Quotation request received.'
      });
    }

    // IP Rate Limiting (max 5 requests per 10 minutes per IP)
    const clientIp = req.ip || req.connection?.remoteAddress || 'unknown';
    const now = Date.now();
    const windowMs = 10 * 60 * 1000;
    const history = submissionRateMap.get(clientIp) || [];
    const validHistory = history.filter(ts => now - ts < windowMs);
    
    if (validHistory.length >= 5) {
      logRateLimit(clientIp, req.body?.product || 'unknown');
      return res.status(429).json({
        success: false,
        message: 'Too many quotation requests submitted. Please connect directly via WhatsApp at +91-8126732502.'
      });
    }
    validHistory.push(now);
    submissionRateMap.set(clientIp, validHistory);

    // Validation
    if (!name || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, contact mobile number, and message are required fields.'
      });
    }

    // Phone basic sanitization / validation
    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    if (cleanPhone.length < 8) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid contact phone number.'
      });
    }

    const cleanEmail = (email || '').trim().toLowerCase();
    const cleanProduct = (product || 'General Inquiry').trim();

    // Deduplication check: prevent identical submissions within 60 seconds (stops duplicate emails from double-clicking/retries)
    const dedupeKey = `${cleanPhone}_${cleanEmail}_${cleanProduct.toLowerCase()}`;
    if (recentSubmissionsMap.has(dedupeKey)) {
      const existing = recentSubmissionsMap.get(dedupeKey);
      if (now - existing.timestamp < 60000) {
        console.log(`[DEDUPE] Duplicate inquiry submission blocked for: ${dedupeKey}`);
        logDedupe(dedupeKey);
        return res.status(200).json(existing.response);
      }
    }

    const inquiry = await saveInquiry({
      name,
      email: cleanEmail,
      phone: cleanPhone,
      company: company || '',
      product: cleanProduct,
      location: location || '',
      message,
      source: source || 'website'
    });

    // Send email notification to sales desk (internal alert)
    const salesEmailResult = await sendInquiryNotification(inquiry).catch(err => ({ sent: false, error: err.message }));
    logEmail('SALES_DESK', config.company.email, salesEmailResult);

    // Send customer acknowledgment email ("We have received your quotation request")
    const customerEmailResult = cleanEmail
      ? await sendCustomerAcknowledgment(inquiry).catch(err => ({ sent: false, error: err.message }))
      : { sent: false, reason: 'no_customer_email' };
    if (cleanEmail) logEmail('CUSTOMER_ACK', cleanEmail, customerEmailResult);

    // WhatsApp direct link generator
    const waText = encodeURIComponent(
      `Hello Ariselux Team, I submitted an enquiry (Ref #${inquiry.id}):\n\n*Name:* ${inquiry.name}\n*Product:* ${inquiry.product}\n*Company:* ${inquiry.company}\n*Phone:* ${inquiry.phone}\n*Requirement:* ${inquiry.message}`
    );
    const whatsappUrl = `https://wa.me/${config.company.whatsapp}?text=${waText}`;

    const responseData = {
      success: true,
      message: 'Quotation request received successfully. Our engineering desk will connect with you within 2-4 business hours.',
      inquiry: {
        id: inquiry.id,
        name: inquiry.name,
        product: inquiry.product,
        createdAt: inquiry.createdAt
      },
      emailDelivery: {
        salesDesk: salesEmailResult.sent 
          ? `Delivered to ${config.company.email}` 
          : (salesEmailResult.message || salesEmailResult.error || 'SMTP credentials not configured in backend/.env'),
        customerAck: customerEmailResult.sent
          ? `Delivered to ${cleanEmail}`
          : (customerEmailResult.reason || customerEmailResult.error || 'Not sent')
      },
      whatsappDirectUrl: whatsappUrl
    };

    // Log the full inquiry summary to file
    logInquiry(inquiry, {
      salesDesk: salesEmailResult.sent ? `Delivered to ${config.company.email}` : (salesEmailResult.error || 'failed'),
      customerAck: customerEmailResult.sent ? `Delivered to ${cleanEmail}` : (customerEmailResult.reason || customerEmailResult.error || 'not sent')
    });

    // Cache to deduplicate rapid successive calls
    recentSubmissionsMap.set(dedupeKey, { timestamp: now, response: responseData });

    return res.status(201).json(responseData);
  } catch (err) {
    logError('INQUIRY', `Unhandled error in createInquiry`, err);
    next(err);
  }
}

export async function getAllInquiries(req, res, next) {
  try {
    const { status, search } = req.query;
    let list = await getInquiries();

    if (status) {
      list = list.filter(i => i.status.toLowerCase() === status.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase();
      list = list.filter(i => 
        i.name.toLowerCase().includes(q) ||
        i.email.toLowerCase().includes(q) ||
        i.phone.includes(q) ||
        i.product.toLowerCase().includes(q) ||
        (i.company && i.company.toLowerCase().includes(q))
      );
    }

    return res.json({
      success: true,
      total: list.length,
      data: list
    });
  } catch (err) {
    next(err);
  }
}

export async function getSingleInquiry(req, res, next) {
  try {
    const { id } = req.params;
    const inquiry = await getInquiryById(id);
    if (!inquiry) {
      return res.status(404).json({ success: false, message: 'Inquiry not found' });
    }
    return res.json({ success: true, data: inquiry });
  } catch (err) {
    next(err);
  }
}

export async function changeInquiryStatus(req, res, next) {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const validStatuses = ['new', 'contacted', 'quoted', 'completed', 'archived'];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Allowed: ${validStatuses.join(', ')}`
      });
    }

    const updated = await updateInquiryStatus(id, status);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Inquiry not found' });
    }

    return res.json({
      success: true,
      message: `Inquiry status updated to ${status}`,
      data: updated
    });
  } catch (err) {
    next(err);
  }
}
