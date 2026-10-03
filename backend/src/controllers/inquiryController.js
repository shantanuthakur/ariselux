import { saveInquiry, getInquiries, getInquiryById, updateInquiryStatus } from '../services/storageService.js';
import { sendInquiryNotification, sendCustomerAcknowledgment } from '../services/emailService.js';
import { config } from '../config/index.js';

export async function createInquiry(req, res, next) {
  try {
    const { name, email, phone, company, product, location, message, source } = req.body;

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

    const inquiry = await saveInquiry({
      name,
      email: email || '',
      phone: cleanPhone,
      company: company || '',
      product: product || 'General Inquiry',
      location: location || '',
      message,
      source: source || 'website'
    });

    // Send email notification to sales desk
    const emailResult = await sendInquiryNotification(inquiry);
    if (email) {
      sendCustomerAcknowledgment(inquiry).catch(err => console.error('Customer ack error:', err));
    }

    // WhatsApp direct link generator
    const waText = encodeURIComponent(
      `Hello Ariselux Team, I submitted an enquiry (Ref #${inquiry.id}):\n\n*Name:* ${inquiry.name}\n*Product:* ${inquiry.product}\n*Company:* ${inquiry.company}\n*Phone:* ${inquiry.phone}\n*Requirement:* ${inquiry.message}`
    );
    const whatsappUrl = `https://wa.me/${config.company.whatsapp}?text=${waText}`;

    return res.status(201).json({
      success: true,
      message: 'Quotation request received successfully. Our engineering desk will connect with you within 2-4 business hours.',
      inquiry: {
        id: inquiry.id,
        name: inquiry.name,
        product: inquiry.product,
        createdAt: inquiry.createdAt
      },
      emailDelivery: emailResult.sent 
        ? `Delivered to ${config.company.email}` 
        : (emailResult.message || emailResult.error || 'SMTP credentials not configured in backend/.env'),
      whatsappDirectUrl: whatsappUrl
    });
  } catch (err) {
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
