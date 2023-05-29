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
  
  function detectarAparicionClaseEnDOM() {
    const targetElement = document.querySelector('.js-results-list-selection-placeholder');
    if (targetElement) {
      console.log('La clase js-results-list-selection-placeholder ha aparecido en el DOM');
      renderCopyTaxFlight();
    } else {
      setTimeout(detectarAparicionClaseEnDOM, 100); // Intentar nuevamente después de un breve intervalo
    }
  }
  
  function renderCopyTaxFlight() {
    const breakdownElement = document.querySelector('.flight-selection .flight-selection__breakdown');
    if (breakdownElement) {
      const copyTaxFlightContainer = document.createElement('div');
      copyTaxFlightContainer.classList.add('copy-tax-flight-container');
      breakdownElement.appendChild(copyTaxFlightContainer);
  
      ReactDOM.render(<CopyTaxFlight />, copyTaxFlightContainer);
    }
  }
  
  // Llamada a la función para iniciar la detección
  detectarAparicionClaseEnDOM();