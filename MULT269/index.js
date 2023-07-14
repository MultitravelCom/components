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
function detectarCambios() {
    const calendarContainers = document.querySelectorAll('.js-calendar-container');

    calendarContainers.forEach((container) => {
        console.log('Se detectó el contenedor .js-calendar-container:', container);

        const observer = new MutationSummary({
            callback: function (summaries) {
                summaries.forEach(function (summary) {
                    console.log('Se detectó un cambio en el contenedor .js-calendar-container:', summary);

                    const filterButton = document.querySelector('#results-list > div.main__container__newsButtons--mobile');

                    if (summary.value.class.includes('closed')) {
                        console.log('La clase "closed" fue detectada');
                        filterButton.style.display = 'flex';
                    } else if (summary.value.class.includes('opened')) {
                        console.log('La clase "opened" fue detectada');
                        filterButton.style.display = 'none';
                    }
                });
            },
            queries: [{
                element: container,
                elementAttributes: 'class'
            }]
        });

        observer.observe();
    });
}

function observarSidebarFilters() {
    const sidebarFilters = document.querySelector('.results__sidebar');

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
    buttonsMapFilter.classList.add("main__container__newsButtons--mobile");
    buttonsMapFilter.innerHTML =
        `
        <div class="main__container__newsButtons">
      <a href="#" class="button__map buttonStyleHotels view-selector__item js-view-selector-toggle" data-view="map" >
          <div class="glyphicon glyphicon-view-map"></div>
          <p>Ver en mapa</p>
      </a>
    <div class="buttonStyleHotels button__filter js-results-list-filter-toggle">
        <div class="glyphicon glyphicon-loungroom"></div>
        <p>Filtrar</p>
    </div>
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
    // ***********************************************************************************
    const buttonsContainer = document.querySelector('.main__container__newsButtons');
    let isScrolled = false;

    function checkScrollThreshold() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const footerElement = document.querySelector('footer');

        const scrolledPercentage = scrollY / (documentHeight - windowHeight);


        const isMobileView = window.innerWidth <= 767;

        if ((scrolledPercentage >= 0.015 || isScrolled) && isMobileView && !isInFooter()) {
            buttonsContainer.style.display = 'flex';
        } else {
            buttonsContainer.style.display = 'none';
        }

        isScrolled = true;
    }

    function isInFooter() {
        const footerElement = document.querySelector('footer');
        const footerRect = footerElement.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return footerRect.top <= windowHeight;
    }

    window.addEventListener('scroll', checkScrollThreshold);
    window.addEventListener('resize', checkScrollThreshold);

    checkScrollThreshold();

    // **************************************************************
    let mapButton = buttonsMapFilter.querySelector('.button__map');
    let hrefMap, hrefResumed;
    let isFirstClick = true; // Variable para controlar el primer clic

    obtenerHrefMapa().then(function (href) {
        hrefMap = href.hrefMap;
        hrefResumed = href.hrefResumed;

        function toggleButtonText() {
            let isMapVisible = mapButton.getAttribute('href') === hrefMap;
            mapButton.querySelector('p').innerHTML = isMapVisible ? 'Ver en mapa' : 'Ver en lista';
            mapButton.querySelector('.glyphicon').className = isMapVisible ? 'glyphicon glyphicon-view-map' : 'glyphicon glyphicon-view-resumed';
        }

        mapButton.href = hrefMap;
        toggleButtonText();

        mapButton.addEventListener('click', function (event) {
            event.preventDefault();
            toggleButtonText();

            let isMapVisible = mapButton.getAttribute('href') === hrefMap;
            mapButton.setAttribute('href', isMapVisible ? hrefResumed : hrefMap);
            window.location.href = mapButton.getAttribute('href');
        });
    }).catch(function (error) {
        console.error('Error al obtener los href:', error);
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
    detectarCambios();
    observarSidebarFilters();
    cambiarTextoMapaYBoton();
    cambiarTextoFiltro();
    cambiarTextoRegimen();
    agregarNewsButtons();
});