function cambiarTextoBoton() {
    let button = document.querySelector('.result-option__book-button');

    if (button) {
        button.textContent = 'Comprar';
        return;
    }

    setTimeout(cambiarTextoBoton, 100);
}

function moverDescripcionAlModal() {
    let intervalId = setInterval(function() {
        const descriptionDiv = document.querySelector('.js-result-package-option__hotel-description');
        const modalContent = document.querySelector('#modal-packages');

        if (descriptionDiv && modalContent) {
            clearInterval(intervalId);
            modalContent.appendChild(descriptionDiv);
            descriptionDiv.style.display = 'block';
        }
    }, 100);
}
function cambiarTextoBoton() {
    const boton = document.querySelector('.result-option__change-button');
    const dataProduct = boton.getAttribute('data-product');

    if (dataProduct === 'flight') {
        boton.textContent = 'Cambiar vuelo';
    } else if (dataProduct === 'hotel') {
        boton.textContent = 'Cambiar alojamiento';
    }
}
function abrirVentanaModal() {
    let intervalId = setInterval(function() {
        const link = document.querySelector('.info-card__action-item');

        if (link) {
            clearInterval(intervalId);
            console.log('Enlace encontrado:', link);

            link.addEventListener('click', function (event) {
                event.preventDefault();

                let modal = document.querySelector('#miModal');

                if (!modal) {
                    modal = document.createElement('div');
                    modal.classList.add('modal');
                    modal.setAttribute('id', 'miModal');
                    modal.innerHTML = `
                        <div id="modal-packages" class="modal-content">
                            <h2>Ventana Modal</h2>
                            <p>Contenido de la ventana modal.</p>
                        </div>
                    `;

                    document.body.appendChild(modal);

                    // moverDescripcionAlModal(modal.querySelector('.modal-content'));
                }

                modal.style.display = 'flex';

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
    }, 100);
}
document.addEventListener("DOMContentLoaded", function () {
    cambiarTextoBoton();
    moverDescripcionAlModal()
    abrirVentanaModal();
    cambiarTextoBoton();

    const boton = document.querySelector('.result-option__change-button');
    boton.addEventListener('click', cambiarTextoBoton);
});
