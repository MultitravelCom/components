// Función para cambiar el texto del mapa
function cambiarTextoMapa(span) {
    if (span.innerText === 'Abrir el mapa') {
      span.innerText = 'Ver en mapa';
    }
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
  
  // Llamar a la función inicial para cambiar el texto del mapa
  var span = document.querySelector('.results__sidebar .sidebar-map span.btn.btn-secondary');
  cambiarTextoMapa(span);
  