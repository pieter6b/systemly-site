/* Progressive enhancement: the links remain available if JavaScript fails. */
(() => {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;
  const toggle = nav.querySelector('.menu-toggle');
  const menu = nav.querySelector('.links');
  const mobile = matchMedia('(max-width: 1099px)');
  function close(restoreFocus = false) {
    nav.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.querySelector('span').textContent = 'Menu';
    if (restoreFocus) toggle.focus();
  }
  toggle.hidden = false;
  nav.classList.add('nav-enhanced');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('span').textContent = open ? 'Sluiten' : 'Menu';
  });
  menu.addEventListener('click', e => { if (e.target.closest('a')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('menu-open')) close(true); });
  document.addEventListener('pointerdown', e => { if (!nav.contains(e.target)) close(); });
  document.addEventListener('focusin', e => { if (!nav.contains(e.target)) close(); });
  mobile.addEventListener('change', () => close());

  // Existing accordion click behavior is retained; keyboard and ARIA are added.
  document.querySelectorAll('.symptom').forEach((item, i) => {
    const heading = item.querySelector('.kop-rij');
    const panel = item.querySelector('.uitleg');
    panel.id = `symptom-panel-${i}`;
    heading.setAttribute('role', 'button');
    heading.tabIndex = 0;
    heading.setAttribute('aria-controls', panel.id);
    const sync = () => heading.setAttribute('aria-expanded', String(item.classList.contains('open')));
    new MutationObserver(sync).observe(item, { attributes: true, attributeFilter: ['class'] });
    sync();
    heading.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); heading.click(); }
    });
  });
  const carousel = document.querySelector('.cases-viewport');
  if (carousel) { carousel.tabIndex = 0; carousel.setAttribute('role', 'region'); carousel.setAttribute('aria-label', 'Voorbeelden van ons werk. Veeg of gebruik de pijltjestoetsen om meer te bekijken.'); }
})();
