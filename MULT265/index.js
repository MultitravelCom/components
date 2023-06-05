document.addEventListener('DOMContentLoaded', function () {
    // Obtén el elemento con la clase "upper-menu__login-button__text visible-lg-inline"
    let elemento = document.querySelector('.upper-menu__login-button__text.visible-lg-inline');

    // Cambia el texto del elemento por "Ingreso"
    elemento.textContent = 'Ingreso';

    let boton = document.querySelector('.upper-menu__login-button');

    // Cambia la clase del botón para mostrarlo
    boton.classList.remove('hidden-xs');
});

