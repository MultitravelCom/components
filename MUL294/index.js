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
    const link = document.querySelector('.result.package-result--selected.package-result--master .info-card__action-item');
    const descriptionDiv = document.querySelector('.js-result-package-option__hotel-description');

    if (link && descriptionDiv) {
      clearInterval(intervalId);
      console.log('Elemento <a> encontrado:', link);

      link.addEventListener('click', function(event) {
        event.preventDefault();

        const tituloModal = 'Título del modal';
        const contenidoModal = descriptionDiv.innerHTML;

        abrirVentanaModal(tituloModal, contenidoModal);
      });
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

  actualizarContenidoModal(titulo, contenido);
}

function actualizarContenidoModal(titulo, contenido) {
  let modalContent = document.querySelector('#modal-packages');

  if (!modalContent) {
    modalContent = document.createElement('div');
    modalContent.setAttribute('id', 'modal-packages');
    modalContent.classList.add('modal-content');
    modalContent.innerHTML = `
      <h2>${titulo}</h2>
      <p>${contenido}</p>
    `;
    document.querySelector('#miModal').appendChild(modalContent);
  } else {
    modalContent.querySelector('h2').textContent = titulo;
    modalContent.querySelector('p').innerHTML = contenido;
  }
}

function agregarTextos() {
  const isMobile = window.innerWidth <= 768;

  if (!isMobile) {
    return;
  }

  let intervalId = setInterval(function() {
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

          divVerVuelo.addEventListener('click', function() {
            abrirVentanaModal('Modal de vuelo', 'Contenido del modal de vuelo.');
          });
        }

        if (resultOptionElements.length >= 2) {
          resultOptionElements[1].appendChild(divVerServicio);

          divVerServicio.addEventListener('click', function() {
            abrirVentanaModal('Modal de servicio', 'Contenido del modal de servicio.');
          });
        }
      }
    }
  }, 150);
}

document.addEventListener('DOMContentLoaded', function() {
  cambiarTextoBoton();
  moverDescripcionAlModal();
  agregarTextos();
});
