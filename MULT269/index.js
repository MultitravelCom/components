function cambiarTextoMapaYBoton() {
    let sidebarElements = document.querySelectorAll('.js-sidebar-map-placeholder .sidebar-map');
    sidebarElements.forEach(function (element) {
        var span = element.querySelector('span.btn.btn-secondary');
        if (span.innerText === 'Abrir mapa') {
            span.innerText = 'Ver en mapa';
        }
    });
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
    let filtersInner = document.querySelector('.sidebar-filters__inner');
    let placeholderDiv = filtersInner.querySelector('.results-sidebar__placeholder.js-filter-by-boards-placeholder');

    if (placeholderDiv) {
        let filterHeader = placeholderDiv.querySelector('.filter__header');

        if (filterHeader) {
            filterHeader.innerText = 'Alimentación';
        }
    }
}

function observarSidebarFilters() {
    const sidebarFilters = document.querySelector('.results__sidebar');
  
    // Crear una instancia de MutationObserver
    const observer = new MutationObserver(function(mutationsList) {
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

document.addEventListener('DOMContentLoaded', async function () {
    observarSidebarFilters();
    cambiarTextoMapaYBoton();
    cambiarTextoFiltro();
    cambiarTextoRegimen();
});