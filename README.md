# Ariselux Equipments Private Limited
### Official Full-Stack Web Platform & Commercial Quotation Engine

[![Node.js](https://img.shields.io/badge/Node.js-18%2B%20%7C%2020%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express-4.21.2-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla%20ES6%2B-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-Modern%20Semantic-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Custom%20Design%20System-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Nodemailer](https://img.shields.io/badge/Nodemailer-6.10.0-007ACC?logo=gmail&logoColor=white)](https://nodemailer.com/)
[![License](https://img.shields.io/badge/License-Proprietary-F7941D)](#)

---

## 📌 Overview

**Ariselux Equipments Private Limited** (formerly Arise Construction Equipments, founded in 2014) is a premier Indian manufacturer of heavy-duty, high-efficiency **Mobile Lighting Towers** engineered for mining, highway construction, disaster management, civil infrastructure, and defense operations.

This repository contains the complete full-stack web application and quotation engine powering the official Ariselux platform:
- **Frontend Client (`frontend/`)**: High-performance multi-page application built with modern semantic HTML5, custom CSS design system, and vanilla ES6+ JavaScript bundled via Vite.
- **Backend API Service (`backend/`)**: Robust Node.js + Express REST API providing commercial quotation processing (RFQ), technical consultation dispatch, dynamic product catalog services, spam protection, rate limiting, file persistence, audit logging, and automated Nodemailer email notifications.
- **Monorepo Workspace Orchestration**: Unified root `package.json` managing dependencies and parallel concurrent execution for seamless development.

---

## 🔬 Engineering & Mechanical USPs

1. **Heavy-Duty Die-Cast Aluminum Enclosures**: IP-rated luminaire housing engineered to absorb heavy site vibration, extreme heat, dust, and continuous transit impact.
2. **High Color Rendering Index (CRI > 85)**: True daylight simulation reducing operator fatigue and improving night precision for welding, excavation, and structural inspection.
3. **Advanced Directional Optics**: Precision illumination patterns spanning up to 5,000–10,000 m² at 20+ average lux.
4. **50,000+ Hours LED Longevity**: Industrial-grade LED arrays paired with engineered heat sinks for zero-maintenance operation.
5. **Ergonomic Towing & Mast Deployment**: Certified central crane lifting lugs, forklift chassis pockets, 359° mast rotation, and automatic hydraulic/winch telescoping masts up to 12.0 meters.

---

## 💻 Full-Stack Architecture

```text
ariselux/
├── frontend/                          # Vite-Powered Frontend Client
│   ├── public/                        # Static assets (brand logos, product photography, icons)
│   │   ├── images/
│   │   │   ├── bestfor/               # Industry application photography
│   │   │   ├── clients/               # Client logos & corporate credentials
│   │   │   ├── company/               # Factory & workshop imagery
│   │   │   ├── features/              # Feature highlight imagery
│   │   │   ├── hero/                  # High-resolution hero banners
│   │   │   ├── icons/                 # Technical spec SVG icons
│   │   │   ├── industries/            # Sector graphics (Mining, Infra, etc.)
│   │   │   └── products/              # Tower photography across all categories
│   │   ├── favicon.png                # Browser favicon
│   │   └── logo*.png                  # Ariselux official logo variations
│   ├── src/
│   │   ├── main.js                    # Global interactions, counters, forms, modals & API connectors
│   │   ├── product-detail.js          # Dynamic single-product renderer, gallery & quotation modal
│   │   ├── products-data.js           # Comprehensive product catalog data & technical specs
│   │   └── style.css                  # Industrial design system tokens, themes & responsive layouts
│   ├── index.html                     # Corporate homepage & brand showcase
│   ├── about.html                     # Corporate profile, manufacturing history & quality standards
│   ├── products.html                  # Filterable product catalog & technical comparison matrix
│   ├── product-detail.html            # Dynamic model viewer & technical spec sheet
│   ├── contact.html                   # Factory address, dual contact forms & interactive Google Map
│   ├── vite.config.js                 # Multi-page build configuration with /api reverse proxy
│   ├── .env                           # Frontend environment variables (VITE_API_URL)
│   ├── .env.example                   # Frontend environment configuration template
│   └── package.json                   # Frontend dependencies and Vite scripts
│
├── backend/                           # Node.js + Express REST API Service
│   ├── data/                          # Persistent JSON data stores (zero external DB required)
│   │   ├── inquiries.json             # Unified historical ledger of all customer inquiries
│   │   ├── quotations.json            # Dedicated commercial quotation submissions (RFQ)
│   │   ├── enquiries.json             # Dedicated technical & factory consultation submissions
│   │   └── subscribers.json           # Newsletter bulletin subscribers
│   ├── src/
│   │   ├── config/
│   │   │   └── index.js               # Environment config loader with live hot-reload
│   │   ├── middleware/
│   │   │   └── adminAuth.js            # API-key protection for private admin reads
│   │   ├── controllers/
│   │   │   ├── inquiryController.js   # Commercial RFQ & technical enquiry business logic
│   │   │   ├── productController.js   # Product catalog & category filtering logic
│   │   │   └── newsletterController.js# Newsletter subscription management
│   │   ├── data/
│   │   │   └── products.js            # In-memory product models & specifications
│   │   ├── routes/
│   │   │   ├── quotationRoutes.js     # Commercial quotation routes (/api/quotations, /api/rfq)
│   │   │   ├── enquiryRoutes.js       # Technical consultation routes (/api/enquiries)
│   │   │   ├── inquiryRoutes.js       # Unified inquiry routes (/api/inquiries, /api/contact)
│   │   │   ├── productRoutes.js       # Product catalog routes (/api/products)
│   │   │   └── newsletterRoutes.js    # Newsletter routes (/api/newsletter)
│   │   ├── services/
│   │   │   ├── emailService.js        # Nodemailer dispatch (sales alerts & client acknowledgments)
│   │   │   ├── logService.js          # IST timestamped file logger with 5MB auto-rotation
│   │   │   └── storageService.js      # Asynchronous JSON file persistence
│   │   ├── app.js                     # Express app setup, CORS, route mounting, 404 & error handlers
│   │   └── server.js                  # HTTP server initialization & graceful shutdown listeners
│   ├── ariselux.log                   # Active system audit & operational log file
│   ├── .env                           # Backend environment variables (ports, SMTP, origins)
│   ├── .env.example                   # Backend environment configuration template
│   ├── package.json                   # Backend dependencies (express, cors, morgan, nodemailer)
│   └── README.md                      # Backend service documentation
│
├── package.json                       # Root workspace orchestrator (concurrently)
├── package-lock.json                  # Root lockfile
├── .gitignore                         # Git exclusion rules for node_modules, dist, logs, envs
└── README.md                          # Repository documentation
```

---

## 🌐 Web Application Pages & Modules

### 1. Corporate Homepage (`frontend/index.html`)
* **Top Header Notification Bar**: Direct factory line (+91-8126732502), national toll-free (18002025104), and Bhagwanpur Works location notice.
* **Hero Banner & Metrics Counter**: Animated statistics (10+ Years Manufacturing, 500+ Towers Deployed, 28+ Corporate Clients).
* **Equipment Series Showcase**: Live product photography with category tags and direct spec exploration.
* **Engineering Advantages**: High-CRI LED breakdown, directional optics, vibration absorption, and fuel economy.
* **National Client Roster**: Showcase of 28+ leading infrastructure, EPC, and mining clients.
* **Interactive RFQ Triggers**: Quick-action buttons linking directly to commercial quotation forms.
* **Floating Contact Buttons**: Direct WhatsApp click-to-chat and instant calling triggers.

### 2. Product Catalog & Comparison (`frontend/products.html`)
* **Category Filtering**: Instant client-side tab switching across 8 product categories:
  * All Products
  * Battery Powered
  * Diesel Powered
  * Solar Powered
  * Without Genset (Grid Powered)
  * Petrol Powered
  * Battery-Petrol Hybrid
  * Inflatable Balloon Towers
* **Technical Suitability Matrix**: Side-by-side comparison matrix evaluating engine type, mast height, lumen output, runtime, and project suitability across mining, highway paving, and civil events.
* **Direct RFQ Modals**: Model-aware quotation dialog pre-populating model specifications.

### 3. Dynamic Product Detail Viewer (`frontend/product-detail.html`)
* **URL Parameter Routing**: Loads rich specifications dynamically based on the URL query string (e.g. `product-detail.html?id=ace-lt-12000`).
* **Interactive Media Gallery**: High-res multi-angle photography with thumbnail switching and lightbox zoom.
* **Key Specifications Grid**: Visual badges for Mast Height, Lumen Rating, Engine/Battery Runtime, and Coverage Area.
* **Complete Technical Data Sheets**: Comprehensive tabular breakdown of mechanical, electrical, and structural specifications.
* **"Best For" Industry Application Cards**: Contextual photographs illustrating recommended real-world deployment sites.
* **Integrated Quotation & Technical Enquiry Modal**: Direct submission forms connected to backend APIs.

### 4. About Ariselux (`frontend/about.html`)
* **Company Heritage**: Journey from founding in 2014 as Arise Construction Equipments to ISO-aligned industrial manufacturing.
* **Manufacturing Facility**: Bhagwanpur - Roorkee works infrastructure overview.
* **Corporate Pillars**: Ethical transparency, engineering precision, and post-sales technical support.
* **Vision & Quality Assurance**: Stringent fabrication, powder coating, vibration testing, and optical calibration protocols.

### 5. Contact & Factory Portal (`frontend/contact.html`)
* **Dual Request Forms**:
  * **Commercial Quotation (RFQ)**: Includes GSTIN, unit quantity, delivery timeline, site location, and technical options.
  * **Technical Consultation**: Direct engineering queries regarding illumination layout, fuel consumption, or custom mast specs.
* **Registered Address**: Plot No. 25, Sector 8A, IIE SIDCUL, Roorkee, Uttarakhand.
* **Interactive Location**: Embedded Google Map for the Bhagwanpur manufacturing plant.
* **Direct Contacts**: Department-specific email routing (`sales@ariselux.com`, `contact@ariselux.com`, `info@ariselux.com`).

---

## ⚡ Backend REST API Engine

### Core Features

* **Dual Submission Pipelines**:
  * **Commercial RFQ (`/api/quotations`)**: Assigns reference IDs in format `RFQ-<TIMESTAMP>-<HASH>`, stores commercial data in `backend/data/quotations.json`, logs submission, and sends sales/client emails.
  * **Technical Consultation (`/api/enquiries`)**: Assigns reference IDs in format `ENQ-<TIMESTAMP>-<HASH>`, stores technical consultation data in `backend/data/enquiries.json`, and notifies the engineering desk.
  * **Smart Unified Fallback (`/api/inquiries`, `/api/contact`)**: Intelligently routes incoming requests to quotation or enquiry controllers based on payload fields.
* **Enterprise Security & Spam Protection**:
  * **Honeypot Trap**: Silently neutralizes automated bot spam via hidden `website_hp` and `_gotcha` fields.
  * **IP Rate Limiting**: In-memory sliding window restricting clients to 8 requests per 10 minutes.
  * **Deduplication Cache**: 60-second window preventing duplicate double-click submissions.
  * **Admin API Protection**: Private quotation, enquiry, inquiry, and subscriber reads require `x-admin-key` or a Bearer token.
  * **Proxy Awareness**: Uses the forwarded visitor IP when deployed behind Cloudflare or another reverse proxy.
* **Automated Email Dispatch (Nodemailer)**:
  * Commercial RFQ alert dispatched to `sales@ariselux.com`.
  * Branded HTML acknowledgment email sent to the client.
  * Automatic graceful fallback to formatted console logging when SMTP credentials are not configured in `.env`.
* **Zero-DB File Persistence**:
  * Stored in `backend/data/` using asynchronous file access with automatic folder and file initialization.
* **Production Audit Logging (`backend/src/services/logService.js`)**:
  * Real-time append to `backend/ariselux.log` with Indian Standard Time (`IST`) formatting.
  * Automatic file rotation (renames to `ariselux.log.1` when size exceeds 5MB).
  * Tracks startups, quotations, enquiries, email delivery receipts, rate limit trips, spam blocks, and errors.

### API Endpoints Reference

| Method | Endpoint | Description | Request Body / Parameters |
|---|---|---|---|
| `GET` | `/api/health` | Service health status & uptime | None |
| `POST` | `/api/quotations` | Submit commercial quotation (RFQ) | `{ name, phone, email, company, gstin, product, quantity, deliveryTimeline, deliveryLocation, message }` |
| `GET` | `/api/quotations` | List all stored quotations (admin key required) | `x-admin-key` header |
| `GET` | `/api/quotations/:id` | Get specific quotation details (admin key required) | `id` + admin key |
| `POST` | `/api/enquiries` | Submit technical consultation | `{ name, phone, email, company, location, enquiryType, product, projectType, preferredChannel, message }` |
| `GET` | `/api/enquiries` | List all technical enquiries (admin key required) | `x-admin-key` header |
| `GET` | `/api/enquiries/:id` | Get specific enquiry details (admin key required) | `id` + admin key |
| `POST` | `/api/inquiries` | Smart unified inquiry / RFQ endpoint | Payload with auto-detection of type |
| `POST` | `/api/rfq` | Alias for `/api/quotations` | Same as `/api/quotations` |
| `POST` | `/api/contact` | Alias for `/api/inquiries` | Same as `/api/inquiries` |
| `GET` | `/api/inquiries` | List all unified inquiries (admin key required) | Query params + `x-admin-key` header |
| `GET` | `/api/inquiries/:id` | Get single unified inquiry (admin key required) | `id` + admin key |
| `PATCH` | `/api/inquiries/:id/status`| Update inquiry status (admin key required) | `{ status: "new" \| "contacted" \| "quoted" \| "completed" \| "archived" }` |
| `GET` | `/api/products` | Retrieve lighting tower catalog | Query params: `?category=solar&search=slt` |
| `GET` | `/api/products/categories` | Retrieve list of product categories | None |
| `GET` | `/api/products/:id` | Retrieve specific product specs | `id` (e.g. `ace-lt-12000`) |
| `POST` | `/api/newsletter` | Subscribe email to technical bulletins | `{ email: "user@example.com" }` |
| `GET` | `/api/newsletter` | List newsletter subscribers (admin key required) | `x-admin-key` header |

---

## 🚜 Product Portfolio Breakdown

| Model ID | Model Name | Category | Lighting Output | Mast / Height | Power / Engine / Battery |
|---|---|---|---|---|---|
| `ace-b-01` | **ACE B-01** | Battery Powered | 4 x 100W LED (56,000 Lumens) | 4.5m Manual Winch | 1.2 kWh LiFePO4 Battery |
| `ace-b-02` | **ACE B-02** | Battery Powered | 4 x 150W LED (84,000 Lumens) | 5.5m Winch Mast | 2.4 kWh LiFePO4 Battery |
| `ace-b-04` | **ACE B-04** | Battery Powered | 4 x 250W LED (1,40,000 Lumens) | 6.5m Electric Winch | 4.8 kWh Industrial LiFePO4 |
| `ace-lt-6000` | **ACE LT 6000** | Diesel Powered | 4 x 350W LED (1,96,000 Lumens) | 7.5m Telescopic Mast | Twin Cylinder Diesel (Kubota/Greaves) |
| `ace-lt-9000` | **ACE LT 9000** | Diesel Powered | 4 x 500W LED (2,80,000 Lumens) | 9.0m Hydraulic Mast | 3-Cylinder Water-Cooled Diesel |
| `ace-lt-12000` | **ACE LT 12000** | Diesel Powered | 6 x 500W LED (2,40,000 - 4,20,000 Lumens) | 12.0m Hydraulic Telescopic | Escort Kubota 14.5 HP Diesel |
| `ace-3-slt-6000`| **ACE 3 SLT 6000**| Solar Powered | 4 x 30,000 Lumens (1,20,000 Lumens) | 7.0m 359° Rotation | 2,340W Monocrystalline Array + 3 KVA Inverter |
| `ace-5-slt-6000`| **ACE 5 SLT 6000**| Solar Powered | 4 x 30,000 Lumens (1,20,000 Lumens) | 7.0m 359° Rotation | 2,340W Monocrystalline Array + 5 KVA Inverter |
| `without-genset`| **Without Genset**| External / Grid | 4 x 350W / 500W (1,96,000 Lumens) | 6.5m Winch Mast | 220V AC Industrial Mains Inlet |
| `ace-plt-4000` | **ACE PLT 4000** | Petrol Powered | 4 x 200W LED (1,12,000 Lumens) | 5.5m Telescopic Mast | Honda 4-Stroke OHV Petrol Engine |
| `ace-pblt-3000`| **ACE PBLT 3000**| Hybrid | 4 x 150W LED (84,000 Lumens) | 5.5m Telescopic Mast | Auto-Start Petrol Generator + LiFePO4 Core |
| `ace-pblt-4000`| **ACE PBLT 4000**| Hybrid | 4 x 250W LED (1,40,000 Lumens) | 6.5m Telescopic Mast | Microprocessor Smart Hybrid Dual Power |
| `ace-1-2-it-4500`| **ACE 1.2 IT 4500**| Inflatable Balloon | 1,000W LED Balloon (1,30,000 Lumens) | 4.5m Inflatable Column | 360° Non-Glare Diffused Column (50 kg) |

---

## 🚀 Quickstart & Development Guide

### Prerequisites
* **Node.js**: v18.0.0 or higher (v20+ LTS recommended)
* **npm**: v9.0.0 or higher

### 1. Installation
Clone the repository and install all dependencies across root, frontend, and backend with a single command:
```bash
cd c:\Users\DELL\Desktop\ariselux

# Installs dependencies for frontend and backend workspaces
npm run install:all
```

### 2. Environment Configuration

#### Backend Configuration (`backend/.env`)
Copy `backend/.env.example` to `backend/.env` and update credentials as required:
```env
PORT=5000
NODE_ENV=development
CLIENT_ORIGIN=http://localhost:3000
ADMIN_API_KEY=replace-with-a-long-random-admin-key

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

> **Note**: If `SMTP_USER` and `SMTP_PASS` are left empty, emails will not fail; they are gracefully logged to the backend console and recorded in `backend/ariselux.log`.

#### Frontend Configuration (`frontend/.env`)
Copy `frontend/.env.example` to `frontend/.env`:
```env
VITE_API_URL=/api
```

For a separately hosted production API, set `VITE_API_URL` to the complete API base URL, for example:
```env
VITE_API_URL=https://api.example.com/api
```

---

### 3. Running Locally

#### Option A: Run Both Concurrently (Recommended)
From the project root directory, launch both the Vite client and Express backend in parallel:
```bash
npm run dev
```
* **Frontend Application**: [http://localhost:3000](http://localhost:3000) (Vite dev server with automatic `/api` proxy)
* **Backend API Service**: [http://localhost:5000](http://localhost:5000)
* **API Health Check**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

#### Option B: Run Workspaces Individually
You can run each workspace in a separate terminal:

**Terminal 1 — Backend API Server:**
```bash
npm run dev:backend
# Or: cd backend && npm run dev
```

**Terminal 2 — Frontend Client:**
```bash
npm run dev:frontend
# Or: cd frontend && npm run dev
```

---

### 4. Available Root Scripts

| Script | Command | Purpose |
|---|---|---|
| `npm run install:all` | `npm install --workspace=frontend && npm install --workspace=backend` | Installs dependencies across both workspaces |
| `npm run dev` | `concurrently ...` | Runs both frontend (port 3000) and backend (port 5000) concurrently |
| `npm run dev:frontend`| `npm run dev --workspace=frontend` | Starts Vite dev server for frontend only |
| `npm run dev:backend` | `npm run dev --workspace=backend` | Starts Express server with `--watch-path=src` |
| `npm run build:frontend` | `npm run build --workspace=frontend` | Compiles optimized static assets to `frontend/dist/` |
| `npm run start:backend` | `npm run start --workspace=backend` | Starts backend in production mode (`node src/server.js`) |

---

## 📦 Production Build & Deployment

### Building the Frontend
To compile optimized production assets:
```bash
npm run build:frontend
```
Production assets are generated in `frontend/dist/` ready to be served by any static host (Nginx, Apache, Cloudflare Pages, AWS S3, etc.).

### Deploying the Backend
To start the backend in production mode:
```bash
npm run start:backend
```
Ensure your production environment specifies:
- `NODE_ENV=production`
- `CLIENT_ORIGIN=https://your-domain.com`
- `ADMIN_API_KEY` set to a long random secret. Send it as `x-admin-key` or `Authorization: Bearer <key>` for private listing/status endpoints.
- Valid SMTP credentials in `backend/.env` for customer acknowledgment and sales desk emails.

### Cloudflare Pages Deployment

The Vite frontend is ready for Cloudflare Pages:

| Setting | Value |
|---|---|
| Root directory | `frontend` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variable | `VITE_API_URL=https://your-api-domain.com/api` |

The current Express backend is a regular Node.js service and stores submissions in local JSON files. Deploy it on a Node-compatible host, then point `VITE_API_URL` at it. Do not deploy the backend as a static Pages site. A full Cloudflare-only deployment requires converting the API to Pages Functions and moving persistence to D1, KV, or R2.

Keep `backend/.env` and SMTP credentials out of Git and Cloudflare Pages variables. Store backend secrets only in the backend host's secret manager.

---

## 📝 Logging & Monitoring

The backend service maintains structured file logging in `backend/ariselux.log`:
- **Format**: `[DD/MM/YYYY, HH:MM:SS IST] [LEVEL] [CATEGORY] Message | {metadata}`
- **Rotation**: Automatically creates `ariselux.log.1` when reaching 5 MB.
- **Events Tracked**: Server bootstrap, quotation receipts, technical enquiries, SMTP delivery statuses, rate limit triggers, honeypot blocks, deduplication blocks, and unhandled errors.

---

## 📄 License & Attribution

© 2014 – 2026 **Ariselux Equipments Private Limited**. All Rights Reserved.  
Manufactured with pride in **Bhagwanpur - Roorkee, Uttarakhand, India**.
