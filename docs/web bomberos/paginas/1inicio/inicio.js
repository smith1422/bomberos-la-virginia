// Animación con IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active", "visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Carrusel funcional
const track = document.querySelector(".carrusel-track");
const slides = Array.from(document.querySelectorAll(".slide"));
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function updateSlide() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
});

window.addEventListener("resize", updateSlide); // ajuste responsive
updateSlide();

const elementos = document.querySelectorAll('.animar');

  const mostrar = () => {
    elementos.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', mostrar);
  window.addEventListener('load', mostrar);