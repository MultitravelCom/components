const CopyTaxFlight = () => {
    return (
        <div className="main_container_copyTaxFlight">
            <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
            <p className="main__warningPric__icon__p">En caso de vuelos internacionales, los precios siempre incluyen impuesto país y percepciones.</p>
        </div>
    );
};


const parentDiv = document.querySelector('.js-results-list-selection-placeholder');

// Buscar el div con la clase flight-selection__breakdown dentro del div padre
const flightSelectionBreakdownDiv = parentDiv.querySelector('.flight-selection__breakdown');

// Crear un contenedor para el componente CopyTaxFlight
const containerCopyTaxFlight = document.createElement('div');
containerCopyTaxFlight.classList.add('copy-tax-flight-container');

// Agregar el contenedor al div flight-selection__breakdown
flightSelectionBreakdownDiv.appendChild(containerCopyTaxFlight);

// Renderizar el componente CopyTaxFlight dentro del contenedor
ReactDOM.render(<CopyTaxFlight />, containerCopyTaxFlight);