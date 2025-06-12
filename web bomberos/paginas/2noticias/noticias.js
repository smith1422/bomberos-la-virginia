const rejilla = document.querySelector(".rejilla-noticias");

// Noticias de ejemplo para cargar dinámicamente
const noticiasExtra = [
  {
    imagen: "img/fuga-gas.jpg",
    fecha: "22 mayo 2025",
    titulo: "Fuga de gas en sector comercial",
    descripcion: "Se realizó evacuación preventiva mientras se controlaba la fuga.",
  },
  {
    imagen: "img/volcamiento-bus.jpg",
    fecha: "21 mayo 2025",
    titulo: "Volcamiento de bus intermunicipal",
    descripcion: "Afortunadamente no hubo heridos graves en el siniestro.",
  },
  {
    imagen: "img/rescate-animal.jpg",
    fecha: "20 mayo 2025",
    titulo: "Rescate de perro atrapado en zanja",
    descripcion: "El canino fue sacado ileso por nuestros rescatistas.",
  }
];

// Función para crear una tarjeta de noticia
function crearTarjeta(noticia) {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta-noticia");

  tarjeta.innerHTML = `
    <img src="${noticia.imagen}" alt="${noticia.titulo}" />
    <div class="info">
      <span class="fecha">${noticia.fecha}</span>
      <h3>${noticia.titulo}</h3>
      <p>${noticia.descripcion}</p>
      <a href="#" class="btn-vermas">Ver más</a>
    </div>
  `;

  tarjeta.querySelector(".btn-vermas").addEventListener("click", (e) => {
    e.preventDefault();
    abrirModal(noticia.imagen, noticia.titulo, noticia.fecha, noticia.descripcion);
  });

  return tarjeta;
}


// Escuchar el scroll y cargar más noticias cuando llegue al fondo
let cargando = false;
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !cargando) {
    cargando = true;

    // Simular una pequeña espera como si fuera una petición real
    setTimeout(() => {
      noticiasExtra.forEach(noticia => {
        const nuevaTarjeta = crearTarjeta(noticia);
        rejilla.appendChild(nuevaTarjeta);
      });
      cargando = false;
    }, 800);
  }
});

function abrirModal(imagen, titulo, fecha, descripcion) {
  document.getElementById("modalImagen").src = imagen;
  document.getElementById("modalTitulo").textContent = titulo;
  document.getElementById("modalFecha").textContent = fecha;
  document.getElementById("modalDescripcion").textContent = descripcion;
  document.getElementById("modalNoticia").style.display = "block";
}

// Cerrar modal al hacer clic en la "X"
document.querySelector(".cerrar").addEventListener("click", () => {
  document.getElementById("modalNoticia").style.display = "none";
});

// Cerrar modal si se hace clic fuera del contenido
window.addEventListener("click", e => {
  const modal = document.getElementById("modalNoticia");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
