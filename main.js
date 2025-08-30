// Inicializa animaciones AOS
AOS.init({
  duration: 900,
  once: true
});

// Slider de fotos simple
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === n);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}
function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
  // Inicializa mostrando la primera imagen
  showSlide(slideIndex);
}

// Animación al cargar título principal
window.onload = function() {
  const title = document.querySelector('.hero h1');
  title.classList.add('animado');
};
