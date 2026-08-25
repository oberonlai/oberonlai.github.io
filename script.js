(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 手機選單開合.
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 捲動進場：區塊內主要元素淡入.
  var targets = document.querySelectorAll(
    '.section .sec-title, .section .eyebrow, .about-text, .career li, .card, .ledger-row, .quote, .faq details, .step, .fields-light, .contact-lede, .stat'
  );

  if (reduced || !('IntersectionObserver' in window)) {
    return;
  }

  Array.prototype.forEach.call(targets, function (el, i) {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 6) * 60 + 'ms';
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

  Array.prototype.forEach.call(targets, function (el) {
    io.observe(el);
  });

  // 導覽列目前章節標示.
  var sections = document.querySelectorAll('main section[id]');
  var links = {};

  Array.prototype.forEach.call(document.querySelectorAll('.nav a[href^="#"]'), function (a) {
    links[a.getAttribute('href').slice(1)] = a;
  });

  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var link = links[entry.target.id];
      if (!link) { return; }
      if (entry.isIntersecting) {
        Object.keys(links).forEach(function (k) { links[k].classList.remove('is-active'); });
        link.classList.add('is-active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  Array.prototype.forEach.call(sections, function (s) { spy.observe(s); });
})();
