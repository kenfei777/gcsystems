(() => {
  const btn = document.querySelector('.nav-toggle');
  const mobile = document.querySelector('.mobile-nav');
  if (!btn || !mobile) return;

  const setOpen = (next) => {
    mobile.setAttribute('data-open', String(next));
    btn.setAttribute('aria-expanded', String(next));
    document.documentElement.classList.toggle('nav-open', next);
    // Prevent background scroll when menu is open
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const isOpen = () => mobile.getAttribute('data-open') === 'true';

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    setOpen(!isOpen());
  });

  // Keyboard support (Enter / Space) for non-button toggle
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen(!isOpen());
    }
  });

  // Close when a link is clicked
  mobile.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (a) setOpen(false);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!isOpen()) return;
    const inHeader = e.target.closest('.site-header');
    if (!inHeader) setOpen(false);
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) setOpen(false);
  });

  // Close when resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860 && isOpen()) setOpen(false);
  });
})();
