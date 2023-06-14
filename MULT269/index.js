// Función para cambiar el texto del mapa y del botón
function cambiarTextoMapaYBoton() {
    var sidebarElements = document.querySelectorAll('.results__sidebar .sidebar-map, .js-sidebar-map-placeholder .sidebar-map');
    sidebarElements.forEach(function(element) {
      var span = element.querySelector('span.btn.btn-secondary');
      if (span.innerText === 'Abrir mapa') {
        span.innerText = 'Ver en mapa';
      }
    });
  }
  
  // Función para esperar a que se cargue la página y buscar el selector
  function esperarYBuscarSelector() {
    var interval = setInterval(function() {
      var sidebarElements = document.querySelectorAll('.results__sidebar .sidebar-map, .js-sidebar-map-placeholder .sidebar-map');
      if (sidebarElements.length > 0) {
        clearInterval(interval);
        cambiarTextoMapaYBoton();
      }
    }, 1000);
  }
  
  // Esperar a que se cargue completamente la página
  document.addEventListener('DOMContentLoaded', esperarYBuscarSelector);
  