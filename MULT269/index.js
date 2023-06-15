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
      <a href="#" class="button__map buttonStyleHotels view-selector__item js-view-selector-toggle" data-view="map" >
          <div class="glyphicon glyphicon-view-map"></div>
          <p>Ver en mapa</p>
      </a>
    <button class="buttonStyleHotels button__filter js-results-list-filter-toggle">
        <div class="glyphicon glyphicon-loungroom"></div>
        <p>Filtrar</p>
    </button>
    `;

    results__list.appendChild(buttonsMapFilter);

    const buttons__filter = buttonsMapFilter.querySelectorAll('button');

    buttons__filter.forEach(button => {
        button.addEventListener('click', function (event) {
            if (button.classList.contains('button__filter')) {
                event.preventDefault();
            }
            console.log("Clic en el botón");
        });
    });

    // Observar cambios en el DOM utilizando MutationObserver
    const observer = new MutationObserver(updateButtonFilterZIndex);
    observer.observe(document.body, { childList: true, subtree: true });

    // Obtener los botones y el porcentaje de recorrido
    const buttonsContainer = document.querySelector('.main__container__newsButtons');
    const scrollThreshold = 0.035;

    // Función para verificar el porcentaje de recorrido y mostrar/ocultar los botones
    function checkScrollThreshold() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const documentHeight = document.documentElement.scrollHeight;

        const scrolledPercentage = scrollY / (documentHeight - windowHeight);

        if (scrolledPercentage >= scrollThreshold) {
            buttonsContainer.style.display = 'flex';
        } else {
            buttonsContainer.style.display = 'none';
        }
    }

    // Escuchar el evento de desplazamiento y llamar a la función checkScrollThreshold
    window.addEventListener('scroll', checkScrollThreshold);

    // Llamar a la función checkScrollThreshold inicialmente para verificar el estado inicial
    checkScrollThreshold();


    obtenerHrefMapa().then(href => {
        const mapButton = buttonsMapFilter.querySelector('.button__map');
        if (mapButton && href) {
            mapButton.href = href;
            console.log('Aplicado href al botón:', href);
        }
    });
}

function obtenerHrefMapa() {
    return new Promise((resolve, reject) => {
        const mapLink = document.querySelector('.view-selector__item-wrapper a[data-view="map"]');
        if (mapLink) {
            const href = mapLink.getAttribute('href');
            resolve(href);
            console.log('Aplicado href al botón:', href);
        } else {
            setTimeout(() => {
                obtenerHrefMapa().then(resolve).catch(reject);
            }, 100);
        }
    });
}

document.addEventListener('DOMContentLoaded', async function () {
    observarSidebarFilters();
    cambiarTextoMapaYBoton();
    cambiarTextoFiltro();
    cambiarTextoRegimen();
    agregarNewsButtons();
});