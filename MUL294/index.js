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
    let intervalId = setInterval(function() {
      const link = document.querySelector('result.package-result--selected.package-result--master .info-card__action-item');
      const modalContent = document.querySelector('#modal-packages .modal-content');
      const descriptionDiv = document.querySelector('.js-result-package-option__hotel-description');
  
      if (link && modalContent && descriptionDiv) {
        clearInterval(intervalId);
        console.log('Elemento <a> encontrado:', link);
  
        link.addEventListener('click', function(event) {
          event.preventDefault();
  
          // Mover el contenido del descriptionDiv al modal
          while (descriptionDiv.firstChild) {
            modalContent.appendChild(descriptionDiv.firstChild);
          }
  
          abrirVentanaModal('Título del modal', 'Contenido del modal');
        });
      }
    }, 100);
  }
  Esta modificación agregará la lógica para mover el contenido de la clase "js-result-package-option__hotel-description" al modal antes de abrirlo. Utiliza un bucle while para mover todos los elementos hijos del "descriptionDiv" al "modalContent". Después de mover el contenido, se llama a la función "abrirVentanaModal" con el título y contenido deseados.
  
  Espero que esto te ayude. Si tienes alguna otra pregunta, no dudes en preguntar.
  
  
  
  
  
  
  
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
