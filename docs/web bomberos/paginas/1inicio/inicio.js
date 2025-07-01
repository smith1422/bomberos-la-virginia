/* ==========================================
   ANIMACIÓN CON INTERSECTION OBSERVER
========================================== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active", "visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/* ==========================================
   CARRUSEL FUNCIONAL
========================================== */
const track = document.querySelector(".carrusel-track");
const slides = Array.from(document.querySelectorAll(".slide"));
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

/**
 * Actualiza la posición del carrusel al slide actual
 */
function updateSlide() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Botón siguiente
nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
});

// Botón anterior
prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
});

// Ajuste responsivo
window.addEventListener("resize", updateSlide);

// Inicializa el carrusel en la posición correcta
updateSlide();

/* ==========================================
   ANIMACIÓN DE ELEMENTOS CON SCROLL
========================================== */
const elementos = document.querySelectorAll('.animar');

/**
 * Añade la clase 'visible' a los elementos cuando aparecen en el viewport
 */
const mostrar = () => {
  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};

// Detectar scroll y carga inicial para activar animaciones
window.addEventListener('scroll', mostrar);
window.addEventListener('load', mostrar);
