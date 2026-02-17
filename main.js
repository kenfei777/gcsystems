// Minimal mobile nav toggle (safe for static sites)
(() => {
  const btn = document.querySelector('.nav-toggle');
  const mobile = document.querySelector('[data-mobile-nav]');
  if (!btn || !mobile) return;

  btn.addEventListener('click', () => {
    const isOpen = mobile.getAttribute('data-open') === 'true';
    mobile.setAttribute('data-open', String(!isOpen));
    btn.setAttribute('aria-expanded', String(!isOpen));
  });
})();
