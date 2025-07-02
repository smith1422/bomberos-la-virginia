// Obtener todas las tarjetas de servicio
const servicios = document.querySelectorAll('.servicio');

/**
 * Muestra las tarjetas cuando entran al viewport
 */
const mostrarServicio = () => {
  const triggerBottom = window.innerHeight * 0.85;

  servicios.forEach(servicio => {
    const servicioTop = servicio.getBoundingClientRect().top;

    if (servicioTop < triggerBottom) {
      servicio.classList.add('visible');
    }
  });
};

// Detectar scroll o carga inicial para animar servicios
window.addEventListener('scroll', mostrarServicio);
window.addEventListener('load', mostrarServicio);

/**
 * Abrir el modal correspondiente al hacer click en "Ver más"
 */
document.querySelectorAll('.btn-ver-mas').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

/**
 * Cerrar el modal al hacer click en la "X"
 */
document.querySelectorAll('.cerrar').forEach(span => {
  span.addEventListener('click', () => {
    span.closest('.modal').style.display = 'none';
  });
});

/**
 * Cerrar el modal al hacer click fuera del contenido del modal
 */
window.addEventListener('click', (e) => {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
