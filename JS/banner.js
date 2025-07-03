document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.banner-img');
    const flechaIzq = document.querySelector('.banner-flecha.izquierda');
    const flechaDer = document.querySelector('.banner-flecha.derecha');
    const bannerTexto = document.querySelector('.banner-texto');
    let indiceActual = 0;
    let intervalo;
    
    // Función para mostrar imagen y controlar texto
    function mostrarImagen(indice) {
        // Ocultar todas las imágenes
        imagenes.forEach(img => {
            img.classList.remove('active');
            img.style.opacity = '0';
        });
        
        // Mostrar imagen actual con transición
        setTimeout(() => {
            imagenes[indice].classList.add('active');
            imagenes[indice].style.opacity = '1';
        }, 10);
        
        // Controlar visibilidad del texto
        if (indice === 0) {
            bannerTexto.style.opacity = '1';
            bannerTexto.style.pointerEvents = 'auto';
        } else {
            bannerTexto.style.opacity = '0';
            bannerTexto.style.pointerEvents = 'none';
        }
    }
    
    // Función para siguiente imagen
    function siguienteImagen() {
        indiceActual = (indiceActual + 1) % imagenes.length;
        mostrarImagen(indiceActual);
    }
    
    // Función para imagen anterior
    function anteriorImagen() {
        indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
        mostrarImagen(indiceActual);
    }
    
    // Event listeners para flechas
    flechaIzq.addEventListener('click', anteriorImagen);
    flechaDer.addEventListener('click', siguienteImagen);
    
    // Cambio automático cada 5 segundos
    function iniciarIntervalo() {
        intervalo = setInterval(siguienteImagen, 5000);
    }
    
    // Pausar al interactuar
    const banner = document.querySelector('.banner');
    banner.addEventListener('mouseenter', () => clearInterval(intervalo));
    banner.addEventListener('mouseleave', iniciarIntervalo);
    
    // Inicialización
    mostrarImagen(0);
    iniciarIntervalo();
});