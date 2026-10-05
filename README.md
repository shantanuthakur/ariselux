# Ariselux Equipments Private Limited
### Official Website & Product Portfolio Repository

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![HTML5](https://img.shields.io/badge/HTML5-Modern-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Design%20System-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-Proprietary-F7941D)](#)

## 🔬 LED Technology & Mechanical USPs

1. **Durable Aluminum Casting**: Die-cast enclosures engineered for tough transportation and severe mining vibrations.
2. **High CRI (>85 out of 100)**: Accurate color rendering for nighttime site inspections, precision welding, and safety.
3. **Advanced Directional Optics**: Uniform light distribution reaching up to 5,000–10,000 m² at an average of 20 lux.
4. **50,000+ Hours Lifespan**: Industrial LED chips and thermal heat sinks for maintenance-free longevity.
5. **Ergonomic Towing & Lifting**: Standard central crane lifting eye, forklift chassis pockets, and foldable adjustable towbars.

---

## 💻 Website Architecture & Pages

The web application is designed with high visual fidelity, modern industrial styling, rich micro-interactions, responsive grids, and SEO optimization:

* **[index.html](file:///c:/Users/DELL/Desktop/ariselux/index.html)**:
  * Top contact notification bar (+91-8126732502, 18002025104, Bhagwanpur works)
  * Hero section with statistics counter (10+ Years, 500+ Towers, 28+ Clients)
  * Quick catalog download banner linking directly to the brochure
  * Product series showcase with live photography
  * LED technology feature breakdown & standard engineering attributes
  * 28-client national roster & client showcase poster
  * Industries overview (Construction, Mining, Roads & Highways, Events & Defense)
* **[products.html](file:///c:/Users/DELL/Desktop/ariselux/products.html)**:
  * Complete product catalog with real specifications, lumen ratings, engines, and masts
  * Interactive category tabs (All, Battery, Diesel, Solar, Without Genset, Petrol, Inflatable)
  * Official comparative suitability matrix across mining, construction, and events
  * Direct RFQ linking with pre-filled enquiry parameters
* **[about.html](file:///c:/Users/DELL/Desktop/ariselux/about.html)**:
  * Authentic company history (Established 2014, Arise Construction Equipments)
  * Corporate Pillars spotlight honoring ethical transparency, engineering excellence, and growth trajectory
  * Corporate Vision & Mission statements from official company literature
  * Expert Team & Quality Assurance documentation
* **[contact.html](file:///c:/Users/DELL/Desktop/ariselux/contact.html)**:
  * Direct RFQ submission form with automated category selection
  * Registered factory & office address in Haridwar, Uttarakhand
  * Direct phone, toll-free number, and 3 department email addresses
  * Embedded interactive Google Map for Bhagwanpur, Haridwar
* **[src/style.css](file:///c:/Users/DELL/Desktop/ariselux/src/style.css)**:
  * Custom CSS design system inspired by top industrial equipment brands
  * Dark mode sections, vibrant orange (`#F7941D`) accents, glassmorphic cards, and clean typography
  * Floating action triggers (instant WhatsApp chat and direct call)
* **[src/main.js](file:///c:/Users/DELL/Desktop/ariselux/src/main.js)**:
  * Header scroll states, mobile navigation drawer, scroll reveal animations, and number counters
  * URL hash-based tab auto-switching and contact form parameter pre-selection

---

## 🚀 Getting Started Locally

### Prerequisites
* **Node.js** (v18.0.0 or higher recommended)
* **npm** (v9.0.0 or higher)

### Installation
1. Clone or open the repository folder:
   ```bash
   cd c:\Users\DELL\Desktop\ariselux
   ```
2. Install npm dependencies:
   ```bash
   npm install
   ```

### Running Development Server
Start the local development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000/`.

### Building For Production
Generate optimized production bundles:
```bash
npm run build
```
Production assets will be emitted cleanly into the `dist/` directory.

---

## 📂 Project Architecture (Separated Frontend & Backend)

```text
ariselux/
├── frontend/                          # Vite + Vanilla JS + CSS Client
│   ├── public/                        # Static assets (images, icons, brochure PDF)
│   ├── src/
│   │   ├── main.js                    # Interactive UI logic & API form connectors
│   │   ├── product-detail.js          # Dynamic product detail page renderer & quote form
│   │   ├── products-data.js           # Frontend product specifications & gallery models
│   │   └── style.css                  # Design system tokens, utilities & responsive layouts
│   ├── index.html                     # Main landing page
│   ├── about.html                     # Corporate story & manufacturing profile
│   ├── products.html                  # Product portfolio & technical comparison matrix
│   ├── product-detail.html            # Dynamic model viewer & technical spec sheets
│   ├── contact.html                   # Factory address, quote form & Google Map
│   ├── vite.config.js                 # Vite config (configured with /api proxy to port 5000)
│   ├── .env                           # Frontend environment variables
│   ├── .env.example                   # Frontend environment template
│   └── package.json                   # Frontend scripts & dependencies
│
├── backend/                           # Node.js + Express REST API Service
│   ├── src/
│   │   ├── config/                    # Environment variables & company configuration
│   │   ├── controllers/               # Inquiry, Product, and Newsletter controllers
│   │   ├── routes/                    # Express route definitions (/api/inquiries, etc.)
│   │   ├── services/                  # Persistent JSON storage & Nodemailer email dispatch
│   │   ├── data/                      # Backend products catalog
│   │   ├── app.js                     # Express application configuration & middlewares
│   │   └── server.js                  # HTTP server bootstrap & graceful shutdown
│   ├── data/                          # Persistent inquiries and subscriber storage
│   ├── .env                           # Backend environment variables
│   ├── .env.example                   # Backend environment template
│   ├── package.json                   # Backend scripts & dependencies
│   └── README.md                      # Backend API documentation
│
├── package.json                       # Root workspace orchestration scripts
└── README.md                          # Repository documentation
```

---

## ⚡ Quickstart Guide

### Option 1: Run Both Concurrently from Root
```bash
# 1. Install all dependencies across both workspaces
npm run install:all

# 2. Run both Frontend (port 3000) and Backend (port 5000) concurrently
npm run dev
```

### Option 2: Run Separately
```bash
# Terminal 1 - Backend API:
cd backend
npm install
npm run dev

# Terminal 2 - Frontend:
cd frontend
npm install
npm run dev
```

- **Frontend Application**: [http://localhost:3000](http://localhost:3000)
- **Backend API Service**: [http://localhost:5000/api](http://localhost:5000/api)
- **API Health Check**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

## 📄 License & Attribution
© 2014 – 2026 **Ariselux Equipments Private Limited**. All Rights Reserved.  
Manufactured with pride in **Bhagwanpur - Haridwar, Uttarakhand, India**.
