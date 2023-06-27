function cambiarTextoBoton() {
    let button = document.querySelector('.result.package-result--selected.package-result--master .info-card__action-item');

    if (button) {
        button.textContent = 'Comprar';
        return;
    }

    setTimeout(cambiarTextoBoton, 100);
}

function abrirVentanaModal() {
    const link = document.querySelector('.result.package-result--selected.package-result--master .info-card__action-item');

    if (link) {
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

            const modalText = document.createElement('p');
            modalText.textContent = 'Contenido de la ventana modal.';

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



