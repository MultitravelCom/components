const CopyTaxFlight = () => {
    return (
      <div className="main_container_copyTaxFlight">
        <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
        <p className="main__warningPric__icon__p">En caso de vuelos internacionales, los precios siempre incluyen impuesto país y percepciones.</p>
      </div>
    );
  };
  
  const YourComponent = () => {
    useEffect(() => {
      const observer = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
          if (mutation.target.classList.contains('flight-selection__breakdown')) {
            const portalContainer = mutation.target;
            ReactDOM.render(<CopyTaxFlight />, portalContainer);
            console.log('Componente CopyTaxFlight renderizado en el portal');
          }
        }
      });
  
      const selectorDiv = document.querySelector('.flight-selection__breakdown');
      if (selectorDiv) {
        observer.observe(selectorDiv, { childList: true });
        console.log('Observer iniciado');
      } else {
        console.log('Selector no encontrado');
      }
  
      return () => {
        if (selectorDiv) {
          observer.disconnect();
          console.log('Observer detenido');
        }
      };
    }, []);
  
    return null;
  };