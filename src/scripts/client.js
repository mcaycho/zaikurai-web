// src/scripts/client.js

// 1. Slider Automático de Imágenes de Fondo
const slides = document.querySelectorAll('.hero-bg-slide');

if (slides.length > 0) {
  let currentIndex = Math.floor(Math.random() * slides.length);
  slides[currentIndex].classList.remove('opacity-0');
  slides[currentIndex].classList.add('opacity-65');

  setInterval(() => {
    slides[currentIndex].classList.remove('opacity-65');
    slides[currentIndex].classList.add('opacity-0');

    currentIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].classList.remove('opacity-0');
    slides[currentIndex].classList.add('opacity-65');
  }, 6000);
}

// 2. Control del Menú Móvil
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const iconBars = document.getElementById('menu-icon-bars');
const iconClose = document.getElementById('menu-icon-close');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu?.classList.contains('hidden');
    if (isHidden) {
      mobileMenu?.classList.remove('hidden');
      mobileMenu?.classList.add('flex');
      iconBars?.classList.replace('block', 'hidden');
      iconClose?.classList.replace('hidden', 'block');
    } else {
      mobileMenu?.classList.add('hidden');
      mobileMenu?.classList.remove('flex');
      iconBars?.classList.replace('hidden', 'block');
      iconClose?.classList.replace('block', 'hidden');
    }
  });
}

// 3. Control del Modal de Arquitectura
const openDiagramBtn = document.getElementById('open-diagram-btn');
const diagramTrigger = document.getElementById('diagram-trigger');
const diagramModal = document.getElementById('diagram-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

const openModal = () => {
  if (diagramModal) {
    diagramModal.classList.remove('hidden');
    diagramModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
};

const closeModal = () => {
  if (diagramModal) {
    diagramModal.classList.add('hidden');
    diagramModal.classList.remove('flex');
    document.body.style.overflow = '';
  }
};

if (openDiagramBtn) openDiagramBtn.addEventListener('click', openModal);
if (diagramTrigger) diagramTrigger.addEventListener('click', openModal);
if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

if (diagramModal) {
  diagramModal.addEventListener('click', (e) => {
    if (e.target === diagramModal) closeModal();
  });
}
