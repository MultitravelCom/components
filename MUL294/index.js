function cambiarTextoBoton() {
    const botonDataProduct = document.querySelector('.result-option__change-button');

    if (botonDataProduct) {
        const dataProduct = botonDataProduct.dataset.product;

        if (dataProduct === 'flight') {
            botonDataProduct.textContent = 'Cambiar vuelo';
        } else if (dataProduct === 'hotel') {
            botonDataProduct.textContent = 'Cambiar alojamiento';
        }
    } else {
        setTimeout(cambiarTextoBoton, 100);
    }
}

function moverDescripcionAlModal() {
    let intervalId = setInterval(function () {
        const descriptionDiv = document.querySelector('.js-result-package-option__hotel-description');
        const modalContent = document.querySelector('#modal-packages');

        if (descriptionDiv && modalContent) {
            clearInterval(intervalId);

            const link = document.querySelector('.info-card__action-item');
            if (link) {
                link.addEventListener('click', function (event) {
                    event.preventDefault();

                    const modalDescription = modalContent.querySelector('.js-result-package-option__hotel-description');
                    modalDescription.innerHTML = descriptionDiv.innerHTML;

                    modalContent.style.display = 'block';

                    // Llamar a abrirVentanaModal sin pasar el contenido
                    abrirVentanaModal('Título del modal');
                });
            }
        }
    }, 100);
}
function abrirVentanaModal(titulo, contenido) {
    let modal = document.querySelector('#miModal');

    if (!modal) {
        modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', 'miModal');

        document.body.appendChild(modal);
    }

    modal.style.display = 'flex';

    // Actualizar el contenido del modal
    actualizarContenidoModal(titulo, contenido);

    // Agregar evento de clic para cerrar la ventana modal al hacer clic fuera de ella
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function actualizarContenidoModal(titulo, contenido) {
    let modalContent = document.querySelector('#modal-packages');

    if (!modalContent) {
        modalContent = document.createElement('div');
        modalContent.setAttribute('id', 'modal-packages');
        modalContent.classList.add('modal-content');
        document.querySelector('#miModal').appendChild(modalContent);
    }

    modalContent.innerHTML = `
      <h2>${titulo}</h2>
      <p>${contenido}</p>
    `;
}

function agregarTextos() {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
        return;
    }

    let intervalId = setInterval(function () {
        const packageResultMaster = document.querySelector('.package-result--master');
        if (packageResultMaster) {
            const resultOptions = packageResultMaster.querySelector('.result__options');
            if (resultOptions) {
                clearInterval(intervalId);

                const divVerVuelo = document.createElement('div');
                divVerVuelo.textContent = 'Ver vuelo';
                divVerVuelo.classList.add('ver-vuelo');

                const divVerServicio = document.createElement('div');
                divVerServicio.textContent = 'Ver servicio';
                divVerServicio.classList.add('ver-servicio');

                const resultOptionElements = resultOptions.querySelectorAll('.result-option.result-option--extended');

                if (resultOptionElements.length >= 1) {
                    resultOptionElements[0].appendChild(divVerVuelo);

                    divVerVuelo.addEventListener('click', function () {
                        abrirVentanaModal('Modal de vuelo', 'Contenido del modal de vuelo.');
                    });
                }

                if (resultOptionElements.length >= 2) {
                    resultOptionElements[1].appendChild(divVerServicio);

                    divVerServicio.addEventListener('click', function () {
                        abrirVentanaModal('Modal de servicio', 'Contenido del modal de servicio.');
                    });
                }
            }
        }
    }, 150);
}

document.addEventListener('DOMContentLoaded', function () {
    cambiarTextoBoton();
    moverDescripcionAlModal();
    agregarTextos();
});
