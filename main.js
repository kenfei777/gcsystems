(function () {
  const btn = document.querySelector('[data-mobile-toggle]');
  const drawer = document.querySelector('[data-mobile-drawer]');
  if (btn && drawer) {
    btn.addEventListener('click', () => {
      const isOpen = drawer.style.display === 'block';
      drawer.style.display = isOpen ? 'none' : 'block';
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  }
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('a[data-nav]').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path) a.classList.add('active');
  });
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
})();
