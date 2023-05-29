const CopyTaxFlight = () => {
    return (
        <div className="main_container_copyTaxFlight">
            <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
            <p className="main__warningPric__icon__p">En caso de vuelos internacionales, los precios siempre incluyen impuesto país y percepciones.</p>
        </div>
    );
};

// Función para manejar el evento click
function handleClick() {
    // Buscar el div padre con la clase js-results-list-selection-placeholder
    const parentDiv = document.querySelector('.js-results-list-selection-placeholder');

    if (parentDiv) {
        // Buscar el div con la clase flight-selection__breakdown dentro del div padre
        const flightSelectionBreakdownDiv = parentDiv.querySelector('.flight-selection__breakdown');

        // Verificar si el componente ya ha sido agregado previamente
        const existingCopyTaxFlight = flightSelectionBreakdownDiv.querySelector('.copy-tax-flight-container');

        if (!existingCopyTaxFlight) {
            // Crear un contenedor para el componente CopyTaxFlight
            const containerCopyTaxFlight = document.createElement('div');
            containerCopyTaxFlight.classList.add('copy-tax-flight-container');

            // Agregar el contenedor al div flight-selection__breakdown
            flightSelectionBreakdownDiv.appendChild(containerCopyTaxFlight);

            // Renderizar el componente CopyTaxFlight dentro del contenedor
            ReactDOM.render(<CopyTaxFlight />, containerCopyTaxFlight);
        }
    }
}

// Agregar el listener al evento click
document.addEventListener('click', handleClick);