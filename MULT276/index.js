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
    flightSelectionElement.appendChild(copyTaxFlightContainer);

    ReactDOM.render(<CopyTaxFlight />, copyTaxFlightContainer);
  }
}


function agregarComponenteCuandoApareceSelector() {
  // Definir el selector objetivo
  const selectorObjetivo = 'flight-selection';

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

          // Mostrar un mensaje en la consola para verificar la detección
          console.log('Selector objetivo detectado. Se agregó el componente.');

          // Detener el seguimiento de mutaciones
          observer.disconnect();
        }
      });
    },
    queries: [{ element: selectorObjetivo }]
  });
}

// Llamar a la función para iniciar el seguimiento de mutaciones
agregarComponenteCuandoApareceSelector();
