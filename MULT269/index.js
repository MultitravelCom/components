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
      } else if (header.innerText.trim() === 'Régimen') {
        header.innerText = 'Alimentación';
      }
    });
  }
  
  cambiarTextoFiltro();
  


document.addEventListener('DOMContentLoaded', async function () {
    cambiarTextoMapaYBoton();
    cambiarTextoFiltro()
});