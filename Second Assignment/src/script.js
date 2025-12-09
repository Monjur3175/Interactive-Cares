document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('menu-btn');
  const nav = document.getElementById('nav-links');
  if (!btn || !nav) return;

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    nav.classList.toggle('open');
  });

  document.addEventListener('click', function (e) {
    if (!nav.classList.contains('open')) return;
    if (e.target === btn || btn.contains(e.target) || nav.contains(e.target)) return;
    nav.classList.remove('open');
  });
});
