# Ariselux Backend API Service
### Node.js & Express REST API for Ariselux Equipments Private Limited

[![Node.js](https://img.shields.io/badge/Node.js-18%2B%20%7C%2020%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express-4.21.2-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![Nodemailer](https://img.shields.io/badge/Nodemailer-6.10.0-007ACC?logo=gmail&logoColor=white)](https://nodemailer.com/)

Production-ready backend API service powering the commercial quotation engine, technical consultation intake, product catalog delivery, and automated email notifications for **Ariselux Equipments Private Limited**.

---

## 🚀 Features & Capabilities

- **Dedicated Commercial Quotation API (RFQ)**:
  - `POST /api/quotations` (alias: `POST /api/rfq`): Process unit quotation requests, calculate lead times, generate unique reference IDs (`RFQ-<TIMESTAMP>-<HASH>`), and return direct WhatsApp click-to-chat links.
  - `GET /api/quotations`: Retrieve list of all commercial quotation submissions.
  - `GET /api/quotations/:id`: Retrieve a specific quotation by ID.
- **Dedicated Technical Enquiry API**:
  - `POST /api/enquiries`: Process technical & engineering consultation queries with unique reference IDs (`ENQ-<TIMESTAMP>-<HASH>`).
  - `GET /api/enquiries`: Retrieve list of all technical consultations.
  - `GET /api/enquiries/:id`: Retrieve a specific enquiry by ID.
- **Smart Unified Inquiry Dispatcher**:
  - `POST /api/inquiries` (alias: `POST /api/contact`): Intelligently categorizes submissions into quotations or enquiries based on payload properties.
  - `GET /api/inquiries`: Fetch all inquiries (supports `?status=`, `?search=`, and `?type=` query parameters).
  - `GET /api/inquiries/:id`: Retrieve single inquiry.
  - `PATCH /api/inquiries/:id/status`: Update inquiry lifecycle status (`new`, `contacted`, `quoted`, `completed`, `archived`).
- **Product Catalog API**:
  - `GET /api/products`: Full list of lighting tower models (filterable by `?category=` or `?search=`).
  - `GET /api/products/categories`: All 8 product category definitions.
  - `GET /api/products/:id`: Technical specification sheet for any model.
- **Newsletter Subscription API**:
  - `POST /api/newsletter`: Subscribe user email to technical bulletins.
  - `GET /api/newsletter`: List all subscriber records.
- **Automated Email Dispatch (Nodemailer)**:
  - Alerts Ariselux sales desk (`sales@ariselux.com`) on new submissions.
  - Sends a branded acknowledgment email to the customer.
  - Automatic fallback to formatted console logging when SMTP is unconfigured.
- **Zero-DB File Persistence**:
  - Automatically initializes and reads/writes JSON storage in `backend/data/` (`quotations.json`, `enquiries.json`, `inquiries.json`, `subscribers.json`).
- **Security & Reliability**:
  - **Honeypot Shield**: Silently discards bot submissions triggering `website_hp` or `_gotcha`.
  - **Rate Limiting**: In-memory sliding window capping submissions to 8 per 10 minutes per IP.
  - **Deduplication**: 60-second in-memory cache blocking duplicate submissions.
  - **Audit Logging**: Structured log output with Indian Standard Time (IST) in `backend/ariselux.log` with 5MB auto-rotation.

---

## 🛠️ Setup & Running

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment (`.env`)
Copy `.env.example` to `.env`:
```env
PORT=5000
NODE_ENV=development
CLIENT_ORIGIN=http://localhost:3000

COMPANY_EMAIL=sales@ariselux.com
COMPANY_PHONE=+918126732502

# Optional SMTP Settings (leave blank for development console logging)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
FROM_EMAIL=sales@ariselux.com
```

### 3. Run Server
```bash
# Development (with native Node file watching)
npm run dev

# Production
npm start
```

---

## 📡 API Endpoints Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service health status & timestamp |
| `POST` | `/api/quotations` | Submit commercial quotation (RFQ) |
| `POST` | `/api/rfq` | Alias for `/api/quotations` |
| `GET` | `/api/quotations` | List all quotations |
| `GET` | `/api/quotations/:id` | View specific quotation |
| `POST` | `/api/enquiries` | Submit technical consultation enquiry |
| `GET` | `/api/enquiries` | List all technical enquiries |
| `GET` | `/api/enquiries/:id` | View specific technical enquiry |
| `POST` | `/api/inquiries` | Smart unified inquiry / RFQ endpoint |
| `POST` | `/api/contact` | Alias for `/api/inquiries` |
| `GET` | `/api/inquiries` | List all unified inquiries (`?search=diesel&status=new&type=quotation`) |
| `GET` | `/api/inquiries/:id` | View specific inquiry |
| `PATCH` | `/api/inquiries/:id/status` | Update inquiry status (`new`, `contacted`, `quoted`, `completed`, `archived`) |
| `GET` | `/api/products` | All lighting towers (`?category=solar&search=slt`) |
| `GET` | `/api/products/categories` | Product category list |
| `GET` | `/api/products/:id` | Single product details |
| `POST` | `/api/newsletter` | Subscribe email to technical bulletins |
| `GET` | `/api/newsletter` | List subscribers |
