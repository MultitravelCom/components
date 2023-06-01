const CopyTaxFlight = () => {
  return (
    <div className="main_container_copyTaxFlight">
      <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
      <p className="main__warningPric__icon__p">
        En caso de vuelos internacionales, los precios siempre incluyen impuesto país y percepciones.
      </p>
    </div>
  );
};

function renderCopyTaxFlight() {
  const flightSelectionElement = document.querySelector('.flight-selection');
  if (flightSelectionElement) {
    const copyTaxFlightContainer = document.createElement('div');
    copyTaxFlightContainer.classList.add('copy-tax-flight-container');

    const bookingElement = flightSelectionElement.querySelector('.flight-selection__booking');
    flightSelectionElement.insertBefore(copyTaxFlightContainer, bookingElement);

    ReactDOM.render(<CopyTaxFlight />, copyTaxFlightContainer);
  }
}

function agregarComponenteCuandoApareceFlightSelection() {
  // Definir el selector objetivo
  const selectorObjetivo = '.flight-selection';

  // Crear una instancia de MutationSummary
  const observer = new MutationSummary({
    callback: function(summaries) {
      // Verificar si el selector objetivo está presente en las mutaciones
      summaries[0].added.forEach(function(element) {
        if (element.matches(selectorObjetivo)) {
          // El selector objetivo ha aparecido, realizar la acción deseada
          const componente = document.createElement('div');
          // Aquí puedes agregar lógica adicional para configurar el componente

          element.appendChild(componente);

          // Mostrar u ocultar el componente según la presencia de la clase flight-selection
          const mostrarComponente = element.classList.contains('flight-selection');
          componente.style.display = mostrarComponente ? 'block' : 'none';

          // Invocar la función renderCopyTaxFlight() para renderizar el componente
          renderCopyTaxFlight();

          // Mostrar un mensaje en la consola para verificar la detección
          console.log('Clase flight-selection detectada. Se agregó el componente.');
        }
      });
    },
    queries: [{ element: selectorObjetivo }],
    rootNode: document.body, // Especificar el nodo raíz a observar (puede ser diferente según tus necesidades)
  });

  // Detener el seguimiento de mutaciones cuando se destruya el componente o ya no se necesite
  return function stopObserving() {
    observer.disconnect();
  };
}

// Llamar a la función para iniciar el seguimiento de mutaciones
const stopObserving = agregarComponenteCuandoApareceFlightSelection();
