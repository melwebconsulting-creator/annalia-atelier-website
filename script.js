/**
 * ANNALIA ATELIER — Luxury Nail Studio & Artistry
 * Standalone Vanilla JavaScript (No Build Tools Required)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Data Store
  const PORTFOLIO_DATA = [
    {
      id: 'set-chrome-french',
      title: 'Molten Chrome French Tips',
      category: 'chrome',
      categoryLabel: 'Glazed Chrome',
      image: 'assets/images/hero_nail_artistry_1793074977263.jpg',
      shape: 'Medium Almond',
      length: 'Medium',
      technique: 'Apres Gel-X + Mirror Silver Chrome Finish',
      description: 'High-shine reflective chrome tips over an ethereal translucent nude base. Clean micro-apex with flawless cuticle lines.'
    },
    {
      id: 'set-clean-micro-french',
      title: 'Micro French Minimalist Line',
      category: 'french',
      categoryLabel: 'French & Micro-Tips',
      image: 'assets/images/nail_minimalist_french_1793074979102.jpg',
      shape: 'Short Squoval',
      length: 'Natural / Short',
      technique: 'Structured Luminary Gel + Crisp White Micro-Tip',
      description: 'Understated luxury. A hairline micro-tip that elongates natural nail beds while maintaining pristine daily functionality.'
    },
    {
      id: 'set-pearl-glazed',
      title: 'Pearlescent Glazed Donut Nude',
      category: 'chrome',
      categoryLabel: 'Glazed Chrome',
      image: 'assets/images/nail_chrome_glazed_1793074978410.jpg',
      shape: 'Soft Almond',
      length: 'Medium',
      technique: 'Japanese Sheer Syrup Gel + Unicorn Chrome Powder',
      description: 'Radiant lavender-pink shimmer with an opalescent glaze that catches golden daylight. Silky smooth finish.'
    },
    {
      id: 'set-3d-celestial-droplets',
      title: 'Bespoke 3D Fluid Swirls & Water Droplets',
      category: 'custom-3d',
      categoryLabel: 'Bespoke 3D Art',
      image: 'assets/images/nail_custom_art_1793074980060.jpg',
      shape: 'Almond',
      length: 'Medium',
      technique: 'Sculpted 3D Hard Gel + Liquid Chrome Ribbons',
      description: 'Tactile Japanese hard gel sculpting with tactile chrome curves, metallic accents, and glass-like dew drop accents on neutral milky base.'
    },
    {
      id: 'set-milky-clean-nude',
      title: 'Milky Sheer Syrup Overlay',
      category: 'minimalist',
      categoryLabel: 'Minimalist & Nude',
      image: 'assets/images/atelier_studio_space_1793074980459.jpg',
      shape: 'Natural Oval',
      length: 'Short',
      technique: 'Structured Japanese Gel Overlay',
      description: 'Clean girl aesthetic perfected. Multiple sheer milky syrup gel layers cured over structured base for healthy, glassy natural nails.'
    }
  ];

  const DEFAULT_BOOKING_URL = 'https://beacons.ai/annalia.atelier';

  // 2. Booking URL State
  let currentBookingUrl = localStorage.getItem('annalia_booking_url') || DEFAULT_BOOKING_URL;

  const updateBookingLinks = () => {
    const bookingLinks = document.querySelectorAll('.js-booking-link');
    bookingLinks.forEach(link => {
      if (link.tagName === 'A') {
        link.href = currentBookingUrl;
      }
    });
  };
  updateBookingLinks();

  // 3. Header Scroll Effect
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  // 4. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      const isOpen = mobileDrawer.classList.contains('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when links are clicked
    const drawerLinks = mobileDrawer.querySelectorAll('a, button');
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 5. Toast Notification Helper
  const toast = document.getElementById('toastNotice');
  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  };

  // 6. Interactive Set Price Estimator
  const toggleEstimatorBtn = document.getElementById('toggleEstimatorBtn');
  const estimatorCard = document.getElementById('estimatorCard');
  const estimatorTotalDisplay = document.getElementById('estimatorTotalDisplay');
  const bookConfiguredSetBtn = document.getElementById('bookConfiguredSetBtn');

  if (toggleEstimatorBtn && estimatorCard) {
    toggleEstimatorBtn.addEventListener('click', () => {
      estimatorCard.classList.toggle('active');
      const isActive = estimatorCard.classList.contains('active');
      toggleEstimatorBtn.textContent = isActive ? 'Hide Estimator' : 'Interactive Set Estimator';
    });

    const calculateTotal = () => {
      const selectedBaseInput = document.querySelector('input[name="estimator_base"]:checked');
      const selectedArtInput = document.querySelector('input[name="estimator_art"]:checked');
      const removalCheckbox = document.getElementById('estimatorRemoval');

      const baseVal = selectedBaseInput ? parseInt(selectedBaseInput.value, 10) : 95;
      const artVal = selectedArtInput ? parseInt(selectedArtInput.value, 10) : 20;
      const removalVal = (removalCheckbox && removalCheckbox.checked) ? 25 : 0;

      const total = baseVal + artVal + removalVal;
      if (estimatorTotalDisplay) {
        estimatorTotalDisplay.textContent = `$${total} CAD`;
      }
      return { total, baseInput: selectedBaseInput };
    };

    // Attach change events to all estimator inputs
    const estimatorInputs = estimatorCard.querySelectorAll('input');
    estimatorInputs.forEach(input => {
      input.addEventListener('change', () => {
        calculateTotal();
        // Update styling of parent choice
        if (input.type === 'radio') {
          const name = input.name;
          document.querySelectorAll(`input[name="${name}"]`).forEach(r => {
            r.closest('.radio-choice')?.classList.remove('selected');
          });
          input.closest('.radio-choice')?.classList.add('selected');
        } else if (input.type === 'checkbox') {
          if (input.checked) {
            input.closest('.radio-choice')?.classList.add('selected');
          } else {
            input.closest('.radio-choice')?.classList.remove('selected');
          }
        }
      });
    });

    if (bookConfiguredSetBtn) {
      bookConfiguredSetBtn.addEventListener('click', () => {
        const { baseInput } = calculateTotal();
        const serviceSelect = document.getElementById('bookingServiceSelect');
        if (serviceSelect && baseInput) {
          const serviceId = baseInput.dataset.serviceId;
          if (serviceId) {
            serviceSelect.value = serviceId;
          }
        }
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  // 7. Service Card Buttons -> Booking
  const selectServiceBtns = document.querySelectorAll('.js-select-service');
  selectServiceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const serviceId = btn.getAttribute('data-service-id');
      const serviceSelect = document.getElementById('bookingServiceSelect');
      if (serviceSelect && serviceId) {
        serviceSelect.value = serviceId;
      }
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // 8. Portfolio Gallery Filter & Render
  const portfolioGrid = document.getElementById('portfolioGrid');
  const filterBtns = document.querySelectorAll('.js-filter-btn');

  const renderPortfolio = (category) => {
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = '';

    const filtered = category === 'all'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter(item => item.category === category);

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'gallery-card';
      card.setAttribute('data-id', item.id);
      card.innerHTML = `
        <div class="gallery-media">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <span class="gallery-badge">${item.categoryLabel}</span>
          <div class="gallery-hover-overlay">
            <span class="zoom-icon-circle">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
            </span>
          </div>
        </div>
        <div class="gallery-body">
          <div>
            <h3 class="gallery-title">${item.title}</h3>
            <p class="gallery-snippet">${item.description}</p>
          </div>
          <div class="gallery-meta-foot">
            <span class="gallery-shape">${item.shape}</span>
            <span class="gallery-link-text">View Details →</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openLightbox(item));
      portfolioGrid.appendChild(card);
    });
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category') || 'all';
      renderPortfolio(cat);
    });
  });

  // Initial render
  renderPortfolio('all');

  // 9. Lightbox Modal
  const lightboxModal = document.getElementById('lightboxModal');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');
  const modalImg = document.getElementById('modalImg');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalShape = document.getElementById('modalShape');
  const modalLength = document.getElementById('modalLength');
  const modalTechnique = document.getElementById('modalTechnique');
  const requestStyleBtn = document.getElementById('requestStyleBtn');

  let activeModalItem = null;

  const openLightbox = (item) => {
    activeModalItem = item;
    if (modalImg) modalImg.src = item.image;
    if (modalCategory) modalCategory.textContent = item.categoryLabel;
    if (modalTitle) modalTitle.textContent = item.title;
    if (modalDesc) modalDesc.textContent = item.description;
    if (modalShape) modalShape.textContent = item.shape;
    if (modalLength) modalLength.textContent = item.length;
    if (modalTechnique) modalTechnique.textContent = item.technique;
    lightboxModal?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightboxModal?.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  if (requestStyleBtn) {
    requestStyleBtn.addEventListener('click', () => {
      closeLightbox();
      if (activeModalItem) {
        const notesInput = document.getElementById('bookingArtNotes');
        if (notesInput) {
          notesInput.value = `Interested in style: ${activeModalItem.title}`;
        }
      }
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 10. Form Shape & Length Selection Buttons
  const shapeBtns = document.querySelectorAll('.js-shape-btn');
  const hiddenShapeInput = document.getElementById('hiddenShapeInput');
  shapeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      shapeBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      if (hiddenShapeInput) hiddenShapeInput.value = btn.dataset.shape || '';
    });
  });

  const lengthBtns = document.querySelectorAll('.js-length-btn');
  const hiddenLengthInput = document.getElementById('hiddenLengthInput');
  lengthBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      lengthBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      if (hiddenLengthInput) hiddenLengthInput.value = btn.dataset.length || '';
    });
  });

  // 11. Booking Inquiry Form Submission & Summary Modal
  const bookingForm = document.getElementById('bookingForm');
  const summaryModal = document.getElementById('summaryModal');
  const closeSummaryBtn = document.getElementById('closeSummaryBtn');
  const copySummaryBtn = document.getElementById('copySummaryBtn');

  let currentSummaryText = '';

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('bookingName')?.value || '';
      const email = document.getElementById('bookingEmail')?.value || '';
      const instagram = document.getElementById('bookingInstagram')?.value || '';
      const serviceSelect = document.getElementById('bookingServiceSelect');
      const serviceName = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex].text : '';
      const nailState = document.getElementById('bookingNailState')?.value || '';
      const shape = hiddenShapeInput?.value || 'Almond';
      const length = hiddenLengthInput?.value || 'Medium';
      const date = document.getElementById('bookingDate')?.value || 'Flexible';
      const time = document.getElementById('bookingTime')?.value || '';
      const notes = document.getElementById('bookingArtNotes')?.value || 'Classic and clean';

      currentSummaryText = `Hi Annalia! I'd love to request an appointment at Annalia Atelier:
- Name: ${fullName}
- Contact: ${email} (${instagram ? '@' + instagram.replace('@', '') : 'No IG'})
- Service: ${serviceName}
- Desired Shape & Length: ${shape}, ${length}
- Current Nails: ${nailState}
- Preferred Date: ${date} (${time})
- Design Notes: ${notes}`;

      // Populate summary fields in modal
      document.getElementById('sumClient').textContent = fullName;
      document.getElementById('sumContact').textContent = `${email} (${instagram || 'N/A'})`;
      document.getElementById('sumService').textContent = serviceName;
      document.getElementById('sumShape').textContent = `${shape} · ${length}`;
      document.getElementById('sumSlot').textContent = `${date} (${time})`;
      document.getElementById('sumNotes').textContent = notes;

      summaryModal?.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  const closeSummary = () => {
    summaryModal?.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (closeSummaryBtn) closeSummaryBtn.addEventListener('click', closeSummary);
  if (summaryModal) {
    summaryModal.addEventListener('click', (e) => {
      if (e.target === summaryModal) closeSummary();
    });
  }

  if (copySummaryBtn) {
    copySummaryBtn.addEventListener('click', () => {
      if (!currentSummaryText) return;
      navigator.clipboard.writeText(currentSummaryText).then(() => {
        showToast('Summary copied to clipboard!');
        copySummaryBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #059669"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>Copied to Clipboard!</span>
        `;
        setTimeout(() => {
          copySummaryBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span>Copy Summary for Instagram DM</span>
          `;
        }, 2500);
      });
    });
  }

  // 12. Booking Destination Settings Modal
  const settingsModal = document.getElementById('settingsModal');
  const openSettingsBtn = document.getElementById('openSettingsBtn');
  const closeSettingsBtn = document.getElementById('closeSettingsBtn');
  const cancelSettingsBtn = document.getElementById('cancelSettingsBtn');
  const settingsForm = document.getElementById('settingsForm');
  const settingsUrlInput = document.getElementById('settingsUrlInput');
  const resetSettingsUrlBtn = document.getElementById('resetSettingsUrlBtn');
  const testSettingsUrlLink = document.getElementById('testSettingsUrlLink');

  const openSettings = () => {
    if (settingsUrlInput) settingsUrlInput.value = currentBookingUrl;
    if (testSettingsUrlLink) testSettingsUrlLink.href = currentBookingUrl;
    settingsModal?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeSettings = () => {
    settingsModal?.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (openSettingsBtn) openSettingsBtn.addEventListener('click', openSettings);
  if (closeSettingsBtn) closeSettingsBtn.addEventListener('click', closeSettings);
  if (cancelSettingsBtn) cancelSettingsBtn.addEventListener('click', closeSettings);
  if (settingsModal) {
    settingsModal.addEventListener('click', (e) => {
      if (e.target === settingsModal) closeSettings();
    });
  }

  if (settingsUrlInput && testSettingsUrlLink) {
    settingsUrlInput.addEventListener('input', () => {
      testSettingsUrlLink.href = settingsUrlInput.value.trim() || '#';
    });
  }

  if (resetSettingsUrlBtn && settingsUrlInput) {
    resetSettingsUrlBtn.addEventListener('click', () => {
      settingsUrlInput.value = DEFAULT_BOOKING_URL;
      if (testSettingsUrlLink) testSettingsUrlLink.href = DEFAULT_BOOKING_URL;
    });
  }

  if (settingsForm) {
    settingsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newUrl = settingsUrlInput.value.trim();
      if (newUrl) {
        currentBookingUrl = newUrl;
        localStorage.setItem('annalia_booking_url', newUrl);
        updateBookingLinks();
        showToast('Booking destination updated!');
        closeSettings();
      }
    });
  }

  // 13. Promo Code Copy Buttons
  const copyCodeBtns = document.querySelectorAll('.js-copy-code');
  copyCodeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-code');
      if (code) {
        navigator.clipboard.writeText(code).then(() => {
          showToast(`Code "${code}" copied!`);
          btn.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #059669"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span style="color: #059669">Copied</span>
          `;
          setTimeout(() => {
            btn.innerHTML = `
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              <span>Copy</span>
            `;
          }, 2500);
        });
      }
    });
  });

  // 14. Scroll to Top
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
