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
    // Verificar si el componente ya ha sido agregado previamente
    const existingCopyTaxFlight = document.querySelector('.copy-tax-flight-container');

    if (!existingCopyTaxFlight) {
        // Crear un contenedor para el componente CopyTaxFlight
        const containerCopyTaxFlight = document.createElement('div');
        containerCopyTaxFlight.classList.add('copy-tax-flight-container');

        // Agregar el contenedor al cuerpo del documento
        document.body.appendChild(containerCopyTaxFlight);

        // Renderizar el componente CopyTaxFlight dentro del contenedor
        ReactDOM.render(<CopyTaxFlight />, containerCopyTaxFlight);
    }
}

// Agregar el listener al evento click
document.addEventListener('click', handleClick);