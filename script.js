// Mobile drawer
const drawer = document.getElementById('drawer');
const btn = document.querySelector('.mobile-menu');
if (btn && drawer){
  btn.addEventListener('click', () => {
    const open = drawer.style.display === 'flex';
    drawer.style.display = open ? 'none' : 'flex';
    drawer.setAttribute('aria-hidden', open ? 'true' : 'false');
  });
  document.querySelectorAll('.drawer a, .drawer .drawer-sublink').forEach(a => a.addEventListener('click', () => {
    drawer.style.display = 'none'; drawer.setAttribute('aria-hidden','true');
  }));
}
// Year
const yearEl = document.getElementById('year'); if (yearEl) yearEl.textContent = new Date().getFullYear();
// AOS
const observer = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }); }, { threshold: 0.12 });
document.querySelectorAll('.aos').forEach(el => observer.observe(el));
// Dropdown click-toggle
document.querySelectorAll('.dropdown .dropbtn').forEach(btn => {
  const dd = btn.closest('.dropdown');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelectorAll('.dropdown.open').forEach(d => { if (d !== dd) d.classList.remove('open'); });
    dd.classList.toggle('open');
  });
});
document.addEventListener('click', () => { document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open')); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open')); });
