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
    <div class="buttonStyleHotels button__filter js-results-list-filter-toggle">
        <div class="glyphicon glyphicon-loungroom"></div>
        <p>Filtrar</p>
    </div>
    `;

    results__list.appendChild(buttonsMapFilter);

    const buttons__filter = buttonsMapFilter.querySelectorAll('button');

    buttons__filter.forEach(button => {
        button.addEventListener('click', function (event) {
            if (button.classList.contains('button__filter')) {
                event.preventDefault();
            }
        });
    });

    const buttonsContainer = document.querySelector('.main__container__newsButtons');
    const scrollThreshold = 0.035;

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

    window.addEventListener('scroll', checkScrollThreshold);
    checkScrollThreshold();

    // Obtener referencia al botón
    let mapButton = buttonsMapFilter.querySelector('.button__map');
    let hrefMap, hrefResumed;

    // Obtener los href de los botones
    obtenerHrefMapa().then(function (href) {
        hrefMap = href.hrefMap;
        hrefResumed = href.hrefResumed;
        // Asignar el href inicial al botón
        mapButton.href = hrefMap;
    }).catch(function (error) {
        console.error('Error al obtener los href:', error);
    });

    // Agregar evento click al botón
    mapButton.addEventListener('click', function (event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

        // Obtener el estado actual del botón
        let isMapVisible = mapButton.href === hrefMap;

        // Cambiar el texto del botón
        mapButton.querySelector('p').textContent = isMapVisible ? 'Ver en mapa' : 'Ver en lista';

        // Cambiar el valor del href
        mapButton.href = isMapVisible ? hrefResumed : hrefMap;

        // Volver a la página del href
        window.location.href = mapButton.href;
    });
}

function obtenerHrefMapa() {
    return new Promise((resolve, reject) => {
        const mapLink = document.querySelector('.view-selector__item-wrapper a[data-view="map"]');
        const resumedLink = document.querySelector('.view-selector__item-wrapper a[data-view="resumed"]');

        if (mapLink && resumedLink) {
            const hrefMap = mapLink.getAttribute('href');
            const hrefResumed = resumedLink.getAttribute('href');
            resolve({ hrefMap, hrefResumed });
            console.log('Aplicado href al botón de mapa:', hrefMap);
            console.log('Aplicado href al botón de resumido:', hrefResumed);
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