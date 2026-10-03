import nodemailer from 'nodemailer';
import { getConfig } from '../config/index.js';

/**
 * Creates or gets transporter based on current config
 */
function createTransporter(cfg) {
  if (!cfg.smtp.host || !cfg.smtp.user || !cfg.smtp.pass) {
    return null;
  }

  return nodemailer.createTransport({
    host: cfg.smtp.host,
    port: cfg.smtp.port,
    secure: cfg.smtp.secure,
    auth: {
      user: cfg.smtp.user,
      pass: cfg.smtp.pass
    },
    tls: {
      rejectUnauthorized: false // Helps avoid SSL issues on various custom mail servers
    }
  });
}

/**
 * Test SMTP connection & optionally send a test email
 */
export async function testSmtpConnection() {
  const currentConfig = getConfig();
  const { smtp, company } = currentConfig;

  if (!smtp.user || !smtp.pass) {
    return {
      success: false,
      configured: false,
      message: 'SMTP credentials are incomplete. Please set SMTP_USER and SMTP_PASS in backend/.env',
      currentConfig: {
        host: smtp.host || 'Not set',
        port: smtp.port,
        secure: smtp.secure,
        user: smtp.user ? `${smtp.user.substring(0, 3)}***` : 'NOT SET',
        pass: smtp.pass ? '******' : 'NOT SET',
        fromEmail: smtp.fromEmail,
        companySalesEmail: company.email
      }
    };
  }

  const transporter = createTransporter(currentConfig);
  if (!transporter) {
    return {
      success: false,
      configured: false,
      message: 'Could not initialize SMTP transporter with current settings.'
    };
  }

  try {
    // 1. Verify connection
    await transporter.verify();

    // 2. Send test email to sales desk
    const testResult = await transporter.sendMail({
      from: `"${company.name}" <${smtp.fromEmail || smtp.user}>`,
      to: company.email,
      subject: `[Test Email] Ariselux SMTP Configuration Verified ✅`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #27ae60;">SMTP Connection Verified Successfully!</h2>
          <p>This is a test notification confirming that the Ariselux website backend can successfully deliver quotation inquiries to <strong>${company.email}</strong>.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;">
          <p><strong>Configured SMTP Host:</strong> ${smtp.host}:${smtp.port} (Secure: ${smtp.secure})</p>
          <p><strong>Sender Account:</strong> ${smtp.user}</p>
          <p><strong>Recipient Desk:</strong> ${company.email}</p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
        </div>
      `
    });

    return {
      success: true,
      configured: true,
      message: `Test email successfully delivered to ${company.email}!`,
      messageId: testResult.messageId
    };
  } catch (err) {
    let troubleshooting = '';
    if (smtp.host.includes('gmail')) {
      troubleshooting = 'For Gmail, standard passwords are not accepted. You must enable 2-Step Verification and generate a 16-character Google App Password (https://myaccount.google.com/apppasswords).';
    } else if (err.code === 'ECONNREFUSED' || err.code === 'ETIMEDOUT') {
      troubleshooting = `Check your SMTP_PORT (e.g. 465 for secure=true, or 587 for secure=false) and firewall settings.`;
    }

    return {
      success: false,
      configured: true,
      error: err.message,
      errorCode: err.code,
      troubleshooting,
      currentConfig: {
        host: smtp.host,
        port: smtp.port,
        secure: smtp.secure,
        user: smtp.user
      }
    };
  }
}

/**
 * Send notification to Ariselux sales desk
 */
export async function sendInquiryNotification(inquiry) {
  const currentConfig = getConfig();
  const { smtp, company } = currentConfig;
  const mailer = createTransporter(currentConfig);

  const emailBody = `
    <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #222;">
      <div style="background: #111; color: #fff; padding: 20px; border-radius: 6px 6px 0 0;">
        <h2 style="margin: 0; color: #fff; font-size: 20px;">New Website Quotation Request</h2>
        <span style="font-size: 13px; color: #aaa;">Reference ID: #${inquiry.id}</span>
      </div>
      <div style="padding: 25px; border: 1px solid #ddd; border-top: none; background: #fff; border-radius: 0 0 6px 6px;">
        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; border-color: #eee;">
          <tr style="background: #fbfbfb;">
            <td style="width: 35%; font-weight: bold; color: #555;">Product of Interest</td>
            <td style="color: #f97316; font-weight: bold; font-size: 16px;">${inquiry.product}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #555;">Customer Name</td>
            <td><strong>${inquiry.name}</strong></td>
          </tr>
          <tr style="background: #fbfbfb;">
            <td style="font-weight: bold; color: #555;">Mobile / Phone</td>
            <td><a href="tel:${inquiry.phone}" style="color: #0284c7; font-weight: bold;">${inquiry.phone}</a></td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #555;">Email Address</td>
            <td>${inquiry.email ? `<a href="mailto:${inquiry.email}" style="color: #0284c7;">${inquiry.email}</a>` : 'Not provided'}</td>
          </tr>
          <tr style="background: #fbfbfb;">
            <td style="font-weight: bold; color: #555;">Company / Organization</td>
            <td>${inquiry.company || 'N/A'}</td>
          </tr>
          ${inquiry.location ? `<tr><td style="font-weight: bold; color: #555;">Project Location</td><td>${inquiry.location}</td></tr>` : ''}
          <tr style="background: #fbfbfb;">
            <td style="font-weight: bold; color: #555;">Inquiry Message / Specs</td>
            <td style="white-space: pre-wrap; line-height: 1.5;">${inquiry.message}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #555;">Submission Timestamp</td>
            <td>${new Date(inquiry.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</td>
          </tr>
        </table>

        <div style="margin-top: 25px; display: flex; gap: 12px;">
          <a href="https://wa.me/${inquiry.phone.replace(/[^0-9]/g, '')}" style="background: #25D366; color: #fff; padding: 12px 22px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;">
            Chat on WhatsApp →
          </a>
          <a href="tel:${inquiry.phone}" style="background: #111; color: #fff; padding: 12px 22px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block; margin-left: 10px;">
            Call Customer 📞
          </a>
        </div>
      </div>
    </div>
  `;

  if (!mailer) {
    console.log(`\n======================================================`);
    console.log(`⚠️ [EMAIL NOTICE: SMTP CREDENTIALS MISSING IN backend/.env]`);
    console.log(`To receive real emails in "${company.email}", please set SMTP_USER and SMTP_PASS in backend/.env`);
    console.log(`------------------------------------------------------`);
    console.log(`INQUIRY ID: ${inquiry.id}`);
    console.log(`CUSTOMER:   ${inquiry.name} (${inquiry.company || 'N/A'})`);
    console.log(`PHONE:      ${inquiry.phone}`);
    console.log(`EMAIL:      ${inquiry.email || 'None'}`);
    console.log(`PRODUCT:    ${inquiry.product}`);
    console.log(`MESSAGE:    ${inquiry.message}`);
    console.log(`======================================================\n`);
    return {
      sent: false,
      reason: 'missing_credentials',
      message: 'SMTP_USER or SMTP_PASS not set in backend/.env'
    };
  }

  try {
    const info = await mailer.sendMail({
      from: `"${company.name}" <${smtp.fromEmail || smtp.user}>`,
      to: company.email,
      replyTo: inquiry.email || undefined,
      subject: `[New Inquiry] ${inquiry.product} - ${inquiry.name} (${inquiry.company || 'Direct'})`,
      html: emailBody
    });
    console.log(`✅ [EMAIL SENT TO SALES]: Delivered to ${company.email} (Message ID: ${info.messageId})`);
    return { sent: true, messageId: info.messageId };
  } catch (err) {
    console.error(`❌ [EMAIL ERROR]: Failed to send to ${company.email}:`, err.message);
    return { sent: false, error: err.message };
  }
}

/**
 * Send acknowledgment email to customer
 */
export async function sendCustomerAcknowledgment(inquiry) {
  if (!inquiry.email) return { sent: false, reason: 'no_customer_email' };

  const currentConfig = getConfig();
  const { smtp, company } = currentConfig;
  const mailer = createTransporter(currentConfig);
  if (!mailer) return { sent: false, reason: 'missing_credentials' };

  const customerBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #222;">
      <div style="background: #111; color: #fff; padding: 20px; border-radius: 6px 6px 0 0;">
        <h2 style="margin: 0; color: #fff; font-size: 20px;">Quotation Request Acknowledged</h2>
        <span style="font-size: 13px; color: #aaa;">Ariselux Equipments Private Limited</span>
      </div>
      <div style="padding: 25px; border: 1px solid #ddd; border-top: none; background: #fff; border-radius: 0 0 6px 6px;">
        <p>Dear <strong>${inquiry.name}</strong>,</p>
        <p>Thank you for reaching out to Ariselux. We have received your quotation request for <strong>${inquiry.product}</strong> under Reference ID <strong>#${inquiry.id}</strong>.</p>
        <p>Our sales engineering team from our Haridwar manufacturing facility is reviewing your requirements and will reach out to you within 2 to 4 business hours.</p>

        <div style="background: #f8fafc; border-left: 4px solid #f97316; padding: 15px; margin: 20px 0;">
          <h4 style="margin: 0 0 5px 0; color: #1e293b;">Need urgent technical assistance or tender compliance?</h4>
          <p style="margin: 0; font-size: 14px; color: #475569;">
            Call our direct sales desk: <a href="tel:${company.phone}" style="color: #f97316; font-weight: bold;">${company.phone}</a><br>
            Or WhatsApp directly: <a href="https://wa.me/${company.whatsapp}" style="color: #25D366; font-weight: bold;">+91-8126732502</a>
          </p>
        </div>

        <p style="font-size: 13px; color: #64748b; margin-top: 30px;">
          <strong>Ariselux Equipments Private Limited</strong><br>
          ${company.address}<br>
          Email: <a href="mailto:${company.email}">${company.email}</a> | Web: <a href="https://ariselux.com">ariselux.com</a>
        </p>
      </div>
    </div>
  `;

  try {
    const info = await mailer.sendMail({
      from: `"${company.name}" <${smtp.fromEmail || smtp.user}>`,
      to: inquiry.email,
      subject: `Quotation Request Received - ${inquiry.product} | Ariselux Equipments`,
      html: customerBody
    });
    return { sent: true, messageId: info.messageId };
  } catch (err) {
    console.error(`Failed to send acknowledgment to ${inquiry.email}:`, err.message);
    return { sent: false, error: err.message };
  }
}
