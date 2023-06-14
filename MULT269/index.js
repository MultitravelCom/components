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
    let placeholder = document.querySelector('.results-sidebar__placeholder.js-filter-by-boards-placeholder');
    if (placeholder) {
      let filterHeader = placeholder.querySelector('.filter__header');
      if (filterHeader) {
        filterHeader.innerText = 'Alimentación';
      }
    }
}



document.addEventListener('DOMContentLoaded', async function () {
    cambiarTextoMapaYBoton();
    cambiarTextoFiltro();
    cambiarTextoRegimen();
});