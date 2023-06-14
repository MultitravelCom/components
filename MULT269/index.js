// Función para cambiar el texto del mapa
function cambiarTextoMapa(span) {
    if (span.innerText === 'Abrir mapa') {
      span.innerText = 'Ver en mapa';
    }
  }
  
  // Función para iterar y cambiar el texto del botón en .results__sidebar
  function cambiarTextoBoton() {
    let sidebarElements = document.querySelectorAll('.results__sidebar .sidebar-map');
    sidebarElements.forEach(function(element) {
      var span = element.querySelector('span.btn.btn-secondary');
      cambiarTextoMapa(span);
    });
  }
  
  // Configuración para MutationSummary
  let observerConfig = {
    callback: function(summaries) {
      cambiarTextoBoton();
    },
    queries: [{
      element: '.results__sidebar',
      elementAttributes: 'class'
    }]
  };
  
  // Crear una nueva instancia de MutationSummary
  let observer = new MutationSummary(observerConfig);
  
  // Llamar a la función inicial para cambiar el texto del botón
  cambiarTextoBoton();
  