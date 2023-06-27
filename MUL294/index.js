function cambiarTextoBoton() {
    let button = document.querySelector('.result-option__book-button');

    if (button) {
        button.textContent = 'Comprar';
        return;
    }

    setTimeout(cambiarTextoBoton, 100);
}
function abrirVentanaModal() {
    // Obtén la referencia al elemento <a> mediante su clase o cualquier otro selector válido
    const link = document.querySelector('.info-card__action-item');

    // Añade un evento de clic al enlace
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Evita que se realice la acción predeterminada del enlace

        // Crea y muestra la ventana modal
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.style.display = 'block';

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const modalTitle = document.createElement('h2');
        modalTitle.textContent = 'Ventana Modal';

        const modalText = document.createElement('p');
        modalText.textContent = 'Contenido de la ventana modal.';

        modalContent.appendChild(modalTitle);
        modalContent.appendChild(modalText);
        modal.appendChild(modalContent);

        document.body.appendChild(modal);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    abrirVentanaModal();
    cambiarTextoBoton();
});

