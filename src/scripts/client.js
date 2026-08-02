// src/scripts/client.js

// Slider Automático para las 7 imágenes
const slides = document.querySelectorAll('.hero-bg-slide');

if (slides.length > 0) {
  let currentIndex = 0;
  // Muestra la primera imagen inmediatamente
  slides[currentIndex].classList.remove('opacity-0');
  slides[currentIndex].classList.add('opacity-60');

  setInterval(() => {
    // Oculta la imagen actual
    slides[currentIndex].classList.remove('opacity-60');
    slides[currentIndex].classList.add('opacity-0');

    // Siguiente índice (rotación circular 0 a 6)
    currentIndex = (currentIndex + 1) % slides.length;

    // Muestra la nueva imagen
    slides[currentIndex].classList.remove('opacity-0');
    slides[currentIndex].classList.add('opacity-60');
  }, 5000);
}

// Control Menú Móvil
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const iconBars = document.getElementById('menu-icon-bars');
const iconClose = document.getElementById('menu-icon-close');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
      iconBars?.classList.replace('block', 'hidden');
      iconClose?.classList.replace('hidden', 'block');
    } else {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      iconBars?.classList.replace('hidden', 'block');
      iconClose?.classList.replace('block', 'hidden');
    }
  });
}

// Modal Diagrama de Arquitectura
const openDiagramBtn = document.getElementById('open-diagram-btn');
const diagramTrigger = document.getElementById('diagram-trigger');
const diagramModal = document.getElementById('diagram-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

const toggleModal = (show) => {
  if (diagramModal) {
    if (show) {
      diagramModal.classList.remove('hidden');
      diagramModal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    } else {
      diagramModal.classList.add('hidden');
      diagramModal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  }
};

if (openDiagramBtn) openDiagramBtn.addEventListener('click', () => toggleModal(true));
if (diagramTrigger) diagramTrigger.addEventListener('click', () => toggleModal(true));
if (closeModalBtn) closeModalBtn.addEventListener('click', () => toggleModal(false));

if (diagramModal) {
  diagramModal.addEventListener('click', (e) => {
    if (e.target === diagramModal) toggleModal(false);
  });
}
