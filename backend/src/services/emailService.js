import nodemailer from 'nodemailer';
import { getConfig } from '../config/index.js';

/**
 * Creates a fresh transporter from current config
 */
function createTransporter(cfg) {
  if (!cfg.smtp.host || !cfg.smtp.user || !cfg.smtp.pass) {
    return null;
  }
  return nodemailer.createTransport({
    host: cfg.smtp.host,
    port: cfg.smtp.port,
    secure: cfg.smtp.secure,
    auth: { user: cfg.smtp.user, pass: cfg.smtp.pass },
    tls: { rejectUnauthorized: false }
  });
}

/**
 * Test SMTP connection & send a test email to sales desk
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
    return { success: false, configured: false, message: 'Could not initialize SMTP transporter.' };
  }

  try {
    await transporter.verify();
    const testResult = await transporter.sendMail({
      from: `"${company.name}" <${smtp.fromEmail || smtp.user}>`,
      to: company.email,
      subject: `[Test Email] Ariselux SMTP Configuration Verified ✅`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 25px; border: 1px solid #e0e0e0; border-radius: 8px; max-width: 550px;">
          <h2 style="color: #27ae60; margin-top: 0;">✅ SMTP Connection Verified!</h2>
          <p>The Ariselux backend can now deliver inquiry emails to <strong>${company.email}</strong>.</p>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <p><strong>SMTP Host:</strong> ${smtp.host}:${smtp.port} (Secure: ${smtp.secure})</p>
          <p><strong>Sender Account:</strong> ${smtp.user}</p>
          <p><strong>Test Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
        </div>
      `
    });
    return { success: true, configured: true, message: `Test email delivered to ${company.email}!`, messageId: testResult.messageId };
  } catch (err) {
    let troubleshooting = '';
    if (smtp.host.includes('gmail')) {
      troubleshooting = 'For Gmail: enable 2-Step Verification and generate a 16-character Google App Password at https://myaccount.google.com/apppasswords';
    } else if (err.code === 'ECONNREFUSED' || err.code === 'ETIMEDOUT') {
      troubleshooting = 'Check SMTP_PORT (465 for secure=true, 587 for secure=false) and firewall settings.';
    }
    return { success: false, configured: true, error: err.message, errorCode: err.code, troubleshooting };
  }
}

/* ==========================================================
   SALES DESK NOTIFICATION EMAIL (sent to sales@ariselux.com)
   Purpose: Alert the internal team about a new inquiry
   Style: Professional dark-header sales alert with table
   ========================================================== */
export async function sendInquiryNotification(inquiry) {
  const currentConfig = getConfig();
  const { smtp, company } = currentConfig;
  const mailer = createTransporter(currentConfig);

  // ── Sales team notification email body ──
  const salesEmailBody = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:30px 0;">
    <tr><td align="center">
      <table width="640" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

        <!-- HEADER: RED ALERT BANNER (internal sales team look) -->
        <tr>
          <td style="background:#dc2626;padding:20px 30px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <div style="font-size:11px;font-weight:700;letter-spacing:2px;color:#fecaca;text-transform:uppercase;margin-bottom:4px;">INTERNAL SALES ALERT</div>
                  <h1 style="margin:0;font-size:20px;color:#fff;font-weight:700;">New Inquiry Received 🔔</h1>
                </td>
                <td align="right">
                  <div style="background:rgba(255,255,255,0.15);border-radius:6px;padding:8px 14px;text-align:center;">
                    <div style="font-size:10px;color:#fecaca;font-weight:600;letter-spacing:1px;">REF ID</div>
                    <div style="font-size:13px;font-weight:700;color:#fff;font-family:monospace;">#${inquiry.id}</div>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- PRIORITY PRODUCT BADGE -->
        <tr>
          <td style="background:#fff7ed;padding:16px 30px;border-bottom:1px solid #fed7aa;">
            <span style="font-size:12px;color:#9a3412;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Product of Interest</span>
            <h2 style="margin:4px 0 0 0;font-size:22px;font-weight:800;color:#c2410c;">${inquiry.product}</h2>
          </td>
        </tr>

        <!-- CUSTOMER DETAILS TABLE -->
        <tr>
          <td style="padding:25px 30px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
              <tr style="background:#f9fafb;">
                <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;width:38%;border-bottom:1px solid #e5e7eb;">Customer Name</td>
                <td style="padding:12px 16px;font-size:15px;font-weight:700;color:#111;border-bottom:1px solid #e5e7eb;">${inquiry.name}</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #e5e7eb;">Mobile / Phone</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;"><a href="tel:${inquiry.phone}" style="font-size:16px;font-weight:700;color:#2563eb;text-decoration:none;">${inquiry.phone}</a></td>
              </tr>
              <tr style="background:#f9fafb;">
                <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #e5e7eb;">Email Address</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;">${inquiry.email ? `<a href="mailto:${inquiry.email}" style="color:#2563eb;text-decoration:none;">${inquiry.email}</a>` : '<span style="color:#9ca3af;font-style:italic;">Not provided</span>'}</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #e5e7eb;">Company / Org</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#374151;">${inquiry.company || '<span style="color:#9ca3af;font-style:italic;">N/A</span>'}</td>
              </tr>
              ${inquiry.location ? `
              <tr style="background:#f9fafb;">
                <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #e5e7eb;">Project Location</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;">${inquiry.location}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #e5e7eb;vertical-align:top;">Requirement / Message</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;white-space:pre-wrap;line-height:1.6;color:#374151;">${inquiry.message || '<span style="color:#9ca3af;font-style:italic;">No message provided</span>'}</td>
              </tr>
              <tr style="background:#f9fafb;">
                <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;">Submitted At</td>
                <td style="padding:12px 16px;color:#6b7280;font-size:13px;">${new Date(inquiry.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ACTION BUTTONS -->
        <tr>
          <td style="padding:0 30px 25px;">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-right:10px;">
                  <a href="https://wa.me/${inquiry.phone.replace(/[^0-9]/g, '')}" style="background:#25D366;color:#fff;padding:12px 20px;text-decoration:none;border-radius:5px;font-weight:700;font-size:14px;display:inline-block;">
                    💬 WhatsApp Customer
                  </a>
                </td>
                <td>
                  <a href="tel:${inquiry.phone}" style="background:#1d4ed8;color:#fff;padding:12px 20px;text-decoration:none;border-radius:5px;font-weight:700;font-size:14px;display:inline-block;">
                    📞 Call ${inquiry.phone}
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#f9fafb;padding:14px 30px;border-top:1px solid #e5e7eb;text-align:center;">
            <p style="margin:0;font-size:12px;color:#9ca3af;">This is an automated internal notification from the Ariselux website inquiry system.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `;

  if (!mailer) {
    console.log(`\n======================================================`);
    console.log(`⚠️  [EMAIL NOTICE: SMTP CREDENTIALS MISSING IN backend/.env]`);
    console.log(`INQUIRY ID: ${inquiry.id} | CUSTOMER: ${inquiry.name} | PRODUCT: ${inquiry.product}`);
    console.log(`PHONE: ${inquiry.phone} | EMAIL: ${inquiry.email || 'None'}`);
    console.log(`MESSAGE: ${inquiry.message}`);
    console.log(`======================================================\n`);
    return { sent: false, reason: 'missing_credentials', message: 'SMTP_USER or SMTP_PASS not set in backend/.env' };
  }

  try {
    const info = await mailer.sendMail({
      // "[INQUIRY]" prefix in sender name makes this clearly identifiable
      // in sales1@'s Sent folder vs the customer acknowledgment email
      from: `"Ariselux Website [INQUIRY]" <${smtp.user}>`,
      to: company.email,
      replyTo: inquiry.email || undefined,
      subject: `🔔 New Inquiry: ${inquiry.product} — ${inquiry.name} (${inquiry.company || 'Direct'})`,
      html: salesEmailBody
    });
    console.log(`[SALES EMAIL SENT]: Delivered to ${company.email} (ID: ${info.messageId})`);
    return { sent: true, messageId: info.messageId };
  } catch (err) {
    console.error(`[EMAIL ERROR] Failed to send to ${company.email}:`, err.message);
    return { sent: false, error: err.message };
  }
}

/* ==========================================================
   CUSTOMER ACKNOWLEDGMENT EMAIL (sent to customer's inbox)
   Purpose: Confirm receipt to the person who submitted the form
   Style: Friendly branded confirmation with reference number
   ========================================================== */
export async function sendCustomerAcknowledgment(inquiry) {
  if (!inquiry.email) return { sent: false, reason: 'no_customer_email' };

  const currentConfig = getConfig();
  const { smtp, company } = currentConfig;
  const mailer = createTransporter(currentConfig);
  if (!mailer) return { sent: false, reason: 'missing_credentials' };

  // ── Customer confirmation email body ──
  const customerEmailBody = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:30px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

        <!-- HEADER: BRANDED CONFIRMATION (customer-facing, warm tone) -->
        <tr>
          <td style="background:#0f172a;padding:28px 30px;text-align:center;">
            <h1 style="margin:0 0 4px 0;font-size:22px;font-weight:800;color:#fff;letter-spacing:-0.5px;">Ariselux Equipments</h1>
            <p style="margin:0;font-size:12px;color:#94a3b8;letter-spacing:1px;text-transform:uppercase;">Private Limited · Haridwar, India</p>
          </td>
        </tr>

        <!-- GREEN SUCCESS BANNER -->
        <tr>
          <td style="background:#f0fdf4;padding:20px 30px;border-bottom:1px solid #bbf7d0;text-align:center;">
            <div style="font-size:36px;margin-bottom:8px;">✅</div>
            <h2 style="margin:0;font-size:18px;font-weight:700;color:#166534;">Your Quotation Request Has Been Received!</h2>
            <p style="margin:8px 0 0;font-size:13px;color:#15803d;">Reference ID: <strong style="font-family:monospace;">#${inquiry.id}</strong></p>
          </td>
        </tr>

        <!-- GREETING & CONTENT -->
        <tr>
          <td style="padding:28px 30px;">
            <p style="margin:0 0 15px;font-size:15px;color:#374151;">Dear <strong>${inquiry.name}</strong>,</p>
            <p style="margin:0 0 15px;font-size:14px;color:#6b7280;line-height:1.7;">
              Thank you for reaching out to Ariselux Equipments. We have successfully received your quotation request for:
            </p>

            <!-- PRODUCT HIGHLIGHT BOX -->
            <div style="background:#fff7ed;border-left:4px solid #f97316;border-radius:0 6px 6px 0;padding:14px 18px;margin:0 0 20px;">
              <div style="font-size:11px;font-weight:700;color:#9a3412;letter-spacing:1px;text-transform:uppercase;margin-bottom:3px;">Requested Product</div>
              <div style="font-size:18px;font-weight:800;color:#c2410c;">${inquiry.product}</div>
            </div>

            <p style="margin:0 0 20px;font-size:14px;color:#6b7280;line-height:1.7;">
              Our technical sales engineering team based in <strong>Haridwar, Uttarakhand</strong> is reviewing your requirements and will reach out to you within <strong>2 to 4 business hours</strong> with verified specifications and pricing.
            </p>

            <!-- WHAT HAPPENS NEXT -->
            <div style="background:#f8fafc;border-radius:6px;padding:18px;margin-bottom:20px;">
              <div style="font-size:12px;font-weight:700;color:#374151;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:12px;">What Happens Next</div>
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="vertical-align:top;width:24px;font-size:16px;">📋</td>
                  <td style="padding-left:10px;font-size:13px;color:#6b7280;padding-bottom:8px;">Our engineers review your technical requirements</td>
                </tr>
                <tr>
                  <td style="vertical-align:top;font-size:16px;">📞</td>
                  <td style="padding-left:10px;font-size:13px;color:#6b7280;padding-bottom:8px;">A dedicated sales representative contacts you within 2-4 hours</td>
                </tr>
                <tr>
                  <td style="vertical-align:top;font-size:16px;">📄</td>
                  <td style="padding-left:10px;font-size:13px;color:#6b7280;">You receive official pricing, datasheets & factory delivery timelines</td>
                </tr>
              </table>
            </div>

            <!-- DIRECT CONTACT BOX -->
            <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:16px 18px;">
              <div style="font-size:13px;font-weight:700;color:#1e40af;margin-bottom:8px;">Need Immediate Assistance?</div>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right:20px;font-size:13px;color:#374151;">
                    📞 <a href="tel:${company.phone}" style="color:#2563eb;font-weight:600;text-decoration:none;">${company.phone}</a>
                  </td>
                  <td style="font-size:13px;color:#374151;">
                    💬 <a href="https://wa.me/${company.whatsapp}" style="color:#25D366;font-weight:600;text-decoration:none;">Chat on WhatsApp</a>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#0f172a;padding:20px 30px;text-align:center;">
            <p style="margin:0 0 4px;font-size:13px;font-weight:600;color:#e2e8f0;">Ariselux Equipments Private Limited</p>
            <p style="margin:0 0 4px;font-size:12px;color:#64748b;">${company.address}</p>
            <p style="margin:0;font-size:12px;color:#475569;">
              <a href="mailto:${company.email}" style="color:#94a3b8;text-decoration:none;">${company.email}</a>
              &nbsp;·&nbsp;
              <a href="https://ariselux.com" style="color:#94a3b8;text-decoration:none;">ariselux.com</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `;

  try {
    const info = await mailer.sendMail({
      // Customer-facing: branded as Ariselux Equipments (not the internal sales1 account)
      // replyTo ensures any reply from the customer lands in sales@ariselux.com inbox
      from: `"Ariselux Equipments" <${smtp.user}>`,
      to: inquiry.email,
      replyTo: company.email,   // replies from customer → sales@ariselux.com
      subject: `Quotation Request Confirmed — ${inquiry.product} | Ariselux Equipments`,
      html: customerEmailBody
    });
    console.log(`[CUSTOMER ACK SENT]: Delivered to ${inquiry.email} (ID: ${info.messageId})`);
    return { sent: true, messageId: info.messageId };
  } catch (err) {
    console.error(`[ACK EMAIL ERROR] Failed to send to ${inquiry.email}:`, err.message);
    return { sent: false, error: err.message };
  }
}
