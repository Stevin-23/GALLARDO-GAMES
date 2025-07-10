document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');

  menuIcon.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    
    // Cambiar el ícono de hamburguesa a X cuando está activo
    if (navLinks.classList.contains('active')) {
      menuIcon.innerHTML = '&times;';
    } else {
      menuIcon.innerHTML = '&#9776;';
    }
  });

  // Cerrar menú al hacer clic en un enlace (opcional)
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuIcon.innerHTML = '&#9776;';
    });
  });
});