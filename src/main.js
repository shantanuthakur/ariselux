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

  // Handle submit feedback
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name') || '';
    const phone = formData.get('phone') || '';
    const company = formData.get('company') || '';
    const product = formData.get('product') || '';
    const message = formData.get('message') || '';

    // Create a confirmation message
    const msg = `Thank you, ${name || 'Sir/Madam'}! Your quotation request has been recorded.\n\nOur technical sales engineers from Haridwar will reach out to you within 2-4 business hours.\n\nWould you like to connect directly on WhatsApp with our sales desk right now?`;
    
    if (confirm(msg)) {
      const waText = encodeURIComponent(`Hello Ariselux Team, I submitted an enquiry on your website.\n\n*Name:* ${name}\n*Company:* ${company}\n*Phone:* ${phone}\n*Product:* ${product}\n*Requirement:* ${message}`);
      window.open(`https://wa.me/918126732502?text=${waText}`, '_blank');
    }
    form.reset();
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
