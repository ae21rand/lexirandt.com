/* ============================================================
   main.js — shared across all pages
   Handles: mobile navigation toggle
============================================================ */

const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

// Open / close mobile menu
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('is-open');
});

// Close menu when a link is tapped
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('is-open'));
});

// Highlight the active nav link based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks.querySelectorAll('a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

 
// Lightbox ===========================================================
const lightbox      = document.getElementById('lightbox');
const lightboxImg   = document.getElementById('lightboxImg');
const lightboxPdf   = document.getElementById('lightboxPdf');
const lightboxClose = document.getElementById('lightboxClose');
 
document.querySelectorAll('.preview-item[data-src]').forEach(item => {
  item.addEventListener('click', () => {
    const src  = item.dataset.src;
    const type = item.dataset.type || 'image';
 
    if (type === 'pdf') {
      lightboxImg.style.display = 'none';
      lightboxPdf.style.display = 'block';
      lightboxPdf.src = src;
    } else {
      lightboxPdf.style.display = 'none';
      lightboxImg.style.display = 'block';
      lightboxImg.src = src;
    }
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });
});
 
function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightboxImg.src = '';
  lightboxPdf.src = '';
  document.body.style.overflow = '';
}
 
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
 
