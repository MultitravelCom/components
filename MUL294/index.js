// Función para abrir el modal
function abrirVentanaModal(titulo, contenido) {
    const modal = document.getElementById('miModal');
    const modalContent = modal.querySelector('.modal-content');
    const modalTitle = modal.querySelector('h2');

    if (modal.style.display === 'none') {
        // Abrir el modal
        modal.style.display = 'flex';
        modalContent.textContent = contenido;
        modalTitle.textContent = titulo;

        // Agregar evento de clic para cerrar el modal al hacer clic fuera de él
        document.addEventListener('click', function (event) {
            if (event.target === modal) {
                // Cerrar el modal
                modal.style.display = 'none';
            }
        });
    } else {
        // Cerrar el modal
        modal.style.display = 'none';
    }
}
//********************** */
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
    agregarTextos();
});
