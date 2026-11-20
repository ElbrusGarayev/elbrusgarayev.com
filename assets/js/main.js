/* Elbrus Garayev — interactions
   Theme · Navigation · Scroll reveal · Active section · Apps (Phase 2) */
(function () {
  'use strict';

  var root = document.documentElement;
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- Theme ---------- */
  var toggle = document.querySelector('[data-theme-toggle]');
  var themeMeta = document.querySelectorAll('meta[name="theme-color"]');

  function effectiveTheme() {
    var t = root.getAttribute('data-theme');
    if (t === 'light' || t === 'dark') return t;
    return prefersDark.matches ? 'dark' : 'light';
  }

  var t = function (key, fallback) { return window.i18n ? window.i18n.t(key) : fallback; };

  function syncToggle() {
    var dark = effectiveTheme() === 'dark';
    toggle.classList.toggle('is-dark', dark);
    toggle.setAttribute('aria-label', dark ? t('ui.themeToLight', 'Switch to light mode') : t('ui.themeToDark', 'Switch to dark mode'));
    themeMeta.forEach(function (m) { m.setAttribute('content', dark ? '#0A0A0B' : '#FAFAF9'); });
  }

  function setTheme(next) {
    var apply = function () {
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncToggle();
    };
    if (document.startViewTransition && !reduceMotion.matches) {
      document.startViewTransition(apply);
    } else {
      apply();
    }
  }

  if (toggle) {
    syncToggle();
    toggle.addEventListener('click', function () {
      setTheme(effectiveTheme() === 'dark' ? 'light' : 'dark');
    });
    prefersDark.addEventListener('change', syncToggle);
  }

  /* ---------- Navigation ---------- */
  var nav = document.querySelector('[data-nav]');
  var menuBtn = document.querySelector('[data-menu-toggle]');

  function onScroll() {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? t('ui.menuClose', 'Close menu') : t('ui.menuOpen', 'Open menu'));
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      setMenu(!nav.classList.contains('is-open'));
    });
    nav.querySelectorAll('.mobile-menu a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); menuBtn.focus(); }
    });
    window.matchMedia('(min-width: 861px)').addEventListener('change', function (e) {
      if (e.matches) setMenu(false);
    });
  }

  /* ---------- Language switcher ---------- */
  var langWrap = document.querySelector('[data-lang]');
  var langBtn = document.querySelector('[data-lang-toggle]');
  var langCurrent = document.querySelector('[data-lang-current]');
  var langOptions = document.querySelectorAll('[data-lang-option]');

  function setLangMenu(open) {
    langWrap.classList.toggle('is-open', open);
    langBtn.setAttribute('aria-expanded', String(open));
  }

  function syncLang(lang) {
    langCurrent.textContent = lang.toUpperCase();
    langOptions.forEach(function (o) {
      var on = o.dataset.langOption === lang;
      o.classList.toggle('is-active', on);
      o.setAttribute('aria-current', on ? 'true' : 'false');
    });
    syncToggle();
    if (menuBtn) menuBtn.setAttribute('aria-label', nav.classList.contains('is-open') ? t('ui.menuClose', 'Close menu') : t('ui.menuOpen', 'Open menu'));
  }

  if (langWrap && window.i18n) {
    syncLang(window.i18n.lang);
    window.i18n.onChange(syncLang);

    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      setLangMenu(!langWrap.classList.contains('is-open'));
    });
    langOptions.forEach(function (o) {
      o.addEventListener('click', function () {
        var lang = o.dataset.langOption;
        setLangMenu(false);
        langBtn.focus();
        if (lang === window.i18n.lang) return;
        if (document.startViewTransition && !reduceMotion.matches) {
          document.startViewTransition(function () { window.i18n.set(lang); });
        } else {
          window.i18n.set(lang);
        }
      });
    });
    document.addEventListener('click', function (e) {
      if (!langWrap.contains(e.target)) setLangMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && langWrap.classList.contains('is-open')) { setLangMenu(false); langBtn.focus(); }
    });
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { revealObs.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Active section in nav ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__links a[href^="#"]'));
  // Sections without their own nav link highlight a related one
  var ALIAS = { certifications: 'skills' };
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .concat(Object.keys(ALIAS).map(function (id) { return document.getElementById(id); }))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var activeObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = '#' + (ALIAS[entry.target.id] || entry.target.id);
        links.forEach(function (a) {
          if (a.getAttribute('href') === id) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { activeObs.observe(s); });
  }

  /* ---------- Apps (Phase 2) ----------
     Add entries here, then un-hide #apps in index.html.
     {
       name: 'App Name',
       description: 'One-line description.',
       icon: 'assets/apps/app-name/icon.png',
       screenshot: 'assets/apps/app-name/hero.png',
       href: 'apps/app-name/',                 // dedicated detail page
       platforms: ['iOS', 'Android', 'macOS', 'Windows'],
       stores: [{ label: 'App Store', href: 'https://apps.apple.com/…' },
                { label: 'Google Play', href: 'https://play.google.com/…' }]
     }
  */
  var APPS = [];

  function renderApps() {
    var section = document.getElementById('apps');
    var grid = document.querySelector('[data-app-grid]');
    var tpl = document.getElementById('app-card-template');
    if (!section || !grid || !tpl || !APPS.length) return;

    APPS.forEach(function (app) {
      var node = tpl.content.cloneNode(true);
      node.querySelector('.app-card__link').href = app.href || '#';
      node.querySelector('.app-card__name').textContent = app.name;
      node.querySelector('.app-card__desc').textContent = app.description;
      var icon = node.querySelector('.app-card__icon');
      icon.src = app.icon; icon.alt = app.name + ' icon';
      var shot = node.querySelector('.app-card__screenshot');
      if (app.screenshot) { shot.src = app.screenshot; shot.alt = app.name + ' screenshot'; }
      else { node.querySelector('.app-card__media').remove(); }

      var plats = node.querySelector('.platforms');
      (app.platforms || []).forEach(function (p) {
        var li = document.createElement('li'); li.textContent = p; plats.appendChild(li);
      });
      var stores = node.querySelector('.store-links');
      (app.stores || []).forEach(function (s) {
        var a = document.createElement('a');
        a.className = 'store-link'; a.href = s.href; a.textContent = s.label;
        a.target = '_blank'; a.rel = 'noopener';
        stores.appendChild(a);
      });
      grid.appendChild(node);
    });
    section.hidden = false;
  }
  renderApps();
})();
