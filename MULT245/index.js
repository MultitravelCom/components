function aplicarClaseRecomendada() {
    const resultsListPage = document.querySelector('.results-list__page');
    const items = resultsListPage.querySelectorAll('.results-list__item');

  
    items.forEach(item => {
      const tieneDeals = item.querySelector('.info-card .info-card__content .deals') !== null;
  
      if (tieneDeals) {
        item.classList.add('mi-clase-recomendada');
        console.log(tieneDeals);
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    aplicarClaseRecomendada();
  });
  
