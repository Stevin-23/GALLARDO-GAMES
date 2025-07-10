
function filtrarGenero() {
  var generoSeleccionado = document.getElementById("genero").value;
  var juegos = document.querySelectorAll(".juego-card");

  juegos.forEach(function(juego) {
    var categorias = juego.querySelectorAll(".categoria");
    var coincide = false;

    categorias.forEach(function(cat) {
      if (generoSeleccionado === "todos" || cat.textContent === generoSeleccionado) {
        coincide = true;
      }
    });

    juego.style.display = coincide ? "flex" : "none";
  });
}
