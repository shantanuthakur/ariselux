/* ============================================
   ARISELUX - Main JavaScript
   Full Interactive Functionality
   ============================================ */

// --- Header Scroll Effect ---
const header = document.getElementById('header');
if (header) {
  const handleScroll = () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// --- Active Nav Link Highlighting ---
function updateActiveNavLink() {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const navLinks = document.querySelectorAll('.nav-menu a, .mobile-nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http')) {
      return;
    }
    const cleanHref = href.replace(/\/$/, '') || '/';
    if (cleanHref === currentPath || (currentPath === '' && cleanHref === '/')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
updateActiveNavLink();

// --- Mobile Navigation Toggle ---
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  });

  // Close mobile nav when a link is clicked
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// --- Scroll Reveal Animation ---
const revealElements = document.querySelectorAll('.reveal');
if (revealElements.length > 0 && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
} else {
  // Fallback for older browsers
  revealElements.forEach(el => el.classList.add('revealed'));
}

// --- Stat Counter Animation ---
const statNumbers = document.querySelectorAll('.stat-number[data-count]');
if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        let current = 0;
        const duration = 1800;
        const step = Math.max(1, Math.ceil(target / (duration / 16)));

        const counter = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(counter);
          }
          el.textContent = current + suffix;
        }, 16);

        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  statNumbers.forEach(el => statObserver.observe(el));
}

// --- Client Logo Slider (Infinite Auto-scroll) ---
function initLogoSliders() {
  const sliders = document.querySelectorAll('.logo-slider-track');
  sliders.forEach(track => {
    // Avoid re-cloning if already cloned
    if (track.dataset.cloned === 'true') return;
    const items = track.innerHTML;
    track.innerHTML = items + items;
    track.dataset.cloned = 'true';
  });
}
initLogoSliders();

// --- Product Category Tabs Filter (products.html) ---
function initProductFilters() {
  const tabs = document.querySelectorAll('.category-tab');
  const products = document.querySelectorAll('.product-item');

  if (tabs.length === 0 || products.length === 0) return;

  function filterCategory(category) {
    // Update active tab
    tabs.forEach(tab => {
      if (tab.getAttribute('data-category') === category) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Filter product cards
    products.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      if (category === 'all' || itemCategory === category) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }

  // Handle Tab Click
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-category');
      filterCategory(category);
      if (category !== 'all') {
        history.replaceState(null, null, '#' + category);
      } else {
        history.replaceState(null, null, window.location.pathname);
      }
    });
  });

  // Handle Initial Hash on Load (e.g. products.html#diesel)
  const initialHash = window.location.hash.replace('#', '').toLowerCase();
  if (initialHash) {
    const matchedTab = document.querySelector(`.category-tab[data-category="${initialHash}"]`);
    if (matchedTab) {
      filterCategory(initialHash);
      const targetElement = document.getElementById(initialHash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }

  // Listen to hash changes (e.g. user clicks footer link while on products page)
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash) {
      filterCategory(hash);
    } else {
      filterCategory('all');
    }
  });
}
initProductFilters();

// --- Contact Form Handler (contact.html) ---
function initContactForm() {
  const form = document.querySelector('form');
  if (!form) return;

  // Pre-select product dropdown if passed in URL query param: ?product=ace-b-01
  const urlParams = new URLSearchParams(window.location.search);
  const selectedProduct = urlParams.get('product');
  if (selectedProduct) {
    const productSelect = form.querySelector('select[name="product"]');
    if (productSelect) {
      // Find matching option
      for (const option of productSelect.options) {
        if (option.value.toLowerCase().includes(selectedProduct.toLowerCase()) || 
            selectedProduct.toLowerCase().includes(option.value.toLowerCase())) {
          option.selected = true;
          break;
        }
      }
    }
  }

  // Handle submit with Backend API call
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.textContent : 'Submit';

    const formData = new FormData(form);

    // ── Email Validation ──
    const emailValue = (formData.get('email') || '').trim();
    if (emailValue) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRegex.test(emailValue)) {
        alert('⚠️ Please enter a correct email address.\n\nExample: yourname@company.com');
        const emailInput = form.querySelector('input[name="email"]');
        if (emailInput) { emailInput.focus(); emailInput.select(); }
        return;
      }
    }

    const payload = {
      name: formData.get('name') || '',
      email: emailValue,
      phone: formData.get('phone') || '',
      company: formData.get('company') || '',
      product: formData.get('product') || 'General Inquiry',
      message: formData.get('message') || '',
      source: 'contact-page'
    };

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting Request...';
    }

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const inqId = data.inquiry ? data.inquiry.id : 'Recorded';
        const msg = `Thank you, ${payload.name || 'Sir/Madam'}!\n\nYour quotation request (#${inqId}) has been successfully submitted to our sales engineering desk in Haridwar.\n\nWe will reach out within 2-4 business hours.\n\nWould you like to open WhatsApp now to connect directly with our sales team?`;
        
        if (confirm(msg)) {
          if (data.whatsappDirectUrl) {
            window.open(data.whatsappDirectUrl, '_blank');
          } else {
            const waText = encodeURIComponent(`Hello Ariselux Team, I submitted an enquiry (Ref #${inqId}):\n*Name:* ${payload.name}\n*Product:* ${payload.product}\n*Phone:* ${payload.phone}\n*Message:* ${payload.message}`);
            window.open(`https://wa.me/918126732502?text=${waText}`, '_blank');
          }
        }
        form.reset();
      } else {
        alert(data.message || 'There was an issue submitting your request. Please call +91-8126732502 or WhatsApp us directly.');
      }
    } catch (err) {
      console.warn('API submission fallback:', err);
      const waText = encodeURIComponent(`Hello Ariselux Team, I want to enquire:\n*Name:* ${payload.name}\n*Product:* ${payload.product}\n*Phone:* ${payload.phone}\n*Company:* ${payload.company}\n*Message:* ${payload.message}`);
      if (confirm('Quotation request recorded. Would you like to send this directly to Ariselux WhatsApp desk right now?')) {
        window.open(`https://wa.me/918126732502?text=${waText}`, '_blank');
      }
      form.reset();
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    }
  });
}
initContactForm();

// --- Smooth scroll for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// --- Request for Quotation (RFQ) System & Modal ---
function initRequestForQuotation() {
  const productContainers = document.querySelectorAll('.product-card-image, .product-detail-image');
  
  // Inject RFQ Modal if not already in DOM
  let rfqModal = document.getElementById('rfq-modal');
  if (!rfqModal) {
    rfqModal = document.createElement('div');
    rfqModal.id = 'rfq-modal';
    rfqModal.className = 'rfq-modal-overlay';
    rfqModal.setAttribute('role', 'dialog');
    rfqModal.setAttribute('aria-modal', 'true');
    rfqModal.setAttribute('aria-labelledby', 'rfq-modal-title');
    rfqModal.innerHTML = `
      <div class="rfq-modal-dialog">
        <!-- Header -->
        <div class="rfq-modal-header">
          <div class="rfq-modal-title-group">
            <h3 id="rfq-modal-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Request for Quotation
            </h3>
            <p>Official Factory Pricing & Technical Datasheet • Direct Haridwar Works</p>
          </div>
          <button type="button" class="rfq-close-btn" id="rfq-close-btn" aria-label="Close Quotation Form">&times;</button>
        </div>

        <!-- Body -->
        <div class="rfq-modal-body">
          <!-- Form View -->
          <form id="rfq-form">
            <!-- Selected Product Preview ("in form selected item appear") -->
            <div class="rfq-selected-product">
              <img src="" alt="Selected Product" class="rfq-product-thumb" id="rfq-product-thumb">
              <div class="rfq-product-info">
                <span class="rfq-product-badge">Selected Item</span>
                <h4 class="rfq-product-name" id="rfq-product-name">Ariselux Light Tower</h4>
                <div class="rfq-product-sub" id="rfq-product-sub">Direct Haridwar Works OEM Dispatch</div>
              </div>
            </div>

            <input type="hidden" name="product" id="rfq-hidden-product" value="">
            <input type="hidden" name="source" value="rfq-badge-modal">

            <div class="rfq-form-grid">
              <!-- Full Name -->
              <div class="rfq-form-group">
                <label class="rfq-label" for="rfq-input-name">Full Name <span class="req">*</span></label>
                <input type="text" id="rfq-input-name" name="name" class="rfq-input" placeholder="e.g. Rajesh Kumar" required>
              </div>

              <!-- Company Name -->
              <div class="rfq-form-group">
                <label class="rfq-label" for="rfq-input-company">Company / Organization <span class="req">*</span></label>
                <input type="text" id="rfq-input-company" name="company" class="rfq-input" placeholder="e.g. L&T Infrastructure / NTPC" required>
              </div>

              <!-- Work Email -->
              <div class="rfq-form-group">
                <label class="rfq-label" for="rfq-input-email">Work Email <span class="req">*</span></label>
                <input type="email" id="rfq-input-email" name="email" class="rfq-input" placeholder="name@company.com" required>
              </div>

              <!-- Phone Number -->
              <div class="rfq-form-group">
                <label class="rfq-label" for="rfq-input-phone">Phone / WhatsApp <span class="req">*</span></label>
                <input type="tel" id="rfq-input-phone" name="phone" class="rfq-input" placeholder="+91 98765 43210" required>
              </div>

              <!-- Quantity Required -->
              <div class="rfq-form-group">
                <label class="rfq-label" for="rfq-select-quantity">Quantity Required</label>
                <select id="rfq-select-quantity" name="quantity" class="rfq-select">
                  <option value="1 Unit">1 Unit (Standard Deployment)</option>
                  <option value="2 - 5 Units">2 - 5 Units</option>
                  <option value="6 - 10 Units">6 - 10 Units</option>
                  <option value="10+ Units">10+ Units (Tender / Fleet Order)</option>
                </select>
              </div>

              <!-- Project Location / Delivery Site -->
              <div class="rfq-form-group">
                <label class="rfq-label" for="rfq-input-location">Delivery City / Site</label>
                <input type="text" id="rfq-input-location" name="location" class="rfq-input" placeholder="e.g. Haridwar, Gujarat, Delhi NCR">
              </div>

              <!-- Requirement / Specifications -->
              <div class="rfq-form-group full-width">
                <label class="rfq-label" for="rfq-textarea-message">Requirement Details & Specifications <span class="req">*</span></label>
                <textarea id="rfq-textarea-message" name="message" class="rfq-textarea" rows="3" placeholder="Please specify your project site, power requirements, or delivery schedule..." required></textarea>
              </div>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="rfq-submit-btn" id="rfq-submit-btn">
              <span>Submit Quotation Request</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>

            <div class="rfq-trust-footer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>ISO 9001:2015 Certified OEM • Sales Desk: +91-8126732502 • Immediate Response</span>
            </div>
          </form>

          <!-- Success Confirmation View -->
          <div id="rfq-success-view" class="rfq-success-view" style="display: none;">
            <div class="rfq-success-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h4 class="rfq-success-title">Quotation Request Received!</h4>
            <div class="rfq-ref-pill" id="rfq-ref-id">Ref #ARL-INQ-1001</div>
            <p class="rfq-success-desc" id="rfq-success-msg">
              Thank you! Our engineering desk at Haridwar has received your quotation request. We will prepare an official commercial quotation and technical proposal within 2-4 business hours.
            </p>
            <div class="rfq-success-actions">
              <a href="#" target="_blank" class="rfq-wa-btn" id="rfq-wa-direct-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                <span>Connect on WhatsApp Now</span>
              </a>
              <button type="button" class="rfq-done-btn" id="rfq-done-btn">Done / Close</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(rfqModal);
  }

  const closeBtn = document.getElementById('rfq-close-btn');
  const doneBtn = document.getElementById('rfq-done-btn');
  const rfqForm = document.getElementById('rfq-form');
  const rfqSuccessView = document.getElementById('rfq-success-view');
  const rfqProductThumb = document.getElementById('rfq-product-thumb');
  const rfqProductName = document.getElementById('rfq-product-name');
  const rfqProductSub = document.getElementById('rfq-product-sub');
  const rfqHiddenProduct = document.getElementById('rfq-hidden-product');
  const rfqMessageArea = document.getElementById('rfq-textarea-message');
  const rfqSubmitBtn = document.getElementById('rfq-submit-btn');

  function openRFQModal(productInfo) {
    const { title, imgSrc, specs } = productInfo;
    
    // Set selected item fields
    rfqProductName.textContent = title;
    rfqProductThumb.src = imgSrc || '/images/hero/hero-bg.png';
    rfqProductThumb.alt = title;
    rfqProductSub.textContent = specs || 'Direct Haridwar Works OEM Dispatch • Industrial Heavy Duty Spec';
    rfqHiddenProduct.value = title;
    rfqMessageArea.value = `Please share official price quotation, technical specification sheet, and delivery lead time for ${title}.`;

    // Reset views
    rfqForm.style.display = 'block';
    rfqSuccessView.style.display = 'none';
    if (rfqSubmitBtn) {
      rfqSubmitBtn.disabled = false;
      rfqSubmitBtn.innerHTML = `<span>Submit Quotation Request</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
    }

    rfqModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus first input
    const firstInput = document.getElementById('rfq-input-name');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 150);
    }
  }

  function closeRFQModal() {
    rfqModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeRFQModal);
  if (doneBtn) doneBtn.addEventListener('click', closeRFQModal);
  rfqModal.addEventListener('click', (e) => {
    if (e.target === rfqModal) closeRFQModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && rfqModal.classList.contains('active')) {
      closeRFQModal();
    }
  });

  // Extract product details helper
  function extractProductDetails(element) {
    const card = element.closest('.product-detail-card, .product-card, .product-item') || element;
    const heading = card.querySelector('h4, h3, h5, .product-title');
    const img = card.querySelector('img');
    const specsEl = card.querySelector('.product-specs');

    let title = '';
    if (heading) {
      title = heading.textContent.trim().replace(/\s+/g, ' ');
    } else if (img && img.alt) {
      title = img.alt.trim();
    } else {
      title = 'Ariselux Light Tower';
    }

    const imgSrc = img ? img.src : '';
    const specs = specsEl ? specsEl.textContent.trim().replace(/\s+/g, ' ') : '';
    return { title, imgSrc, specs };
  }

  // Attach "Request for Quotation" button badge to each product container
  productContainers.forEach(container => {
    // Remove any leftover zoom hints
    const oldHint = container.querySelector('.image-zoom-hint');
    if (oldHint) oldHint.remove();

    const img = container.querySelector('img');
    if (!img) return;

    // Add "Request for Quotation" button badge if not present
    if (!container.querySelector('.btn-request-quote-badge')) {
      const rfqBadge = document.createElement('button');
      rfqBadge.type = 'button';
      rfqBadge.className = 'btn-request-quote-badge';
      rfqBadge.setAttribute('title', 'Request Quotation for this model');
      rfqBadge.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        <span>Request for Quotation</span>
      `;
      container.appendChild(rfqBadge);

      rfqBadge.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const details = extractProductDetails(container);
        openRFQModal(details);
      });
    }

    // Clicking image container opens the RFQ modal directly
    container.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      e.preventDefault();
      const details = extractProductDetails(container);
      openRFQModal(details);
    });
  });

  // Also wire any "Enquire Now" buttons on product pages
  document.querySelectorAll('a[href*="/contact.html?product="], a[href*="contact.html?product="]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const details = extractProductDetails(btn);
      openRFQModal(details);
    });
  });

  // Handle Form Submission
  if (rfqForm) {
    rfqForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(rfqForm);
      const name = formData.get('name') || '';
      const email = formData.get('email') || '';
      const phone = formData.get('phone') || '';
      const company = formData.get('company') || '';
      const product = formData.get('product') || 'Ariselux Light Tower';
      const quantity = formData.get('quantity') || '1 Unit';
      const location = formData.get('location') || '';
      const messageNotes = formData.get('message') || '';

      const fullMessage = `Quantity Required: ${quantity}\nDelivery Location: ${location || 'Not specified'}\n\n${messageNotes}`;

      const payload = {
        name,
        email,
        phone,
        company,
        product,
        location,
        message: fullMessage,
        source: 'rfq-badge-modal'
      };

      if (rfqSubmitBtn) {
        rfqSubmitBtn.disabled = true;
        rfqSubmitBtn.innerHTML = `<span>Submitting Request...</span>`;
      }

      try {
        const response = await fetch('/api/inquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (response.ok && data.success) {
          const inqId = data.inquiry ? data.inquiry.id : 'Recorded';
          
          // Show Success View
          rfqForm.style.display = 'none';
          rfqSuccessView.style.display = 'block';

          const refPill = document.getElementById('rfq-ref-id');
          if (refPill) refPill.textContent = `Inquiry Ref #${inqId}`;

          const successMsg = document.getElementById('rfq-success-msg');
          if (successMsg) {
            successMsg.innerHTML = `Thank you, <strong>${name}</strong>! Your quotation request for <strong>${product}</strong> has been received by our engineering sales team in Haridwar.<br><br>An official commercial quotation and technical proposal will be sent to <strong>${email}</strong> and <strong>${phone}</strong> within 2-4 business hours.`;
          }

          const waBtn = document.getElementById('rfq-wa-direct-btn');
          if (waBtn) {
            const waText = encodeURIComponent(`Hello Ariselux Sales Desk, I requested a quote (Ref #${inqId}):\n*Product:* ${product}\n*Name:* ${name}\n*Company:* ${company}\n*Phone:* ${phone}\n*Quantity:* ${quantity}\n*Details:* ${messageNotes}`);
            waBtn.href = data.whatsappDirectUrl || data.whatsappUrl || `https://wa.me/918126732502?text=${waText}`;
          }

          rfqForm.reset();
        } else {
          alert(data.message || 'There was an issue submitting your quotation request. Please WhatsApp us directly at +91-8126732502.');
        }
      } catch (err) {
        console.warn('RFQ API submission fallback:', err);
        const waText = encodeURIComponent(`Hello Ariselux Sales Desk, I would like to request a quotation:\n*Product:* ${product}\n*Name:* ${name}\n*Company:* ${company}\n*Phone:* ${phone}\n*Quantity:* ${quantity}\n*Details:* ${messageNotes}`);
        
        // Show Success with direct WhatsApp option
        rfqForm.style.display = 'none';
        rfqSuccessView.style.display = 'block';
        
        const refPill = document.getElementById('rfq-ref-id');
        if (refPill) refPill.textContent = `Instant WhatsApp Connect`;

        const successMsg = document.getElementById('rfq-success-msg');
        if (successMsg) {
          successMsg.innerHTML = `Thank you, <strong>${name}</strong>! We've prepared your quotation details for <strong>${product}</strong>.<br><br>Click below to connect directly with our sales engineer on WhatsApp for instant pricing.`;
        }

        const waBtn = document.getElementById('rfq-wa-direct-btn');
        if (waBtn) {
          waBtn.href = `https://wa.me/918126732502?text=${waText}`;
        }

        rfqForm.reset();
      } finally {
        if (rfqSubmitBtn) {
          rfqSubmitBtn.disabled = false;
        }
      }
    });
  }
}
initRequestForQuotation();

