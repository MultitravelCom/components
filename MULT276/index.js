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


function observarComponenteEnDOM() {
  const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      const addedNodes = mutation.addedNodes;
      for (let node of addedNodes) {
        if (node.classList && node.classList.contains('js-results-list-selection-placeholder')) {
          console.log('El componente está presente en el DOM');
          renderCopyTaxFlight();
          return; // Termina el bucle si se encuentra el componente
        }
      }
    }
  });

  const observerConfig = {
    childList: true,
    subtree: true,
  };

  const targetNode = document.documentElement; // Puedes ajustar el selector según tu estructura

  observer.observe(targetNode, observerConfig);
}

document.addEventListener('DOMContentLoaded', () => {
  observarComponenteEnDOM();
});