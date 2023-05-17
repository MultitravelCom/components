function aplicarClaseRecomendada() {
    const items = document.querySelectorAll('.results-list__item');
  
    items.forEach(item => {
      const tieneDeals = item.querySelector('.deals') !== null;
  
      if (tieneDeals) {
        item.classList.add('mi-clase-recomendada');
      }
    });
  }
  

  aplicarClaseRecomendada();
  
  