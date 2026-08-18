/* 陳大文 · 個人品牌網站
   只做兩件事：標記 JS 可用、捲動到畫面時輕柔淡入。
   淡入一定會有保險：不論觀察器有沒有觸發，內容最後都要看得到。 */

document.documentElement.classList.add('js');

(function () {
  var targets = [].slice.call(document.querySelectorAll('.reveal'));

  function showAll() {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
  }

  if (!('IntersectionObserver' in window)) {
    showAll();
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

  // 保險：三秒後仍沒淡入的（例如分頁在背景、觀察器沒被觸發）直接顯示。
  window.setTimeout(showAll, 3000);
})();
