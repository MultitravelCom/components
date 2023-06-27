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
function agregarTextos() {
    const isMobile = window.innerWidth <= 768; // Verificar si la resolución es igual o inferior a 768px (puedes ajustar este valor según tus necesidades)
  
    if (!isMobile) {
      return; // Salir de la función si no es un dispositivo móvil
    }
  
    let intervalId = setInterval(function() {
      const packageResultMaster = document.querySelector('.package-result--master');
      if (packageResultMaster) {
        const resultOptions = packageResultMaster.querySelector('.result__options');
        if (resultOptions) {
          clearInterval(intervalId);
  
          const divVerVuelo = document.createElement('div');
          divVerVuelo.textContent = 'Ver vuelo';
          divVerVuelo.classList.add('ver-vuelo'); // Agregar la clase 'ver-vuelo'
  
          const divVerServicio = document.createElement('div');
          divVerServicio.textContent = 'Ver servicio';
          divVerServicio.classList.add('ver-servicio'); // Agregar la clase 'ver-servicio'
  
          const resultOptionElements = resultOptions.querySelectorAll('.result-option.result-option--extended');
  
          if (resultOptionElements.length >= 1) {
            resultOptionElements[0].appendChild(divVerVuelo);
          }
  
          if (resultOptionElements.length >= 2) {
            resultOptionElements[1].appendChild(divVerServicio);
          }
        }
      }
    }, 150);
  }

document.addEventListener("DOMContentLoaded", function () {
    cambiarTextoBoton();
    moverDescripcionAlModal()
    abrirVentanaModal();
    cambiarTextoBoton();

    agregarTextos();

});
