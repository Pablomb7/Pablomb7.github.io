// Draws the chart line once, when it first scrolls into view. Without JS or with reduced motion the chart is static.
(function () {
  var chart = document.querySelector('.chart');
  if (!chart || !('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  chart.classList.add('armed');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { chart.classList.add('play'); io.disconnect(); }
    });
  }, { threshold: 0.4 });
  io.observe(chart);
})();
