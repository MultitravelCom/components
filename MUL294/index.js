function cambiarTextoBoton() {
    let button = document.querySelector('.result-option__book-button');

    if (button) {
        button.textContent = 'Comprar';
        return;
    }

    setTimeout(cambiarTextoBoton, 100);
}
function moverDescripcionAlModal() {
    let intervalId = setInterval(function () {
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
function abrirVentanaModal() {
    let intervalId = setInterval(function () {
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
function agregarTextosYModales() {
    function abrirModal(titulo, contenido) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.style.display = 'block';

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const modalTitle = document.createElement('h2');
        modalTitle.textContent = titulo;

        const modalText = document.createElement('p');
        modalText.textContent = contenido;

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
    }

    function agregarTextos() {
        const divResultado = document.querySelector('.result-package-result--selected.package-result--master');

        const verVuelo = document.createElement('span');
        verVuelo.classList.add('ver-vuelo');
        verVuelo.textContent = 'Ver vuelo';

        const verServicio = document.createElement('span');
        verServicio.classList.add('ver-servicio');
        verServicio.textContent = 'Ver servicio';

        divResultado.appendChild(verVuelo);
        divResultado.appendChild(verServicio);
    }

    let intervalId = setInterval(function () {
        const divResultado = document.querySelector('.result-package-result--selected.package-result--master');

        if (divResultado) {
            clearInterval(intervalId);
            agregarTextos();

            const verVuelo = document.querySelector('.ver-vuelo');
            const verServicio = document.querySelector('.ver-servicio');

            if (verVuelo) {
                verVuelo.addEventListener('click', function () {
                    abrirModal('Modal de vuelo', 'Contenido del modal de vuelo.');
                });
            }

            if (verServicio) {
                verServicio.addEventListener('click', function () {
                    abrirModal('Modal de servicio', 'Contenido del modal de servicio.');
                });
            }
        }
    }, 100); // Intervalo de tiempo en milisegundos
}

document.addEventListener("DOMContentLoaded", function () {
    cambiarTextoBoton();
    moverDescripcionAlModal()
    abrirVentanaModal();
    cambiarTextoBoton();
    if (window.innerWidth <= 767) {
        agregarTextosYModales();
    }
});
