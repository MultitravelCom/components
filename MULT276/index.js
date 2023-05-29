function detectarAparicionClaseEnDOM() {
    const targetElement = document.querySelector('.js-results-list-selection-placeholder');
    const customObserver = new MutationObserver(function(mutationsList) {
      for (let mutation of mutationsList) {
        if (mutation.target.classList.contains('js-results-list-selection-placeholder')) {
          console.log('La clase js-results-list-selection-placeholder ha aparecido en el DOM');
          // Realiza cualquier acción adicional que desees realizar aquí
        }
      }
    });
  
    const observerOptions = {
      attributes: true,
      attributeFilter: ['class'],
      subtree: true,
    };
  
    customObserver.observe(targetElement, observerOptions);
  }
  
  // Llamada a la función para iniciar la detección
  detectarAparicionClaseEnDOM();


// const CopyTaxFlight = () => {
//     return (
//         <div className="main_container_copyTaxFlight">
//             <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
//             <p className="main__warningPric__icon__p">En caso de vuelos internacionales, los precios siempre incluyen impuesto país y percepciones.</p>
//         </div>
//     );
// };
