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


function agregarDivCuandoAparecePlaceholder() {
  // Definir los selectores objetivo
  const selectorResultado = 'results-list__item';
  const selectorPlaceholder = 'js-results-list-selection-placeholder';

  // Crear una instancia de MutationSummary
  const observer = new MutationSummary({
    callback: function(summaries) {
      // Verificar si hay elementos con el selector de resultado presentes en las mutaciones
      const resultadosAgregados = summaries[0].added.filter(function(element) {
        return element.matches(selectorResultado);
      });

      // Iterar sobre los resultados agregados
      resultadosAgregados.forEach(function(resultado) {
        // Buscar el placeholder dentro del resultado
        const placeholder = resultado.querySelector(selectorPlaceholder);
        if (placeholder) {
          // El placeholder está presente, realizar la acción deseada
          const divNuevo = document.createElement('div');
          // Aquí puedes agregar lógica adicional para configurar el div

          resultado.appendChild(divNuevo);

          // Mostrar un mensaje en la consola para verificar la detección
          console.log('Placeholder detectado. Se agregó el div.');
        }
      });
    },
    queries: [{ element: selectorResultado }],
    rootNode: document.body, // Especificar el nodo raíz a observar (puede ser diferente según tus necesidades)
  });

  // Detener el seguimiento de mutaciones cuando se destruya el componente o ya no se necesite
  return function stopObserving() {
    observer.disconnect();
  };
}

// Llamar a la función para iniciar el seguimiento de mutaciones
const stopObserving = agregarDivCuandoAparecePlaceholder();

// Para detener la observación, llama a la función stopObserving()
// stopObserving();

