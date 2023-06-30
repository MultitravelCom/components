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

function updateSegmentNode() {
  const equipajeNode = segmentNode.querySelector('.flight-segments__segment-info > div:last-child');
  if (equipajeNode && equipajeNode.textContent.trim() === 'Equipaje: Incluído') {
    equipajeNode.textContent = 'Equipaje incluido para despachar';
  }
}

function renderCopyTaxFlight() {
  const flightSelectionElement = document.querySelector('.flight-selection');
  if (flightSelectionElement) {
    const copyTaxFlightContainer = document.createElement('div');
    copyTaxFlightContainer.classList.add('copy-tax-flight-container');

    const bookingElement = flightSelectionElement.querySelector('.flight-selection__booking');
    const parentElement = bookingElement.parentNode;
    parentElement.insertBefore(copyTaxFlightContainer, bookingElement);

    ReactDOM.render(<CopyTaxFlight />, copyTaxFlightContainer);
  }
}

function moveDiv() {
  let bookingDiv = document.querySelector('.flight-selection__booking');
  let copyContainer = document.querySelector('.copy-tax-flight-container');

  copyContainer.appendChild(bookingDiv);
}

function agregarComponenteCuandoApareceFlightSelection() {
  const selectorObjetivo = '.flight-selection';

  const observer = new MutationSummary({
    callback: function (summaries) {
      summaries[0].added.forEach(function (element) {
        if (element.matches(selectorObjetivo)) {
          const componente = document.createElement('div');

          element.appendChild(componente);

          
          const mostrarComponente = element.classList.contains('flight-selection');
          componente.style.display = mostrarComponente ? 'block' : 'none';

          renderCopyTaxFlight();
          moveDiv()
          updateSegmentNode()
        }
      });
    },
    queries: [{ element: selectorObjetivo }],
    rootNode: document.body, // Especificar el nodo raíz a observar (puede ser diferente según tus necesidades)
  });

  return function stopObserving() {
    observer.disconnect();
  };
}

const stopObserving = agregarComponenteCuandoApareceFlightSelection();
