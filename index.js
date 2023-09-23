const carrusel = document.getElementById("carrusel");
const carruselItems = document.querySelectorAll(".carrusel-item");
const anteriorBtn = document.getElementById("anterior");
const siguienteBtn = document.getElementById("siguiente");
let index = 0;

siguienteBtn.addEventListener("click", () => {
  if (index < carruselItems.length - 1) {
    index++;
  } else {
    index = 0;
  }
  actualizarCarrusel();
});

anteriorBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else {
    index = carruselItems.length - 1;
  }
  actualizarCarrusel();
});

function actualizarCarrusel() {
  carrusel.style.transform = `translateX(-${index * 100}%)`;
}

/*scroll*/
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aparecer");
    }
  });
}

// Configurar el observador de intersección
const opcionesObservador = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Ajusta este valor según la cantidad de visibilidad requerida
};

const observador = new IntersectionObserver(
  handleIntersection,
  opcionesObservador
);

// Obtener todas las imágenes que deseas hacer aparecer
const elementos = document.querySelectorAll(
  ".contenedor-imagen-especializaciones"
);

// Agregar cada elemento al observador
elementos.forEach((elemento) => {
  observador.observe(elemento);
});
