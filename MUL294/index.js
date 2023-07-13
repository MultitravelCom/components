// Función recursiva para mover el contenido al modal de vuelos
// Función recursiva para mover el contenido al modal de vuelos
function moverContenidoVuelos() {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
        return;
    }

    const contenidoModal = document.querySelector('.package-result--master .result-option__extended-info');
    const modalVuelos = document.getElementById('ver-vuelo');

    if (contenidoModal && modalVuelos) {
        const modalContent = modalVuelos.querySelector('#ver-vuelo .modal-content-packages');
        const divContenido = document.createElement('div'); // Crear un nuevo div para el contenido
        divContenido.appendChild(contenidoModal);
        modalContent.innerHTML = ''; // Limpiar el contenido existente en el modal antes de agregar el nuevo
        modalContent.appendChild(divContenido);
    } else {
        setTimeout(moverContenidoVuelos, 100);
    }
}

function moverContenidoServicio() {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
        return;
    }

    let intervalId;

    function moverElementos() {
        let modalContent = document.querySelector("#ver-servicio .modal-content-packages");
        let elements = document.querySelectorAll(".result-option__extended-info.result-option__extended-info--hotel");

        if (modalContent && elements.length > 0) {
            const divContenido = document.createElement('div'); // Crear un nuevo div para el contenido
            modalContent.innerHTML = ''; // Limpiar el contenido existente en el modal antes de agregar los nuevos elementos
            
            elements.forEach(function (element) {
                divContenido.appendChild(element);
            });
            
            modalContent.appendChild(divContenido);
        }
    }

    // Limpiar el intervalo existente antes de crear uno nuevo
    if (intervalId) {
        clearInterval(intervalId);
    }

    intervalId = setInterval(moverElementos, 100);
}

// Objeto para almacenar los modales creados
const modalesCreados = {};
// Función para crear los modales al cargar la página
function crearModalesIniciales() {
    const modalesIniciales = [
        {
            titulo: 'Detalle de vuelo',
            contenido: 'Contenido del modal de vuelo',
            selectorTexto: 'Ver vuelo',
        },
        {
            titulo: 'Todos los servicios',
            contenido: 'Contenido del modal de servicio',
            selectorTexto: 'Ver servicio',
        }
    ];

    modalesIniciales.forEach(modalInicial => {
        const { titulo, contenido, selectorTexto } = modalInicial;
        const modalId = selectorTexto.replace(/\s/g, '-').toLowerCase(); // Convertir el texto del selector a formato ID
        let modal = modalesCreados[modalId];

        if (!modal) {
            modal = document.createElement('div');
            modal.classList.add('modal-packages');
            modal.setAttribute('id', modalId);

            const modalContent = document.createElement('div');
            modalContent.classList.add('modal-content-packages');

            const modalHeader = document.createElement('div');
            modalHeader.classList.add('modal-header');

            const modalTitle = document.createElement('h2');
            modalTitle.textContent = titulo; // Establecer el título del modal

            const modalClose = document.createElement('button');
            modalClose.innerHTML = 'Volver'; // Utilizar código HTML para representar la "X"
            modalClose.classList.add('modal-close-packages');
            modalClose.addEventListener('click', function () {
                cerrarModal(modalId); // Llamar a la función para cerrar el modal al hacer clic en la "X"
            });

            const buttonContentWrapper = document.createElement('div');
            buttonContentWrapper.classList.add('button-content-wrapper');
            buttonContentWrapper.appendChild(modalClose);

            modalHeader.appendChild(modalTitle);
            modalHeader.appendChild(buttonContentWrapper);
            modalContent.appendChild(modalHeader);
            modal.appendChild(modalContent);
            document.body.appendChild(modal);

            // Agregar evento de clic para cerrar el modal al hacer clic fuera de él
            modal.addEventListener('click', function (event) {
                if (event.target === modal) {
                    cerrarModal(modalId);
                }
            });

            // Almacenar el modal creado en el objeto modalesCreados
            modalesCreados[modalId] = modal;
        }
    });
}

// Función para abrir el modal
function abrirVentanaModal(modalId) {
    const modal = modalesCreados[modalId];

    if (modal) {
        modal.style.display = 'flex';
        document.body.classList.add('modal-open-packages');
    } else {
        console.error(`No se encontró el modal con el ID: ${modalId}`);
    }
}
// Función para cerrar el modal
function cerrarModal(modalId) {
    const modal = modalesCreados[modalId];

    if (modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open-packages');
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
// Funcion para mostrar contenido dentro del modal sin la necesidad de cliquear boton. 
function clickAutomatico() {
    const buttonExtendedInfo = document.querySelector("#ver-servicio > div > div.result-option__extended-info.result-option__extended-info--hotel > div > div.info-card > div.info-card__content > a.btn.btn-secondary.btn-small.info-card__action-item.js-result-selected-action--extended-hotel-info");

    // Verificar si el clic automático ya se ha realizado
    const yaClickeado = buttonExtendedInfo.dataset.yaClickeado === "true";

    if (!yaClickeado) {
        // Realizar el clic automático
        buttonExtendedInfo.click();

        // Establecer el flag de clic automático a true
        buttonExtendedInfo.dataset.yaClickeado = "true";
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

                // Comprobar si los textos ya se agregaron previamente
                const existingVerVuelo = resultOptions.querySelector('.ver-vuelo');
                const existingVerServicio = resultOptions.querySelector('.ver-servicio');

                if (!existingVerVuelo) {
                    const divVerVuelo = document.createElement('div');
                    divVerVuelo.textContent = 'Ver vuelo';
                    divVerVuelo.classList.add('ver-vuelo');
    
                    const resultOptionElements = resultOptions.querySelectorAll('.result-option.result-option--extended');
    
                    if (resultOptionElements.length >= 1) {
                        resultOptionElements[0].appendChild(divVerVuelo);
    
                        divVerVuelo.addEventListener('click', function () {
                            abrirVentanaModal('ver-vuelo');
                        });
                    }
                }

                if (!existingVerServicio) {
                    const divVerServicio = document.createElement('div');
                    divVerServicio.textContent = 'Ver servicio';
                    divVerServicio.classList.add('ver-servicio');
    
                    const resultOptionElements = resultOptions.querySelectorAll('.result-option.result-option--extended');
    
                    if (resultOptionElements.length >= 2) {
                        resultOptionElements[1].appendChild(divVerServicio);
    
                        divVerServicio.addEventListener('click', function () {
                            abrirVentanaModal('ver-servicio');
                            clickAutomatico();
                        });
                    }
                }
            }
        }
    }, 150);
}


function observarCambiosResultsListPackage() {
    const observerConfig = {
        rootNode: document.documentElement,
        queries: [
            { element: '.results-list__package' },
        ],
        callback: (summaries) => {

            crearModalesIniciales();
            cambiarTextoBoton();
            agregarTextos();
            moverContenidoVuelos();
            moverContenidoServicio();
        },
    };

    const observer = new MutationSummary(observerConfig);
}

document.addEventListener("DOMContentLoaded", function () {
    crearModalesIniciales();
    cambiarTextoBoton();
    agregarTextos();
    moverContenidoVuelos();
    moverContenidoServicio();
    observarCambiosResultsListPackage();
});
