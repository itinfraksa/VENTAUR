/* VENTAUR — car fresheners and accessories enhancements for Salla Raed */
(function () {
  'use strict';

  var isEnglish = document.documentElement.lang.toLowerCase().indexOf('en') === 0 || /^\/en(?:\/|$)/i.test(window.location.pathname);
  var copy = isEnglish ? {
    whatsappMessage: 'Hello VENTAUR, I need help choosing a suitable car freshener or accessory.',
    whatsappLabel: 'Contact VENTAUR on WhatsApp',
    whatsappTitle: 'Contact us on WhatsApp',
    whatsappBubble: 'Contact us now',
    promiseLabel: 'VENTAUR store benefits',
    freshenersTitle: 'Luxury Fresheners',
    freshenersText: 'Distinctive scents with lasting freshness',
    accessoriesTitle: 'Selected Accessories',
    accessoriesText: 'Style and practicality for your car',
    deliveryTitle: 'Fast Delivery',
    deliveryText: 'Across all cities in Saudi Arabia',
    topLabel: 'Back to top',
    topTitle: 'Back to top',
    legalLabel: 'Commercial registration, payments and copyright',
    footerName: 'VENTAUR',
    footerDescription: 'VENTAUR specializes in luxury car fresheners and carefully selected car accessories, with trusted quality, competitive prices and fast delivery across Saudi Arabia.'
  } : {
    whatsappMessage: 'مرحبًا VENTAUR، أحتاج مساعدة في اختيار معطر أو إكسسوار مناسب لسيارتي',
    whatsappLabel: 'تواصل مع VENTAUR عبر واتساب',
    whatsappTitle: 'تواصل معنا عبر واتساب',
    whatsappBubble: 'تحدث معنا الآن',
    promiseLabel: 'مميزات متجر VENTAUR',
    freshenersTitle: 'معطرات فاخرة',
    freshenersText: 'روائح مميزة وثبات يدوم',
    accessoriesTitle: 'إكسسوارات مختارة',
    accessoriesText: 'أناقة وعملية لسيارتك',
    deliveryTitle: 'توصيل سريع',
    deliveryText: 'إلى جميع مدن المملكة',
    topLabel: 'العودة إلى أعلى الصفحة',
    topTitle: 'أعلى الصفحة',
    legalLabel: 'السجل التجاري وأنظمة الدفع وحقوق النشر',
    footerName: 'فينتر',
    footerDescription: ''
  };

  function createWhatsAppButton() {
    if (document.getElementById('ventaur-whatsapp')) return;

    var link = document.createElement('a');
    link.id = 'ventaur-whatsapp';
    link.className = 'ventaur-whatsapp';
    link.href = 'https://wa.me/966539270007?text=' + encodeURIComponent(copy.whatsappMessage);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', copy.whatsappLabel);
    link.title = copy.whatsappTitle;
    link.innerHTML = '<span class="ventaur-whatsapp__label">' + copy.whatsappBubble + '</span><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M19.11 17.21c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.17-.3.2-.56.07-.26-.13-1.09-.4-2.08-1.29-.77-.68-1.29-1.53-1.44-1.79-.15-.26-.02-.4.11-.53.12-.11.26-.3.39-.46.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.07-.13-.59-1.42-.8-1.94-.21-.51-.43-.44-.59-.45h-.5c-.17 0-.46.07-.7.33-.24.26-.91.89-.91 2.17s.93 2.51 1.06 2.69c.13.17 1.83 2.8 4.44 3.92.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3zM16.03 5.33A10.57 10.57 0 0 0 6.9 21.2l-1.5 5.47 5.6-1.47a10.55 10.55 0 1 0 5.03-19.87zm0 19.22c-1.66 0-3.28-.45-4.69-1.29l-.34-.2-3.32.87.89-3.24-.22-.35a8.68 8.68 0 1 1 7.68 4.21z"/></svg>';
    document.body.appendChild(link);
  }

  function styleUserMenu() {
    if (!document.getElementById('ventaur-user-menu-style')) {
      var style = document.createElement('style');
      style.id = 'ventaur-user-menu-style';
      style.textContent =
        '.main-nav-container salla-user-menu,.main-nav-container salla-user-menu slot-fb,.main-nav-container salla-user-menu .s-user-menu-wrapper,.main-nav-container salla-user-menu .s-user-menu-trigger-slot{width:48px!important;min-width:48px!important;max-width:48px!important;height:48px!important;min-height:48px!important;max-height:48px!important}' +
        '.main-nav-container salla-user-menu .s-user-menu-trigger,.main-nav-container salla-user-menu .s-user-menu-login-btn{display:flex!important;width:48px!important;min-width:48px!important;max-width:48px!important;height:48px!important;min-height:48px!important;max-height:48px!important;box-sizing:border-box!important;align-items:center!important;justify-content:center!important;overflow:hidden!important;padding:3px!important;border:1px solid rgba(97,200,245,.68)!important;border-radius:999px!important;color:#fff!important;background:rgba(8,116,185,.18)!important;box-shadow:0 0 0 1px rgba(255,255,255,.08),0 8px 20px rgba(0,0,0,.22)!important}' +
        '.main-nav-container salla-user-menu .s-user-menu-trigger-content,.main-nav-container salla-user-menu .s-user-menu-trigger-icon{display:none!important}' +
        '.main-nav-container salla-user-menu .s-user-menu-avatar-wrap{display:block!important;width:40px!important;min-width:40px!important;height:40px!important;overflow:hidden!important;border-radius:999px!important}' +
        '.main-nav-container salla-user-menu .s-user-menu-trigger-avatar,.main-nav-container salla-user-menu img{display:block!important;width:40px!important;min-width:40px!important;max-width:40px!important;height:40px!important;min-height:40px!important;max-height:40px!important;box-sizing:border-box!important;margin:0!important;padding:0!important;border:2px solid rgba(255,255,255,.92)!important;border-radius:999px!important;object-fit:cover!important;object-position:center!important}' +
        '.main-nav-container salla-user-menu .s-user-menu-login-btn svg{width:22px!important;height:22px!important;color:#fff!important;fill:#fff!important}' +
        '.main-nav-container salla-user-menu.ventaur-user-menu--styled::before{display:none!important}';
      document.head.appendChild(style);
    }

    function markMenus() {
      document.querySelectorAll('salla-user-menu').forEach(function (menu) {
        menu.classList.add('ventaur-user-menu--styled');
      });
    }

    markMenus();

    var observer = new MutationObserver(markMenus);
    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.setTimeout(function () { observer.disconnect(); }, 20000);
  }

  function createPromiseBar() {
    if (document.getElementById('ventaur-promise-bar')) return;

    var main = document.querySelector('main');
    if (!main) return;

    var bar = document.createElement('section');
    bar.id = 'ventaur-promise-bar';
    bar.className = 'ventaur-promise-bar';
    bar.setAttribute('aria-label', copy.promiseLabel);
    bar.innerHTML =
      '<div class="ventaur-promise-item">' +
        '<span class="ventaur-promise-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 4 5v6c0 5.05 3.41 9.74 8 11 4.59-1.26 8-5.95 8-11V5l-8-3zm-1.1 14-3.4-3.4 1.4-1.4 2 2 4.2-4.2 1.4 1.4-5.6 5.6z"/></svg></span>' +
        '<span><strong>' + copy.freshenersTitle + '</strong><small>' + copy.freshenersText + '</small></span>' +
      '</div>' +
      '<div class="ventaur-promise-item">' +
        '<span class="ventaur-promise-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h-2l-3 7v9h2v-2h16v2h2v-9l-3-7h-2l1 3H6l1-3zm-.5 5h11l1.5 3H5l1.5-3zM7 16H5v-2h2v2zm12 0h-2v-2h2v2z"/></svg></span>' +
        '<span><strong>' + copy.accessoriesTitle + '</strong><small>' + copy.accessoriesText + '</small></span>' +
      '</div>' +
      '<div class="ventaur-promise-item">' +
        '<span class="ventaur-promise-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h12v9h2.5l2.5 3v2h-2a3 3 0 0 1-6 0H9a3 3 0 0 1-6 0H1V6a2 2 0 0 1 2-2zm13 5v2h2.5L17 9h-1zM6 16.5A1.5 1.5 0 1 0 6 19.5a1.5 1.5 0 0 0 0-3zm9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg></span>' +
        '<span><strong>' + copy.deliveryTitle + '</strong><small>' + copy.deliveryText + '</small></span>' +
      '</div>';

    main.insertBefore(bar, main.firstChild);
  }

  function createBackToTopButton() {
    if (document.getElementById('ventaur-to-top')) return;

    var button = document.createElement('button');
    button.id = 'ventaur-to-top';
    button.className = 'ventaur-to-top';
    button.type = 'button';
    button.setAttribute('aria-label', copy.topLabel);
    button.title = copy.topTitle;
    button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 8-6 6 1.4 1.4 4.6-4.6 4.6 4.6L18 14z"/></svg>';
    button.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(button);

    function updateVisibility() {
      button.classList.toggle('is-visible', window.scrollY > 500);
    }

    window.addEventListener('scroll', updateVisibility, { passive: true });
    updateVisibility();
  }

  function localizeEnglishFooter() {
    if (!isEnglish) return;

    var footer = document.querySelector('.store-footer');
    if (!footer) return;

    var brandTitle = footer.querySelector('.store-footer__inner .container > div:first-child h3');
    var description = footer.querySelector('.store-footer__inner .container > div:first-child .max-w-sm p');

    if (brandTitle) brandTitle.textContent = copy.footerName;
    if (description) {
      description.textContent = copy.footerDescription;
      description.classList.remove('ql-direction-rtl');
      description.setAttribute('dir', 'ltr');
    }
  }

  function organizeFooterLegalArea() {
    var footer = document.querySelector('.store-footer');
    if (!footer || footer.querySelector('.ventaur-footer-legal')) return;

    var trustBadges = footer.querySelector('salla-trust-badges');
    var payments = footer.querySelector('salla-payments');
    var copyright = footer.querySelector('.copyright-text');

    if (!trustBadges && !payments && !copyright) return;

    var legal = document.createElement('div');
    legal.className = 'ventaur-footer-legal';
    legal.setAttribute('aria-label', copy.legalLabel);

    [
      { element: trustBadges, className: 'ventaur-footer-legal__trust' },
      { element: payments, className: 'ventaur-footer-legal__payments' },
      { element: copyright, className: 'ventaur-footer-legal__copyright' }
    ].forEach(function (item) {
      if (!item.element) return;
      var oldParent = item.element.parentElement;
      var row = document.createElement('div');
      row.className = item.className;
      row.appendChild(item.element);
      legal.appendChild(row);
      if (oldParent && oldParent !== footer && oldParent.children.length === 0) {
        oldParent.remove();
      }
    });

    footer.appendChild(legal);
  }

  function enableRevealAnimation() {
    if (!('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

    document.querySelectorAll('main section, .ventaur-promise-bar, .s-product-card-entry').forEach(function (element) {
      if (!element.classList.contains('ventaur-reveal')) {
        element.classList.add('ventaur-reveal');
        observer.observe(element);
      }
    });
  }

  function initializeVentaurTheme() {
    styleUserMenu();
    createPromiseBar();
    createWhatsAppButton();
    createBackToTopButton();
    localizeEnglishFooter();
    organizeFooterLegalArea();
    enableRevealAnimation();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeVentaurTheme, { once: true });
  } else {
    initializeVentaurTheme();
  }
})();
