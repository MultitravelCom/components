// Objeto para almacenar los modales creados
const modalesCreados = {};

// Función para crear los modales al cargar la página
function crearModalesIniciales() {
    const modalesIniciales = [
        {
            titulo: 'Modal de vuelo',
            contenido: '.result-option__extended-info',
            selectorTexto: 'Ver vuelo'
        },
        {
            titulo: 'Modal de servicio',
            contenido: 'Contenido del modal de servicio.',
            selectorTexto: 'Ver servicio'
        }
    ];

    modalesIniciales.forEach(modalInicial => {
        const { titulo, contenido, selectorTexto } = modalInicial;
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

        // Obtener el contenido del selector especificado en el modal inicial
        const contenidoModal = document.querySelector(contenido);
        if (contenidoModal) {
            const contenidoClonado = contenidoModal.cloneNode(true);
            modalContent.appendChild(contenidoClonado);
        }
    });
}

// Función para abrir el modal
function abrirVentanaModal(modalId) {
    const modal = modalesCreados[modalId];

    if (modal) {
        modal.style.display = 'flex';
    } else {
        console.error(`No se encontró el modal con el ID: ${modalId}`);
    }
}

// Función para cerrar el modal
function cerrarModal(modalId) {
    const modal = modalesCreados[modalId];

    if (modal) {
        modal.style.display = 'none';
    } else {
        console.error(`No se encontró el modal con el ID: ${modalId}`);
    }
}

// Función para cambiar el texto del botón
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
                        abrirVentanaModal('ver-vuelo');
                    });
                }

                if (resultOptionElements.length >= 2) {
                    resultOptionElements[1].appendChild(divVerServicio);

                    divVerServicio.addEventListener('click', function () {
                        abrirVentanaModal('ver-servicio');
                    });
                }
            }
        }
    }, 150);
}

document.addEventListener("DOMContentLoaded", function() {
    crearModalesIniciales();
    cambiarTextoBoton();
    agregarTextos();
});
