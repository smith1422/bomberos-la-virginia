const servicios = document.querySelectorAll('.servicio');

  const mostrarServicio = () => {
    const triggerBottom = window.innerHeight * 0.85;

    servicios.forEach(servicio => {
      const servicioTop = servicio.getBoundingClientRect().top;

      if (servicioTop < triggerBottom) {
        servicio.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', mostrarServicio);
  window.addEventListener('load', mostrarServicio);

  document.querySelectorAll('.ver-mas-btn').forEach(boton => {
    boton.addEventListener('click', () => {
      const tarjeta = boton.closest('.servicio');
      tarjeta.classList.toggle('mostrar');
    });
  });

  document.querySelectorAll('.btn-ver-mas').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'block';
    });
  });

  document.querySelectorAll('.cerrar').forEach(span => {
    span.addEventListener('click', () => {
      span.closest('.modal').style.display = 'none';
    });
  });

  window.addEventListener('click', (e) => {
    document.querySelectorAll('.modal').forEach(modal => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });