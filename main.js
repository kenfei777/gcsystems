(() => {
  const btn = document.querySelector('.nav-toggle');
  const mobile = document.querySelector('.mobile-nav');
  if (!btn || !mobile) return;

  const openClass = 'nav-open';

  const setOpen = (isOpen) => {
    mobile.setAttribute('data-open', String(isOpen));
    btn.setAttribute('aria-expanded', String(isOpen));
    document.documentElement.classList.toggle(openClass, isOpen);
  };

  const isOpen = () => mobile.getAttribute('data-open') === 'true';

  // Toggle via button
  btn.addEventListener('click', () => setOpen(!isOpen()));

  // Close when a nav link is clicked
  mobile.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (a) setOpen(false);
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) setOpen(false);
  });

  // Close if viewport becomes desktop
  const mq = window.matchMedia('(min-width: 861px)');
  const handleMq = () => { if (mq.matches) setOpen(false); };
  if (mq.addEventListener) mq.addEventListener('change', handleMq);
  else mq.addListener(handleMq);

  // Close when clicking outside the header
  document.addEventListener('click', (e) => {
    if (!isOpen()) return;
    const header = e.target.closest('.site-header');
    if (!header) setOpen(false);
  });
})();
