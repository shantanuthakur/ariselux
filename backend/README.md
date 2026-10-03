# Ariselux Backend API

Production-ready Node.js & Express REST API for **Ariselux Equipments Private Limited**.

## 🚀 Features

- **Quotation & Inquiries API**:
  - `POST /api/inquiries`: Submit quotation request with validation, reference ID generation, and WhatsApp direct click-to-chat links.
  - `GET /api/inquiries`: Fetch all stored inquiries (supports `status` and `search` query parameters).
  - `GET /api/inquiries/:id`: Retrieve single inquiry details.
  - `PATCH /api/inquiries/:id/status`: Update status (`new`, `contacted`, `quoted`, `completed`, `archived`).
  - Friendly alias: `POST /api/contact`
- **Product Catalog API**:
  - `GET /api/products`: Full list of lighting tower models (filterable by category or keyword search).
  - `GET /api/products/categories`: Available product categories.
  - `GET /api/products/:id`: Get model specifications.
- **Newsletter Subscription**:
  - `POST /api/newsletter`: Subscribe with email validation.
  - `GET /api/newsletter`: List subscribers.
- **Email Notifications (Nodemailer)**:
  - Dispatches new inquiry alert to sales desk (`sales@ariselux.com`).
  - Dispatches branded acknowledgment to client.
  - Automatic fallback to mock console logging when SMTP is not configured.
- **Persistence**:
  - File-based JSON data store in `backend/data/` (requires zero database setup).

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
# Development (with Node native file watch)
npm run dev

# Production
npm start
```

---

## 📡 API Endpoints Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service health status |
| `POST` | `/api/inquiries` | Submit new inquiry / quotation request |
| `GET` | `/api/inquiries` | List all inquiries (`?search=diesel&status=new`) |
| `GET` | `/api/inquiries/:id` | View specific inquiry |
| `PATCH` | `/api/inquiries/:id/status` | Update inquiry status |
| `GET` | `/api/products` | All lighting towers (`?category=solar&search=slt`) |
| `GET` | `/api/products/categories` | Product category list |
| `GET` | `/api/products/:id` | Single product details |
| `POST` | `/api/newsletter` | Subscribe email to bulletins |
