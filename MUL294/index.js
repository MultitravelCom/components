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
    const hotelDescription = document.querySelector('.js-result-package-option__hotel-description');

    if (link && hotelDescription) {
        console.log('Enlace encontrado:', link);

        link.addEventListener('click', function (event) {
            event.preventDefault();

            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.style.display = 'block';

            const modalContent = document.createElement('div');
            modalContent.classList.add('modal-content');

            const modalTitle = document.createElement('h2');
            modalTitle.textContent = 'Ventana Modal';

            const modalDescription = document.createElement('div');
            modalDescription.classList.add('modal-description');
            modalDescription.innerHTML = hotelDescription.innerHTML;

            modalContent.appendChild(modalTitle);
            modalContent.appendChild(modalText);
            modal.appendChild(modalContent);

            document.body.appendChild(modal);

            // Agregar evento de clic para cerrar la ventana modal al hacer clic fuera de ella
            modal.addEventListener('click', function (event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });
    } else {
        console.log('Enlace no encontrado');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    cambiarTextoBoton();
    abrirVentanaModal();
});


