function cambiarTextoBoton() {
    let button = document.querySelector('.result-option__book-button');

    if (button) {
        button.textContent = 'Comprar';
        return;
    }

    setTimeout(cambiarTextoBoton, 100);
}

function moverDescripcionAlModal(modalContent) {
    const modalDescription = document.querySelector('.js-result-package-option__hotel-description');

    if (modalDescription && modalContent) {
        modalContent.appendChild(modalDescription);
        modalDescription.style.display = 'block';
    }
}

function abrirVentanaModal() {
    const link = document.querySelector('.info-card__action-item');

    if (link) {
        console.log('Enlace encontrado:', link);

        link.addEventListener('click', function (event) {
            event.preventDefault();

            let modal = document.querySelector('.modal');

            if (!modal) {
                modal = document.createElement('div');
                modal.classList.add('modal');
                modal.innerHTML = `
                    <div class="modal-content">
                        <h2>Ventana Modal</h2>
                        <p>Contenido de la ventana modal.</p>
                    </div>
                `;

                document.body.appendChild(modal);

                // Mover el contenido del div al modal antes de abrirlo
                moverDescripcionAlModal(modal.querySelector('.modal-content'));
            }

            modal.style.display = 'block';

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
