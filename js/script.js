function toggleMode() {
  const body = document.body;

  // Cambiar entre el modo claro y oscuro
  body.classList.toggle("dark-mode");

  // Llama a la función para cambiar los iconos
  toggleIcons();

  // Función para cambiar los iconos
  function toggleIcons() {
    const lightIcon = document.getElementById("light-icon");
    const darkIcon = document.getElementById("dark-icon");

    lightIcon.style.display = body.classList.contains("dark-mode")
      ? "none"
      : "inline";
    darkIcon.style.display = body.classList.contains("dark-mode")
      ? "inline"
      : "none";
  }
}

// Agrega esto en tu archivo JavaScript
function expandCard(card) {
  const title = card.querySelector("h3").textContent;
  const text = card.querySelector("p").textContent;
  const imageSrc = card.querySelector("img").src;

  const expandedCard = document.getElementById("expandedCard");
  expandedCard.innerHTML = `
      <h3>${title}</h3>
      <p>${text}</p>
      <img src="${imageSrc}" alt="${title}" />
    `;

  expandedCard.style.display = "block";
  document.querySelector(".overlay").style.display = "block";
}

function collapseCard() {
  document.getElementById("expandedCard").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
}

function expandCard(card) {
  const title = card.querySelector("h3").textContent;
  const text = card.querySelector("p").textContent;
  const imageSrc = card.querySelector("img").src;

  const expandedCard = document.getElementById("expandedCard");
  expandedCard.innerHTML = `
      <h3>${title}</h3>
      <p>${text}</p>
      <img src="${imageSrc}" alt="${title}" />
    `;

  expandedCard.style.display = "block";
  document.querySelector(".overlay").style.display = "block";
}

function collapseCard() {
  document.getElementById("expandedCard").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
}

// Agrega esto al final de tu archivo JavaScript

// Array para almacenar comentarios
const comentariosGuardados = [];

// Función para mostrar comentarios
function mostrarComentarios() {
  const comentariosContainer = document.getElementById("comentariosGuardados");

  // Limpia el contenedor antes de agregar los comentarios
  comentariosContainer.innerHTML = "";

  // Agrega cada comentario al contenedor
  comentariosGuardados.forEach((comentario) => {
    const comentarioElement = document.createElement("div");
    comentarioElement.innerHTML = `<strong>${comentario.nombre}</strong>: ${comentario.texto}`;
    comentariosContainer.appendChild(comentarioElement);
  });
}

// Manejador de envío de comentarios
document
  .getElementById("commentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtiene valores del formulario
    const nombre = document.getElementById("nombre").value;
    const comentario = document.getElementById("comentario").value;

    // Añade el comentario al array
    comentariosGuardados.push({ nombre, texto: comentario });

    // Muestra los comentarios actualizados
    mostrarComentarios();

    // Limpia el formulario
    document.getElementById("nombre").value = "";
    document.getElementById("comentario").value = "";
  });

// Llama a la función para mostrar los comentarios al cargar la página
mostrarComentarios();

// Función para verificar si una tarjeta está en la pantalla
function isCardInViewport(card) {
  var rect = card.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Añade un evento de desplazamiento a la ventana
window.addEventListener('scroll', function() {
  // Obtiene todas las tarjetas
  var cards = document.querySelectorAll('.sticky-card');

  // Itera sobre cada tarjeta y aplica la clase 'show-card' si está en la pantalla
  cards.forEach(function(card, index) {
    if (isCardInViewport(card)) {
      card.classList.add('show-card');
    }
  });
});
