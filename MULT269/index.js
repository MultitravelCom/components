function cambiarTextoMapaYBoton() {
    const sidebarElements = document.querySelectorAll('.js-sidebar-map-placeholder .sidebar-map');

    sidebarElements.forEach(function (element) {
        const span = element.querySelector('span.btn.btn-secondary');

        if (span && span.innerText === 'Abrir mapa') {
            span.innerText = 'Ver en mapa';
            return; // Salir de la función forEach una vez que se haya realizado el cambio
        }
    });

    const viewSelectorItems = document.querySelectorAll('.view-selector__item');

    viewSelectorItems.forEach(function (item) {
        const label = item.querySelector('.view-selector__label.view-selector__label--full');

        if (label) {
            if (label.innerText === 'Vista por mapa') {
                label.innerText = 'Ver en mapa';
            } else if (label.innerText === 'Vista resumo') {
                label.innerText = 'Ver en lista';
            }
        }
    });

    // Volver a llamar a la función si no se encontró el div con el texto a cambiar
    setTimeout(cambiarTextoMapaYBoton, 100); // Ajusta el intervalo de tiempo según tus necesidades
}

function cambiarTextoFiltro() {
    let filtersInner = document.querySelector('.sidebar-filters__inner');
    let filterHeaders = filtersInner.querySelectorAll('.filter__header');

    filterHeaders.forEach(function (header, index) {
        if (index === 0) {
            header.innerText = 'Nombre de alojamiento';
        } else if (index === 1) {
            header.innerText = 'Zonas';
        } else if (index === 2) {
            header.innerText = 'Precio';
        }
    });
}

function cambiarTextoRegimen() {
    const filtersInner = document.querySelector('.sidebar-filters__inner');
    const placeholderDiv = filtersInner.querySelector('.results-sidebar__placeholder.js-filter-by-boards-placeholder');

    if (placeholderDiv) {
        const filterHeader = placeholderDiv.querySelector('.filter__header');

        if (filterHeader) {
            filterHeader.innerText = 'Alimentación';
        } else {
            // Si no se encuentra el div con el texto, volver a llamar a la función después de un intervalo de tiempo
            setTimeout(cambiarTextoRegimen, 1000); // Puedes ajustar el intervalo de tiempo según tus necesidades
        }
    } else {
        // Si no se encuentra el div con el texto, volver a llamar a la función después de un intervalo de tiempo
        setTimeout(cambiarTextoRegimen, 1000); // Puedes ajustar el intervalo de tiempo según tus necesidades
    }
}

function observarSidebarFilters() {
    const sidebarFilters = document.querySelector('.results__sidebar');

    // Crear una instancia de MutationObserver
    const observer = new MutationObserver(function (mutationsList) {
        // Verificar si hay mutaciones dentro de sidebarFilters
        for (let mutation of mutationsList) {
            if (mutation.target === sidebarFilters) {
                cambiarTextoFiltro();
                break;
            }
        }
    });

    // Configurar las opciones de observación
    const observerOptions = { childList: true, subtree: true };

    // Iniciar la observación
    observer.observe(sidebarFilters, observerOptions);
}

function agregarNewsButtons() {
    const results__list = document.getElementById("results-list");

    const buttonsMapFilter = document.createElement("div");
    buttonsMapFilter.classList.add("main__container__newsButtons");
    buttonsMapFilter.innerHTML =
        `
      <button class="buttonStyleHotels button__map">
        <a href="#" class="buttonStyleHotels">
            <div class="glyphicon glyphicon-view-map"></div>
            <p>Ver en mapa</p>
        </a>
      </button>
      <button class="buttonStyleHotels button__filter js-results-list-filter-toggle">
          <div class="glyphicon glyphicon-loungroom"></div>
          <p>Filtrar</p>
      </button>
      `;

    results__list.appendChild(buttonsMapFilter);

    const viewSelector = document.querySelector('.view-selector');

    if (viewSelector) {
      let href;
    
      viewSelector.querySelectorAll('.view-selector__item-wrapper').forEach((itemWrapper, index) => {
        if (index === 2) {
          const link = itemWrapper.querySelector('a');
          href = link.getAttribute('href');
        }
      });
    
      console.log(href);
    }

    const buttons = buttonsMapFilter.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            console.log("Clic en el botón");
        });
    });
};


document.addEventListener('DOMContentLoaded', async function () {
    observarSidebarFilters();
    cambiarTextoMapaYBoton();
    cambiarTextoFiltro();
    cambiarTextoRegimen();
    agregarNewsButtons();
});