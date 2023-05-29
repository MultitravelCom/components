const CopyTaxFlight = () => {
    return (
        <div className="main_container_copyTaxFlight">
            <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
            <p className="main__warningPric__icon__p">En caso de vuelos internacionales, los precios siempre incluyen impuesto país y percepciones.</p>
        </div>
    );
};

function detectarAparicionClaseEnDOM() {
  const customObserver = new MutationObserver(function(mutationsList) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        const targetElement = mutation.target;
        if (targetElement.classList.contains('js-results-list-selection-placeholder')) {
          console.log('La clase js-results-list-selection-placeholder ha aparecido en el DOM');
          renderCopyTaxFlight();
        }
      }
    }
  });

  const observerOptions = {
    attributes: true,
    attributeOldValue: true,
    subtree: true,
  };

  customObserver.observe(document.documentElement, observerOptions);
}

function renderCopyTaxFlight() {
  const breakdownElement = document.querySelector('.flight-selection__breakdown');
  if (breakdownElement) {
    const copyTaxFlightContainer = document.createElement('div');
    copyTaxFlightContainer.classList.add('copy-tax-flight-container');
    breakdownElement.appendChild(copyTaxFlightContainer);

    ReactDOM.render(<CopyTaxFlight />, copyTaxFlightContainer);
  }
}

// Llamada a la función para iniciar la detección
detectarAparicionClaseEnDOM();
