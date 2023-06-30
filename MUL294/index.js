// Objeto para almacenar los modales creados
const modalesCreados = {};

// Función para abrir el modal
function abrirVentanaModal(titulo, contenido, selectorTexto) {
    if (!selectorTexto) {
        console.error('No se ha proporcionado el selector de texto.');
        return;
    }

    const modalId = selectorTexto.replace(/\s/g, '-').toLowerCase(); // Convertir el texto del selector a formato ID
    let modal = modalesCreados[modalId];

    if (!modal) {
        modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', modalId);

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const modalTitle = document.createElement('h2');
        modalTitle.textContent = titulo; // Establecer el título del modal

        modalContent.appendChild(modalTitle);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Agregar evento de clic para cerrar el modal al hacer clic fuera de él
        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                cerrarModal();
            }
        });

        // Almacenar el modal creado en el objeto modalesCreados
        modalesCreados[modalId] = modal;
    }

    const modalContent = modal.querySelector('.modal-content');
    modalContent.textContent = ''; // Limpiar el contenido existente del modal

    // Obtener el contenido del selector result-option__extended-info
    const contenidoModal = document.querySelector(selectorTexto);
    if (contenidoModal) {
        const contenidoClonado = contenidoModal.cloneNode(true);
        modalContent.appendChild(contenidoClonado);
    }

    // Mostrar el modal
    modal.style.display = 'flex';

    // Función para cerrar el modal
    function cerrarModal() {
        modal.style.display = 'none';
        modal.removeEventListener('click', cerrarModal);
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
                        abrirVentanaModal('Modal de vuelo', '.result-option__extended-info', 'Ver vuelo');
                    });
                }

                if (resultOptionElements.length >= 2) {
                    resultOptionElements[1].appendChild(divVerServicio);

                    divVerServicio.addEventListener('click', function () {
                        abrirVentanaModal('Modal de servicio', 'Contenido del modal de servicio.', 'Ver servicio');
                    });
                }
            }
        }
    }, 150);
}

document.addEventListener("DOMContentLoaded", function() {
    cambiarTextoBoton();
    agregarTextos()
  });
  
