
const CopyTaxFlight = () => {
    return (
      <div className="main_container_copyTaxFlight">
        <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
        <p className="main__warningPric__icon__p">En caso de vuelos internacionales, los precios siempre incluyen impuesto país y percepciones.</p>
      </div>
    );
  };
  
  const YourComponent = () => {
    const [isSelectorPresent, setIsSelectorPresent] = useState(false);
  
    useEffect(() => {
      // Lógica para detectar la presencia del div con los selectores
      const selectorDiv = document.querySelector('.js-results-list-selection-placeholder');
      if (selectorDiv) {
        setIsSelectorPresent(true);
        console.log('Selector encontrado');
      } else {
        console.log('Selector no encontrado');
      }
    }, []);
  
    useEffect(() => {
      // Renderizar el componente CopyTaxFlight en el selector deseado
      if (isSelectorPresent) {
        const portalContainer = document.querySelector('.flight-selection__breakdown');
        ReactDOM.render(<CopyTaxFlight />, portalContainer);
        console.log('Componente CopyTaxFlight renderizado en el portal');
      }
    }, [isSelectorPresent]);
  
    return (
      <div>
        {/* Resto del contenido de tu componente */}
        <div className="js-results-list-selection-placeholder"></div>
      </div>
    );
  };