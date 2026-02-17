(() => {
  const btn = document.querySelector('.nav-toggle');
  const mobile = document.querySelector('.mobile-nav');
  if (!btn || !mobile) return;

  btn.addEventListener('click', () => {
    const open = mobile.getAttribute('data-open') === 'true';
    mobile.setAttribute('data-open', String(!open));
    btn.setAttribute('aria-expanded', String(!open));
  });
})();
