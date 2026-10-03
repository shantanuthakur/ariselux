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
    tls: { rejectUnauthorized: false },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000
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
    return {
      success: true,
      configured: true,
      message: `SMTP connection to ${smtp.host} verified successfully. No test email sent.`
    };
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
   SALES DESK NOTIFICATION EMAIL (sent to sales1@ariselux.com)
   Purpose: Alert the internal seller / sales engineering team about a new quotation request
   Style: Professional dark-header sales alert with complete details
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
          <td style="background:#dc2626;padding:22px 30px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <div style="font-size:11px;font-weight:700;letter-spacing:2px;color:#fecaca;text-transform:uppercase;margin-bottom:4px;">INTERNAL SALES &amp; QUOTATION ALERT</div>
                  <h1 style="margin:0;font-size:20px;color:#fff;font-weight:700;">New Quotation Request Received 📋</h1>
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
            <span style="font-size:12px;color:#9a3412;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Requested Light Tower / Model</span>
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
                <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #e5e7eb;">Company / Org</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-weight:700;color:#1e3a8a;">${inquiry.company || '<span style="color:#9ca3af;font-style:italic;">Direct Buyer</span>'}</td>
              </tr>
              <tr style="background:#f9fafb;">
                <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #e5e7eb;">Mobile / Phone</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;">
                  <a href="tel:${inquiry.phone}" style="font-size:16px;font-weight:700;color:#2563eb;text-decoration:none;">${inquiry.phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #e5e7eb;">Email Address</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;">
                  ${inquiry.email ? `<a href="mailto:${inquiry.email}" style="color:#2563eb;font-weight:600;text-decoration:none;">${inquiry.email}</a>` : '<span style="color:#9ca3af;font-style:italic;">Not provided</span>'}
                </td>
              </tr>
              ${inquiry.location ? `
              <tr style="background:#f9fafb;">
                <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #e5e7eb;">Delivery Site / Location</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;">${inquiry.location}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #e5e7eb;vertical-align:top;">Quotation Details / Requirement</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;white-space:pre-wrap;line-height:1.6;color:#374151;">${inquiry.message || '<span style="color:#9ca3af;font-style:italic;">Quotation requested</span>'}</td>
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
            <table cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="padding-right:10px;">
                  <a href="https://wa.me/${inquiry.phone.replace(/[^0-9]/g, '')}" style="background:#25D366;color:#fff;padding:12px 18px;text-decoration:none;border-radius:6px;font-weight:700;font-size:13px;display:inline-block;">
                    💬 WhatsApp Customer
                  </a>
                </td>
                ${inquiry.email ? `
                <td style="padding-right:10px;">
                  <a href="mailto:${inquiry.email}?subject=Quotation%20for%20${encodeURIComponent(inquiry.product)}%20(Ref%20%23${inquiry.id})%20-%20Ariselux%20Equipments" style="background:#1e40af;color:#fff;padding:12px 18px;text-decoration:none;border-radius:6px;font-weight:700;font-size:13px;display:inline-block;">
                    ✉️ Reply by Email
                  </a>
                </td>
                ` : ''}
                <td>
                  <a href="tel:${inquiry.phone}" style="background:#374151;color:#fff;padding:12px 18px;text-decoration:none;border-radius:6px;font-weight:700;font-size:13px;display:inline-block;">
                    📞 Call Customer
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#f9fafb;padding:14px 30px;border-top:1px solid #e5e7eb;text-align:center;">
            <p style="margin:0;font-size:12px;color:#9ca3af;">Automated notification from Ariselux Website Quotation Engine • Haridwar Works</p>
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
      from: `"Ariselux Quotation Desk" <${smtp.user}>`,
      to: company.email,
      replyTo: inquiry.email || undefined,
      subject: `📋 New Quotation Request: ${inquiry.product} — ${inquiry.name} (${inquiry.company || 'Direct'}) [Ref #${inquiry.id}]`,
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
   Purpose: Confirm to the buyer "We have received your quotation request"
   Style: Professional branded quotation receipt with reference number & specs
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

        <!-- HEADER: BRANDED CONFIRMATION -->
        <tr>
          <td style="background:#0b1e36;padding:26px 30px;text-align:center;">
            <h1 style="margin:0 0 4px 0;font-size:22px;font-weight:800;color:#fff;letter-spacing:0.5px;">Ariselux Equipments</h1>
            <p style="margin:0;font-size:12px;color:#94a3b8;letter-spacing:1px;text-transform:uppercase;">Private Limited · Heavy Mobile Lighting Systems · Haridwar Works</p>
          </td>
        </tr>

        <!-- GREEN SUCCESS BANNER -->
        <tr>
          <td style="background:#f0fdf4;padding:22px 30px;border-bottom:1px solid #bbf7d0;text-align:center;">
            <div style="font-size:36px;margin-bottom:8px;">✅</div>
            <h2 style="margin:0;font-size:20px;font-weight:700;color:#166534;">We Have Received Your Quotation Request!</h2>
            <p style="margin:8px 0 0;font-size:13px;color:#15803d;">Quotation Ref ID: <strong style="font-family:monospace;background:#dcfce7;padding:3px 8px;border-radius:4px;">#${inquiry.id}</strong></p>
          </td>
        </tr>

        <!-- GREETING & CONTENT -->
        <tr>
          <td style="padding:28px 30px;">
            <p style="margin:0 0 15px;font-size:15px;color:#374151;">Dear <strong>${inquiry.name}</strong>,</p>
            <p style="margin:0 0 18px;font-size:14px;color:#4b5563;line-height:1.7;">
              Thank you for reaching out to <strong>Ariselux Equipments Private Limited</strong>. We have successfully received your quotation request for the following model:
            </p>

            <!-- PRODUCT HIGHLIGHT BOX -->
            <div style="background:#fff7ed;border-left:4px solid #f97316;border-radius:0 6px 6px 0;padding:16px 20px;margin:0 0 22px;">
              <div style="font-size:11px;font-weight:700;color:#9a3412;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">Requested Model</div>
              <div style="font-size:20px;font-weight:800;color:#c2410c;">${inquiry.product}</div>
              <div style="font-size:12px;color:#7c2d12;margin-top:3px;">Direct Haridwar Works Factory Dispatch • Industrial OEM Grade</div>
            </div>

            <!-- SUBMISSION DETAILS SUMMARY -->
            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px 20px;margin-bottom:22px;">
              <div style="font-size:11px;font-weight:700;color:#64748b;letter-spacing:1px;text-transform:uppercase;margin-bottom:10px;">Your Submission Summary</div>
              <table width="100%" cellpadding="4" cellspacing="0" style="font-size:13px;color:#334155;">
                <tr>
                  <td width="35%" style="font-weight:600;color:#64748b;">Selected Model:</td>
                  <td><strong>${inquiry.product}</strong></td>
                </tr>
                ${inquiry.company ? `
                <tr>
                  <td style="font-weight:600;color:#64748b;">Company / Org:</td>
                  <td>${inquiry.company}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="font-weight:600;color:#64748b;">Contact Mobile:</td>
                  <td>${inquiry.phone}</td>
                </tr>
                ${inquiry.location ? `
                <tr>
                  <td style="font-weight:600;color:#64748b;">Delivery Site:</td>
                  <td>${inquiry.location}</td>
                </tr>
                ` : ''}
                ${inquiry.message ? `
                <tr>
                  <td style="font-weight:600;color:#64748b;vertical-align:top;">Your Requirement:</td>
                  <td style="white-space:pre-wrap;line-height:1.5;">${inquiry.message}</td>
                </tr>
                ` : ''}
              </table>
            </div>

            <p style="margin:0 0 20px;font-size:14px;color:#4b5563;line-height:1.7;">
              Our technical sales engineering team at <strong>Haridwar Works</strong> is reviewing your requirements. We will connect with you within <strong>2 to 4 business hours</strong> with the verified technical proposal, factory pricing, and delivery timeline.
            </p>

            <!-- WHAT HAPPENS NEXT -->
            <div style="background:#f8fafc;border-radius:6px;padding:18px;margin-bottom:22px;border:1px solid #e2e8f0;">
              <div style="font-size:12px;font-weight:700;color:#374151;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:12px;">What Happens Next</div>
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="vertical-align:top;width:24px;font-size:16px;">📋</td>
                  <td style="padding-left:10px;font-size:13px;color:#4b5563;padding-bottom:8px;">Our engineering team analyzes your site illumination & power requirements</td>
                </tr>
                <tr>
                  <td style="vertical-align:top;font-size:16px;">📞</td>
                  <td style="padding-left:10px;font-size:13px;color:#4b5563;padding-bottom:8px;">A dedicated technical sales engineer connects with you via phone or email</td>
                </tr>
                <tr>
                  <td style="vertical-align:top;font-size:16px;">📄</td>
                  <td style="padding-left:10px;font-size:13px;color:#4b5563;">You receive the official commercial quote, technical datasheet, and delivery schedule</td>
                </tr>
              </table>
            </div>

            <!-- DIRECT CONTACT BOX -->
            <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:16px 20px;">
              <div style="font-size:13px;font-weight:700;color:#1e40af;margin-bottom:8px;">Need Instant Assistance?</div>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right:20px;font-size:13px;color:#374151;">
                    📞 <a href="tel:${company.phone}" style="color:#2563eb;font-weight:700;text-decoration:none;">${company.phone}</a>
                  </td>
                  <td style="font-size:13px;color:#374151;">
                    💬 <a href="https://wa.me/${company.whatsapp}" style="color:#25D366;font-weight:700;text-decoration:none;">Connect on WhatsApp</a>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#0b1e36;padding:22px 30px;text-align:center;">
            <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#e2e8f0;">Ariselux Equipments Private Limited</p>
            <p style="margin:0 0 4px;font-size:12px;color:#94a3b8;">${company.address}</p>
            <p style="margin:0;font-size:12px;color:#64748b;">
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
      from: `"Ariselux Equipments" <${smtp.user}>`,
      to: inquiry.email,
      replyTo: company.email,
      subject: `We have received your quotation request: ${inquiry.product} [Ref #${inquiry.id}] — Ariselux Equipments`,
      html: customerEmailBody
    });
    console.log(`[CUSTOMER ACK SENT]: Delivered to ${inquiry.email} (ID: ${info.messageId})`);
    return { sent: true, messageId: info.messageId };
  } catch (err) {
    console.error(`[ACK EMAIL ERROR] Failed to send to ${inquiry.email}:`, err.message);
    return { sent: false, error: err.message };
  }
}
