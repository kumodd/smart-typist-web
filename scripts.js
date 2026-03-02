/**
 * Smart Typist Landing Page Scripts
 * Dynamically renders all content from CONFIG
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initAnnouncement();
  populateSEO();
  populateNav();
  populateHero();
  initTypingEffect();
  populateTrustBadges();
  populateFeatures();
  populateAIModes();
  populateComparison();
  populateHowItWorks();
  populatePricing();
  populateRoadmap();
  populateTestimonials();
  populateFAQ();
  populateNewsletter();
  populateDownload();
  populateFooter();
  initScrollEffects();
  initNavToggle();
  initFAQAccordion();
  initBackToTop();
  handleSectionVisibility();
});

//============================================================
// SECTION VISIBILITY
//============================================================
function handleSectionVisibility() {
  const sections = CONFIG.sections || {};

  if (!sections.announcement) {
    const el = document.getElementById('announcement-bar');
    if (el) el.classList.add('hidden');
  }
  if (!sections.trustBadges) {
    const el = document.getElementById('trust-badges');
    if (el) el.classList.add('hidden');
  }
  if (!sections.comparison) {
    const el = document.getElementById('comparison');
    if (el) el.classList.add('hidden');
  }
  if (!sections.newsletter) {
    const el = document.getElementById('newsletter');
    if (el) el.classList.add('hidden');
  }
}

//============================================================
// THEME MANAGEMENT
//============================================================
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || CONFIG.theme.defaultMode;
  document.documentElement.setAttribute('data-theme', savedTheme);

  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

//============================================================
// ANNOUNCEMENT BAR
//============================================================
function initAnnouncement() {
  const bar = document.getElementById('announcement-bar');
  const closeBtn = document.getElementById('announcement-close');
  const navbar = document.getElementById('navbar');

  if (!CONFIG.announcement?.enabled) {
    bar.classList.add('hidden');
    navbar.classList.add('no-announcement');
    return;
  }

  // Populate content
  document.getElementById('announcement-text').textContent = CONFIG.announcement.text;
  const link = document.getElementById('announcement-link');
  link.textContent = CONFIG.announcement.linkText;
  link.href = CONFIG.announcement.link;

  if (CONFIG.announcement.bgGradient) {
    bar.style.background = CONFIG.announcement.bgGradient;
  }

  // Close functionality
  closeBtn.addEventListener('click', () => {
    bar.classList.add('hidden');
    navbar.classList.add('no-announcement');
    sessionStorage.setItem('announcement-closed', 'true');
  });

  // Check if already closed this session
  if (sessionStorage.getItem('announcement-closed')) {
    bar.classList.add('hidden');
    navbar.classList.add('no-announcement');
  }
}

//============================================================
// SEO
//============================================================
function populateSEO() {
  document.getElementById('page-title').textContent = CONFIG.seo.title;
  document.getElementById('page-description').content = CONFIG.seo.description;
  document.getElementById('page-keywords').content = CONFIG.seo.keywords;

  // OpenGraph
  document.getElementById('og-title').content = CONFIG.seo.title;
  document.getElementById('og-description').content = CONFIG.seo.description;
  document.getElementById('twitter-title').content = CONFIG.seo.title;
}

//============================================================
// NAVIGATION
//============================================================
function populateNav() {
  document.getElementById('nav-app-name').textContent = CONFIG.app.name;

  // Logo
  const logoIcon = document.getElementById('logo-icon');
  if (CONFIG.app.logo?.imageUrl) {
    logoIcon.innerHTML = `<img src="${CONFIG.app.logo.imageUrl}" alt="${CONFIG.app.logo.alt}" style="width:24px;height:24px;">`;
  } else {
    logoIcon.textContent = CONFIG.app.logo?.emoji || '⌨️';
  }
}

function initNavToggle() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  const navbar = document.getElementById('navbar');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Close menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

//============================================================
// HERO
//============================================================
function populateHero() {
  const hero = CONFIG.hero;

  document.getElementById('hero-badge').textContent = hero.badge;
  document.getElementById('hero-title').innerHTML = hero.headline;
  document.getElementById('hero-subtitle').textContent = hero.subheadline;
  document.getElementById('hero-cta-primary').querySelector('span').textContent = hero.ctaPrimary;
  document.getElementById('hero-cta-secondary').textContent = hero.ctaSecondary;

  // Stats
  const statsContainer = document.getElementById('hero-stats');
  statsContainer.innerHTML = hero.stats.map(stat => `
    <div class="stat-item fade-in">
      <div class="stat-icon">${stat.icon || ''}</div>
      <div class="stat-value">${stat.value}</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');

  // Download links
  document.getElementById('hero-cta-primary').href = '#download';
}

//============================================================
// TYPING EFFECT
//============================================================
function initTypingEffect() {
  if (!CONFIG.hero.typingEffect?.enabled || !CONFIG.animations?.enabled) {
    document.querySelector('.hero-typing')?.classList.add('hidden');
    return;
  }

  const phrases = CONFIG.hero.typingEffect.phrases;
  const typingText = document.getElementById('typing-text');
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500; // Pause before next phrase
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

//============================================================
// TRUST BADGES
//============================================================
function populateTrustBadges() {
  if (!CONFIG.sections?.trustBadges) return;

  const container = document.getElementById('trust-grid');
  if (!container || !CONFIG.trustBadges?.items) return;

  container.innerHTML = CONFIG.trustBadges.items.map(item => `
    <div class="trust-item fade-in">
      <div class="trust-icon">${item.icon}</div>
      <div class="trust-content">
        <h4>${item.text}</h4>
        <p>${item.description}</p>
      </div>
    </div>
  `).join('');
}

//============================================================
// FEATURES
//============================================================
function populateFeatures() {
  const container = document.getElementById('features-grid');
  const features = CONFIG.features?.items || CONFIG.features;

  // Update titles if available
  if (CONFIG.features?.title) {
    document.getElementById('features-title').innerHTML = CONFIG.features.title;
  }
  if (CONFIG.features?.subtitle) {
    document.getElementById('features-subtitle').textContent = CONFIG.features.subtitle;
  }

  const featureItems = Array.isArray(features) ? features : [];

  container.innerHTML = featureItems.map(feature => `
    <div class="feature-card fade-in ${feature.highlight ? 'highlight' : ''}">
      <div class="feature-icon">${feature.icon}</div>
      <h3 class="feature-title">
        ${feature.title}
        <span class="feature-tag ${feature.tag.toLowerCase()}">${feature.tag}</span>
      </h3>
      <p class="feature-description">${feature.description}</p>
    </div>
  `).join('');
}

//============================================================
// AI MODES DEMO
//============================================================
function populateAIModes() {
  const tabsContainer = document.getElementById('ai-modes-tabs');
  const demoContainer = document.getElementById('ai-modes-demo');
  const aiModes = CONFIG.aiModes?.items || CONFIG.aiModes;

  // Update titles
  if (CONFIG.aiModes?.title) {
    document.getElementById('ai-modes-title').innerHTML = CONFIG.aiModes.title;
  }
  if (CONFIG.aiModes?.subtitle) {
    document.getElementById('ai-modes-subtitle').textContent = CONFIG.aiModes.subtitle;
  }

  const modes = Array.isArray(aiModes) ? aiModes : [];

  // Populate tabs
  tabsContainer.innerHTML = modes.map((mode, index) => `
    <button class="ai-mode-tab ${index === 0 ? 'active' : ''}" data-index="${index}">
      ${mode.icon} ${mode.name}
    </button>
  `).join('');

  // Show first mode by default
  showAIMode(0);

  // Tab click handlers
  tabsContainer.querySelectorAll('.ai-mode-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tabsContainer.querySelectorAll('.ai-mode-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      showAIMode(parseInt(tab.dataset.index));
    });
  });

  function showAIMode(index) {
    const mode = modes[index];
    if (!mode) return;

    demoContainer.innerHTML = `
      <div class="demo-section">
        <p class="demo-label">Before</p>
        <div class="demo-text demo-before">"${mode.example.before}"</div>
      </div>
      <div class="demo-arrow">↓ ${mode.icon} ${mode.name}</div>
      <div class="demo-section">
        <p class="demo-label">After</p>
        <div class="demo-text demo-after">"${mode.example.after}"</div>
      </div>
    `;
  }
}

//============================================================
// COMPARISON TABLE
//============================================================
function populateComparison() {
  if (!CONFIG.sections?.comparison) return;

  const table = document.getElementById('comparison-table');
  if (!table || !CONFIG.comparison) return;

  // Update titles
  if (CONFIG.comparison.title) {
    document.getElementById('comparison-title').innerHTML = CONFIG.comparison.title;
  }
  if (CONFIG.comparison.subtitle) {
    document.getElementById('comparison-subtitle').textContent = CONFIG.comparison.subtitle;
  }

  const competitors = CONFIG.comparison.competitors || [];
  const features = CONFIG.comparison.features || [];

  // Header
  let headerHtml = `<tr>
    <th>Feature</th>
    <th class="our-column">
      <div class="competitor-logo" style="background: var(--gradient-primary); color: white;">ST</div>
      <div>Smart Typist</div>
    </th>`;

  competitors.forEach(comp => {
    headerHtml += `<th>
      <div class="competitor-logo">${comp.logo}</div>
      <div>${comp.name}</div>
    </th>`;
  });
  headerHtml += '</tr>';

  // Body
  let bodyHtml = features.map(feature => {
    let row = `<tr>
      <td class="feature-name">${feature.name}</td>
      <td class="our-column">`;

    if (feature.smartTypist === true) {
      row += '<span class="check">✓</span>';
    } else if (feature.smartTypist === false) {
      row += '<span class="cross">✗</span>';
    } else {
      row += `<span class="basic">${feature.smartTypist}</span>`;
    }
    row += '</td>';

    // Gboard
    if (feature.gboard === true) {
      row += '<td><span class="check">✓</span></td>';
    } else if (feature.gboard === false) {
      row += '<td><span class="cross">✗</span></td>';
    } else {
      row += `<td><span class="basic">${feature.gboard}</span></td>`;
    }

    // SwiftKey
    if (feature.swiftkey === true) {
      row += '<td><span class="check">✓</span></td>';
    } else if (feature.swiftkey === false) {
      row += '<td><span class="cross">✗</span></td>';
    } else {
      row += `<td><span class="basic">${feature.swiftkey}</span></td>`;
    }

    row += '</tr>';
    return row;
  }).join('');

  table.innerHTML = `<thead>${headerHtml}</thead><tbody>${bodyHtml}</tbody>`;
}

//============================================================
// HOW IT WORKS
//============================================================
function populateHowItWorks() {
  const container = document.getElementById('steps-grid');
  const steps = CONFIG.howItWorks?.steps || CONFIG.howItWorks;

  // Update titles
  if (CONFIG.howItWorks?.title) {
    document.getElementById('steps-title').innerHTML = CONFIG.howItWorks.title;
  }
  if (CONFIG.howItWorks?.subtitle) {
    document.getElementById('steps-subtitle').textContent = CONFIG.howItWorks.subtitle;
  }

  const stepItems = Array.isArray(steps) ? steps : [];

  container.innerHTML = stepItems.map(step => `
    <div class="step-card fade-in">
      <div class="step-number">${step.step}</div>
      <div class="step-icon">${step.icon || ''}</div>
      <h3 class="step-title">${step.title}</h3>
      <p class="step-description">${step.description}</p>
    </div>
  `).join('');
}

//============================================================
// PRICING
//============================================================
function populatePricing() {
  const container = document.getElementById('pricing-grid');
  const plans = CONFIG.pricing.plans;

  // Update titles
  if (CONFIG.pricing.title) {
    document.getElementById('pricing-title').innerHTML = CONFIG.pricing.title;
  }
  if (CONFIG.pricing.subtitle) {
    document.getElementById('pricing-subtitle').textContent = CONFIG.pricing.subtitle;
  }

  // Update note
  if (CONFIG.pricing.apiCostNote && CONFIG.pricing.showApiCost) {
    document.getElementById('pricing-note').textContent = CONFIG.pricing.apiCostNote;
  }

  container.innerHTML = plans.map(plan => {
    const featuresHtml = plan.features.map(f =>
      `<li class="pricing-feature included">${f}</li>`
    ).join('');

    const notIncludedHtml = plan.notIncluded.map(f =>
      `<li class="pricing-feature not-included">${f}</li>`
    ).join('');

    let priceDisplay;
    if (plan.price === 0) {
      priceDisplay = '<span class="price-amount">Free</span>';
    } else {
      const originalPrice = plan.originalPrice
        ? `<span class="price-original">${CONFIG.pricing.currencySymbol}${plan.originalPrice}</span>`
        : '';
      priceDisplay = `${originalPrice}<span class="price-currency">${CONFIG.pricing.currencySymbol}</span><span class="price-amount">${plan.price}</span><span class="price-period">/${plan.period}</span>`;
    }

    const badge = plan.badge
      ? `<span class="pricing-badge">${plan.badge}</span>`
      : '';

    return `
      <div class="pricing-card ${plan.highlighted ? 'highlighted' : ''} fade-in">
        ${badge}
        <h3 class="pricing-name">${plan.name}</h3>
        <p class="pricing-description">${plan.description}</p>
        <div class="pricing-price">${priceDisplay}</div>
        <ul class="pricing-features">
          ${featuresHtml}
          ${notIncludedHtml}
        </ul>
        <a href="${plan.ctaLink || '#download'}" class="btn ${plan.highlighted ? 'btn-primary' : 'btn-secondary'} pricing-cta">${plan.cta}</a>
      </div>
    `;
  }).join('');
}

//============================================================
// ROADMAP
//============================================================
function populateRoadmap() {
  const container = document.getElementById('roadmap-grid');
  const features = CONFIG.upcomingFeatures?.items || CONFIG.upcomingFeatures;

  // Update titles
  if (CONFIG.upcomingFeatures?.title) {
    document.getElementById('roadmap-title').innerHTML = CONFIG.upcomingFeatures.title;
  }
  if (CONFIG.upcomingFeatures?.subtitle) {
    document.getElementById('roadmap-subtitle').textContent = CONFIG.upcomingFeatures.subtitle;
  }

  const items = Array.isArray(features) ? features : [];

  container.innerHTML = items.map(feature => {
    const statusClass = feature.status.toLowerCase().replace(/\s+/g, '-');
    const progressBar = feature.progress !== undefined
      ? `<div class="roadmap-progress"><div class="roadmap-progress-bar" style="width: ${feature.progress}%"></div></div>`
      : '';

    return `
      <div class="roadmap-card fade-in">
        <div class="roadmap-icon">${feature.icon || ''}</div>
        <span class="roadmap-status ${statusClass}">${feature.status}</span>
        <h3 class="roadmap-title">${feature.title}</h3>
        <p class="roadmap-description">${feature.description}</p>
        <p class="roadmap-eta">Expected: ${feature.eta}</p>
        ${progressBar}
      </div>
    `;
  }).join('');
}

//============================================================
// TESTIMONIALS
//============================================================
function populateTestimonials() {
  const container = document.getElementById('testimonials-grid');
  const testimonials = CONFIG.testimonials?.items || CONFIG.testimonials;

  // Update titles
  if (CONFIG.testimonials?.title) {
    document.getElementById('testimonials-title').innerHTML = CONFIG.testimonials.title;
  }
  if (CONFIG.testimonials?.subtitle) {
    document.getElementById('testimonials-subtitle').textContent = CONFIG.testimonials.subtitle;
  }

  const items = Array.isArray(testimonials) ? testimonials : [];

  container.innerHTML = items.map(testimonial => {
    const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
    const initials = testimonial.author.split(' ').map(n => n[0]).join('');

    const avatar = testimonial.avatar
      ? `<img src="${testimonial.avatar}" alt="${testimonial.author}" class="testimonial-avatar">`
      : `<div class="testimonial-avatar">${initials}</div>`;

    return `
      <div class="testimonial-card fade-in">
        <div class="testimonial-rating">${stars}</div>
        <p class="testimonial-quote">"${testimonial.quote}"</p>
        <div class="testimonial-author">
          ${avatar}
          <div>
            <p class="testimonial-name">${testimonial.author}</p>
            <p class="testimonial-role">${testimonial.role}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

//============================================================
// FAQ
//============================================================
function populateFAQ() {
  const container = document.getElementById('faq-list');
  const faq = CONFIG.faq?.items || CONFIG.faq;

  // Update titles
  if (CONFIG.faq?.title) {
    document.getElementById('faq-title').innerHTML = CONFIG.faq.title;
  }
  if (CONFIG.faq?.subtitle) {
    document.getElementById('faq-subtitle').textContent = CONFIG.faq.subtitle;
  }

  const items = Array.isArray(faq) ? faq : [];

  container.innerHTML = items.map((item, index) => `
    <div class="faq-item fade-in" data-index="${index}">
      <button class="faq-question">
        <span>${item.question}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer">
        <p>${item.answer}</p>
      </div>
    </div>
  `).join('');
}

function initFAQAccordion() {
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      const wasActive = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

      // Toggle current
      if (!wasActive) {
        item.classList.add('active');
      }
    });
  });
}

//============================================================
// NEWSLETTER
//============================================================
function populateNewsletter() {
  if (!CONFIG.newsletter?.enabled || !CONFIG.sections?.newsletter) {
    document.getElementById('newsletter')?.classList.add('hidden');
    return;
  }

  document.getElementById('newsletter-title').textContent = CONFIG.newsletter.title;
  document.getElementById('newsletter-subtitle').textContent = CONFIG.newsletter.subtitle;
  document.getElementById('newsletter-email').placeholder = CONFIG.newsletter.placeholder;
  document.getElementById('newsletter-btn').textContent = CONFIG.newsletter.buttonText;
  document.getElementById('newsletter-note').textContent = CONFIG.newsletter.note;

  // Form handling
  const form = document.getElementById('newsletter-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;

    // Show success message
    form.innerHTML = `<p style="color: var(--accent); font-size: var(--font-size-lg);">${CONFIG.newsletter.successMessage}</p>`;

    // In production, send to your email service here
    console.log('Newsletter signup:', email);
  });
}

//============================================================
// DOWNLOAD
//============================================================
function populateDownload() {
  const app = CONFIG.app;
  const cta = CONFIG.downloadCta || {};

  if (cta.title) {
    document.getElementById('download-title').innerHTML = cta.title;
  }

  document.getElementById('download-description').textContent =
    cta.subtitle || `Download ${app.name} now and transform your Android typing experience with AI.`;
  document.getElementById('download-version').textContent =
    `Version ${app.version} • ${app.minAndroid}`;

  document.getElementById('download-apk-btn').href = app.apkDownloadLink;
  document.getElementById('download-playstore-btn').href = app.playStoreLink;

  if (cta.apkButton) {
    document.getElementById('download-apk-text').textContent = cta.apkButton;
  }
  if (cta.playStoreButton) {
    document.getElementById('download-playstore-text').textContent = cta.playStoreButton;
  }
}

//============================================================
// FOOTER
//============================================================
function populateFooter() {
  document.getElementById('footer-app-name').textContent = CONFIG.app.name;
  document.getElementById('footer-tagline').textContent = CONFIG.app.description;
  document.getElementById('footer-copyright').textContent = CONFIG.footer.copyright;
  document.getElementById('footer-made').textContent = CONFIG.footer.madeWith;

  // Footer logo
  const footerLogoIcon = document.getElementById('footer-logo-icon');
  if (CONFIG.app.logo?.imageUrl) {
    footerLogoIcon.innerHTML = `<img src="${CONFIG.app.logo.imageUrl}" alt="${CONFIG.app.logo.alt}" style="width:24px;height:24px;">`;
  } else {
    footerLogoIcon.textContent = CONFIG.app.logo?.emoji || '⌨️';
  }

  // Social links
  const socialContainer = document.getElementById('footer-social');
  const socialIcons = {
    twitter: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    github: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
    linkedin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    instagram: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
    youtube: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    discord: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`
  };

  socialContainer.innerHTML = Object.entries(CONFIG.social)
    .filter(([_, url]) => url && url !== '#')
    .map(([platform, url]) => `
      <a href="${url}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="${platform}">
        ${socialIcons[platform] || '🔗'}
      </a>
    `).join('');

  // If no social links, show placeholders
  if (socialContainer.innerHTML === '') {
    socialContainer.innerHTML = ['twitter', 'github', 'linkedin', 'instagram'].map((platform) => `
      <a href="#" class="social-link" aria-label="${platform}">
        ${socialIcons[platform]}
      </a>
    `).join('');
  }

  // Footer links
  document.getElementById('footer-email').href = `mailto:${CONFIG.contact.support}`;
  document.getElementById('footer-privacy').href = CONFIG.app.privacyPolicyLink;
  document.getElementById('footer-terms').href = CONFIG.app.termsLink;
}

//============================================================
// BACK TO TOP
//============================================================
function initBackToTop() {
  const btn = document.getElementById('back-to-top');

  if (!CONFIG.footer?.showBackToTop) {
    btn?.classList.add('hidden');
    return;
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

//============================================================
// SCROLL ANIMATIONS
//============================================================
function initScrollEffects() {
  if (!CONFIG.animations?.enabled || CONFIG.animations?.reduceMotion) {
    // Show all elements immediately
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe all fade-in elements
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}
