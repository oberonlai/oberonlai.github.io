/* 進場淡入：捲到才顯示，克制不搶戲。 */
(function () {
  var items = document.querySelectorAll('.reveal');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px' });

    items.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 90 + 'ms';
      io.observe(el);
    });
  }

  /* 目次跟著捲動位置標記目前章節。 */
  var links = Array.prototype.slice.call(document.querySelectorAll('.index__list a'));
  var targets = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });

  function mark() {
    var line = window.scrollY + window.innerHeight * 0.34;
    var current = 0;
    targets.forEach(function (el, i) {
      if (el && el.offsetTop <= line) { current = i; }
    });
    links.forEach(function (a, i) { a.classList.toggle('is-here', i === current); });
  }

  mark();
  window.addEventListener('scroll', mark, { passive: true });
})();
