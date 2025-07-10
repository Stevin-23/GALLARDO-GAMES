// Selecciona todos los cards de noticias
const cards = document.querySelectorAll('.noticia-card');

// Selecciona los botones y la etiqueta de página actual
const anteriorBtn = document.querySelector('.paginacion button:first-of-type');
const siguienteBtn = document.querySelector('.paginacion button:last-of-type');
const paginaTexto = document.querySelector('.pagina-actual');

// Variables de control
let paginaActual = 1;
const cardsPorPagina = 6;
const totalPaginas = Math.ceil(cards.length / cardsPorPagina);

// Función para mostrar la página actual
function mostrarPagina(pagina) {
  const inicio = (pagina - 1) * cardsPorPagina;
  const fin = inicio + cardsPorPagina;

  cards.forEach((card, index) => {
    if (index >= inicio && index < fin) {
      card.style.display = 'flex'; // Mostrar card
    } else {
      card.style.display = 'none'; // Ocultar card
    }
  });

  // Actualizar texto de la página actual
  paginaTexto.textContent = `Página ${pagina}`;

  // Desactivar o activar los botones
  anteriorBtn.disabled = pagina === 1;
  siguienteBtn.disabled = pagina === totalPaginas;
}

// Event listeners para los botones
anteriorBtn.addEventListener('click', () => {
  if (paginaActual > 1) {
    paginaActual--;
    mostrarPagina(paginaActual);
  }
});

siguienteBtn.addEventListener('click', () => {
  if (paginaActual < totalPaginas) {
    paginaActual++;
    mostrarPagina(paginaActual);
  }
});

// Mostrar la primera página al cargar
mostrarPagina(paginaActual);
