function iniciarSesion() {
  let usuario = document.getElementById("usuario").value;
  let contrasena = document.getElementById("contrasena").value;
  let mensaje = document.getElementById("mensaje");

  if (usuario === "" || contrasena === "") {
    mensaje.style.color = "orange";
    mensaje.innerText = "Completa todos los campos.";
  } else if (usuario !== "gallo" || contrasena !== "1234") {
    mensaje.style.color = "red";
    mensaje.innerText = "Usuario o contraseña incorrectos.";
  } else {
    mensaje.style.color = "#00ff6e";
    mensaje.innerText = "¡Inicio de sesión exitoso!";
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const btnRegistro = document.querySelector('.btn-registrarse');
  const modal = document.getElementById('modal-suscripcion');
  const cerrarModal = document.getElementById('cerrar-modal');

  btnRegistro.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
  });

  cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
