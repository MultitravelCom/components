// Crear el modal #modal-packages
function crearModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', 'miModal');

    const modalContent = document.createElement('div');
    modalContent.setAttribute('id', 'modal-packages');
    modalContent.classList.add('modal-content');

    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}

function actualizarContenidoModal(titulo, contenido) {
    const modalContent = document.querySelector('#modal-packages');
    modalContent.innerHTML = `
      <h2>${titulo}</h2>
      <p>${contenido}</p>
    `;
}

function abrirVentanaModal(titulo, contenido) {
    return new Promise((resolve) => {
        const modal = document.querySelector('#miModal');
        modal.style.display = 'flex';

        actualizarContenidoModal(titulo, contenido);

        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Resuelve la promesa después de un breve período de tiempo para permitir que el modal se muestre correctamente
        setTimeout(() => {
            resolve();
        }, 50);
    });
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

function moverDescripcionAlModal() {
    const link = document.querySelector('.result.package-result--selected.package-result--master .info-card__action-item');
    const descriptionDiv = document.querySelector('.js-result-package-option__hotel-description');
    const modal = document.querySelector('#modal-packages');
  
    if (link && descriptionDiv && modal && descriptionDiv.offsetHeight !== 0) {
      console.log('Elemento <a> encontrado:', link);
  
      const modalContent = modal.querySelector('.modal-content');
  
      modalContent.innerHTML = '';
      modalContent.appendChild(descriptionDiv);
  
      modal.style.display = 'block';
    } else {
      setTimeout(moverDescripcionAlModal, 100);
    }
  }

// Agregar textos
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
    crearModal();
    cambiarTextoBoton();
    moverDescripcionAlModal();
    agregarTextos();
});
