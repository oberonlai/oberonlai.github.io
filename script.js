/* 陳大文 · 個人品牌網站
   只做兩件事：標記 JS 可用、捲動到畫面時輕柔淡入。 */

document.documentElement.classList.add('js');

(function () {
  var targets = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) { return; }
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  targets.forEach(function (el, i) {
    el.style.transitionDelay = (Math.min(i % 4, 3) * 90) + 'ms';
    observer.observe(el);
  });
})();
