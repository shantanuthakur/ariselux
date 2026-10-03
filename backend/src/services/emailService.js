import nodemailer from 'nodemailer';
import { config } from '../config/index.js';

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;
  if (!config.smtp.host || !config.smtp.user) {
    return null;
  }

  transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.secure,
    auth: {
      user: config.smtp.user,
      pass: config.smtp.pass
    }
  });

  return transporter;
}

/**
 * Send notification to Ariselux sales desk
 */
export async function sendInquiryNotification(inquiry) {
  const mailer = getTransporter();

  const emailBody = `
    <h2>New Quotation Request Received (#${inquiry.id})</h2>
    <p>A new quotation/inquiry request was submitted through the Ariselux website:</p>
    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; max-width: 600px;">
      <tr><td><strong>Inquiry ID</strong></td><td>${inquiry.id}</td></tr>
      <tr><td><strong>Customer Name</strong></td><td>${inquiry.name}</td></tr>
      <tr><td><strong>Email</strong></td><td><a href="mailto:${inquiry.email}">${inquiry.email}</a></td></tr>
      <tr><td><strong>Phone / Mobile</strong></td><td><a href="tel:${inquiry.phone}">${inquiry.phone}</a></td></tr>
      <tr><td><strong>Company / Org</strong></td><td>${inquiry.company || 'N/A'}</td></tr>
      <tr><td><strong>Product of Interest</strong></td><td><strong>${inquiry.product}</strong></td></tr>
      ${inquiry.location ? `<tr><td><strong>Project Location</strong></td><td>${inquiry.location}</td></tr>` : ''}
      <tr><td><strong>Requirements / Message</strong></td><td>${inquiry.message}</td></tr>
      <tr><td><strong>Date / Time</strong></td><td>${new Date(inquiry.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</td></tr>
    </table>
    <p style="margin-top: 20px;">
      <a href="https://wa.me/${inquiry.phone.replace(/[^0-9]/g, '')}" style="background: #25D366; color: white; padding: 10px 18px; text-decoration: none; border-radius: 4px; display: inline-block;">
        WhatsApp Customer Directly →
      </a>
    </p>
  `;

  if (!mailer) {
    console.log(`\n======================================================`);
    console.log(`[EMAIL DISPATCH (MOCK MODE - Configure SMTP in .env)]`);
    console.log(`TO: ${config.company.email}`);
    console.log(`SUBJECT: [New Web Inquiry] ${inquiry.product} - ${inquiry.name} (${inquiry.company})`);
    console.log(`INQUIRY ID: ${inquiry.id}`);
    console.log(`DETAILS: Phone: ${inquiry.phone} | Email: ${inquiry.email}`);
    console.log(`======================================================\n`);
    return { success: true, mocked: true };
  }

  try {
    const info = await mailer.sendMail({
      from: `"${config.company.name}" <${config.smtp.fromEmail}>`,
      to: config.company.email,
      subject: `[New Web Inquiry] ${inquiry.product} - ${inquiry.name} (${inquiry.company})`,
      html: emailBody
    });
    return { success: true, messageId: info.messageId };
  } catch (err) {
    console.error('Failed to send sales notification email:', err.message);
    return { success: false, error: err.message };
  }
}

/**
 * Send acknowledgment email to customer
 */
export async function sendCustomerAcknowledgment(inquiry) {
  if (!inquiry.email) return;
  const mailer = getTransporter();

  const customerBody = `
    <h2>Thank You for Contacting Ariselux Equipments</h2>
    <p>Dear ${inquiry.name},</p>
    <p>We have successfully received your quotation request for <strong>${inquiry.product}</strong> (Reference ID: <strong>${inquiry.id}</strong>).</p>
    <p>Our technical sales engineering team from Haridwar is reviewing your requirements and will connect with you within 2 to 4 business hours.</p>
    
    <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #f97316; margin: 20px 0;">
      <p style="margin: 0 0 5px 0;"><strong>Need immediate assistance or tender specifications?</strong></p>
      <p style="margin: 0;">Speak directly with our technical desk at <a href="tel:${config.company.phone}">${config.company.phone}</a> or <a href="https://wa.me/${config.company.whatsapp}">chat on WhatsApp</a>.</p>
    </div>

    <p style="color: #666; font-size: 13px;">
      Ariselux Equipments Private Limited<br>
      Plot No. 25, Sector 8A, IIE SIDCUL, Haridwar - 249403, Uttarakhand, India<br>
      Website: <a href="https://ariselux.com">ariselux.com</a>
    </p>
  `;

  if (!mailer) {
    console.log(`[EMAIL ACKNOWLEDGMENT (MOCK MODE)] -> Sent to customer: ${inquiry.email}`);
    return { success: true, mocked: true };
  }

  try {
    const info = await mailer.sendMail({
      from: `"${config.company.name}" <${config.smtp.fromEmail}>`,
      to: inquiry.email,
      subject: `Quotation Request Received - ${inquiry.product} | Ariselux Equipments`,
      html: customerBody
    });
    return { success: true, messageId: info.messageId };
  } catch (err) {
    console.error('Failed to send customer acknowledgment:', err.message);
    return { success: false, error: err.message };
  }
}
