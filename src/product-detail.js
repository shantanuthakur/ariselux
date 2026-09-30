import { productsData } from './products-data.js';

// Header scroll effect
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  });
}

// Determine which product to display
const urlParams = new URLSearchParams(window.location.search);
const requestedId = (urlParams.get('id') || 'ace-lt-12000').toLowerCase();
const product = productsData[requestedId] || productsData['ace-lt-12000'];

// Populate DOM with product data
function renderProductDetail() {
  // Page Title & Meta
  document.title = `${product.title} - ${product.tagline} | Ariselux`;
  const metaDesc = document.getElementById('page-meta-desc');
  if (metaDesc) metaDesc.content = product.description;

  // Breadcrumbs
  const bcCategory = document.getElementById('breadcrumb-category');
  if (bcCategory) bcCategory.textContent = product.categoryName;
  const bcProduct = document.getElementById('breadcrumb-product');
  if (bcProduct) bcProduct.textContent = product.title;

  // Header Title
  const titleEl = document.getElementById('product-title');
  if (titleEl) titleEl.textContent = product.title;

  // Description
  const descEl = document.getElementById('product-desc');
  if (descEl) descEl.textContent = product.description;

  // Quick 4-Grid Specs
  const specsGrid = document.getElementById('quick-specs-grid');
  if (specsGrid && product.quickSpecs) {
    specsGrid.innerHTML = Object.values(product.quickSpecs).map(spec => `
      <div class="iconcoltitle">
        <i><img src="${spec.icon}" alt="${spec.title}"></i>
        <h3>${spec.title}</h3>
        <span>${spec.value}</span>
      </div>
    `).join('');
  }

  // Main Image & Gallery
  const mainImg = document.getElementById('main-product-img');
  if (mainImg) {
    mainImg.src = product.image;
    mainImg.alt = product.title;
  }

  const galleryThumbs = document.getElementById('gallery-thumbs');
  if (galleryThumbs && product.gallery && product.gallery.length > 1) {
    galleryThumbs.innerHTML = product.gallery.map((imgUrl, idx) => `
      <div class="gallery-thumb ${idx === 0 ? 'active' : ''}" data-src="${imgUrl}">
        <img src="${imgUrl}" alt="${product.title} view ${idx + 1}">
      </div>
    `).join('');

    galleryThumbs.querySelectorAll('.gallery-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        galleryThumbs.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        if (mainImg) {
          mainImg.src = thumb.getAttribute('data-src');
        }
      });
    });
  } else if (galleryThumbs) {
    galleryThumbs.style.display = 'none';
  }

  // Specifications Table
  const tableBody = document.getElementById('table-body');
  if (tableBody && product.tableSpecs) {
    tableBody.innerHTML = product.tableSpecs.map(spec => `
      <tr>
        <td><strong>${spec.engine}</strong></td>
        <td>${spec.generator}</td>
        <td>${spec.tankSize}</td>
        <td>${spec.sockets}</td>
        <td><strong>${spec.weight}</strong></td>
        <td>${spec.dimensions}</td>
      </tr>
    `).join('');
  }

  // Features Section
  const featuresImg = document.getElementById('features-img');
  if (featuresImg && product.featureImage) {
    featuresImg.src = product.featureImage;
  }

  const featuresList = document.getElementById('features-list');
  if (featuresList && product.features) {
    featuresList.innerHTML = product.features.map(f => `<li>${f}</li>`).join('');
  }

  // Highlights Accordion
  const accContainer = document.getElementById('highlights-accordion');
  if (accContainer && product.highlights) {
    accContainer.innerHTML = product.highlights.map((h, idx) => `
      <div class="accordion-item">
        <button class="accordion-button ${idx === 0 ? 'active' : ''}" type="button">
          <span>${h.title}</span>
          <span class="accordion-icon">+</span>
        </button>
        <div class="accordion-body ${idx === 0 ? 'show' : ''}">
          <ul>
            ${h.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');

    // Accordion Toggle Logic
    accContainer.querySelectorAll('.accordion-button').forEach(btn => {
      btn.addEventListener('click', () => {
        const body = btn.nextElementSibling;
        const isActive = btn.classList.contains('active');

        // Close all
        accContainer.querySelectorAll('.accordion-button').forEach(b => b.classList.remove('active'));
        accContainer.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('show'));

        // If wasn't active, open it
        if (!isActive) {
          btn.classList.add('active');
          body.classList.add('show');
        }
      });
    });
  }

  // "Best For" interactive hover/click image slider
  const bestforList = document.getElementById('bestfor-list');
  const bestforImg = document.getElementById('bestfor-main-img');
  if (bestforList && bestforImg) {
    const items = bestforList.querySelectorAll('li');
    items.forEach(item => {
      const handleSelect = () => {
        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const imgSrc = item.getAttribute('data-img');
        if (imgSrc && bestforImg.src !== imgSrc) {
          bestforImg.style.opacity = '0.4';
          setTimeout(() => {
            bestforImg.src = imgSrc;
            bestforImg.style.opacity = '1';
          }, 150);
        }
      };

      item.addEventListener('mouseenter', handleSelect);
      item.addEventListener('click', handleSelect);
    });
  }

  // Other Variants
  const variantsContainer = document.getElementById('variants-container');
  if (variantsContainer && product.variants) {
    variantsContainer.innerHTML = product.variants.map(varId => {
      const v = productsData[varId];
      if (!v) return '';
      return `
        <div class="variant-card">
          <div class="variant-card-img">
            <img src="${v.image}" alt="${v.title}">
          </div>
          <h4>${v.title}</h4>
          <p style="font-size: 13px; color: var(--gray-600); margin-bottom: 15px;">${v.tagline}</p>
          <a href="/product-detail.html?id=${v.id}" class="btn-theme" style="padding: 10px 16px; font-size: 13px; text-align: center;">Know More →</a>
        </div>
      `;
    }).join('');
  }

  // Form Pre-selection
  const hiddenProdInput = document.getElementById('form-selected-product');
  if (hiddenProdInput) {
    hiddenProdInput.value = product.title;
  }
}

renderProductDetail();

// Inquiry Form Submission
const detailForm = document.getElementById('detail-inquiry-form');
if (detailForm) {
  detailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(detailForm);
    const name = formData.get('c_name') || '';
    const email = formData.get('c_email') || '';
    const phone = formData.get('c_number') || '';
    const company = formData.get('c_company') || '';
    const location = formData.get('c_location') || '';
    const message = formData.get('c_message') || '';
    const selectedProd = product.title;

    const msg = `Thank you, ${name}! Your quotation request for "${selectedProd}" has been received.\n\nOur engineering sales desk in Haridwar will reach out to you within 2-4 hours.\n\nWould you like to connect directly on WhatsApp with our sales team right now?`;

    if (confirm(msg)) {
      const waText = encodeURIComponent(`Hello Ariselux Team, I would like a quote for:\n\n*Product:* ${selectedProd}\n*Name:* ${name}\n*Company:* ${company}\n*Phone:* ${phone}\n*Location:* ${location}\n*Requirement:* ${message}`);
      window.open(`https://wa.me/918126732502?text=${waText}`, '_blank');
    }

    detailForm.reset();
  });
}
