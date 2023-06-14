// Función para cambiar el texto del mapa
function cambiarTextoMapa(span) {
    if (span.innerText === 'Abrir mapa') {
      span.innerText = 'Ver en mapa';
    }
  }
  
  // Función para iterar y cambiar el texto del botón en .results__sidebar
  function cambiarTextoBoton() {
    var sidebarElements = document.querySelectorAll('.results__sidebar .sidebar-map');
    sidebarElements.forEach(function(element) {
      var span = element.querySelector('span.btn.btn-secondary');
      cambiarTextoMapa(span);
    });
  }
  
  // Configuración para MutationSummary
  var observerConfig = {
    callback: function(summaries) {
      summaries[0].added.forEach(function(element) {
        if (element.classList.contains('sidebar-map')) {
          var span = element.querySelector('span.btn.btn-secondary');
          cambiarTextoMapa(span);
        }
      });
    },
    queries: [{
      element: '.results__sidebar .sidebar-map',
      elementAttributes: 'class'
    }]
  };
  
  // Crear una nueva instancia de MutationSummary
  var observer = new MutationSummary(observerConfig);
  
  // Llamar a la función inicial para cambiar el texto del botón
  cambiarTextoBoton();
  