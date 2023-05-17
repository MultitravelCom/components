function aplicarClaseRecomendada() {
    const items = document.querySelectorAll('.results-list__item');
  
    items.forEach(item => {
      const tieneDeals = item.querySelector('.info-card .info-card__content .deals') !== null;
  
      if (tieneDeals) {
        item.classList.add('mi-clase-recomendada');
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    aplicarClaseRecomendada();
  });
  
