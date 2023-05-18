async function aplicarClaseRecomendada() {
    const resultsListPage = document.querySelector('.results-list__page');

    if (!resultsListPage) {
        // No se encontró el elemento, espera un breve período y vuelve a intentar
        await new Promise(resolve => setTimeout(resolve, 1000));
        await aplicarClaseRecomendada();
        return; // Salir de la función para evitar ejecutar el resto del código
    }

    const items = resultsListPage.querySelectorAll('.results-list__item');

    items.forEach(item => {
        const tieneDeals = item.querySelector('.deals') !== null;
        const hotelResult = item.querySelector('.result.hotel-result');

        if (tieneDeals && hotelResult) {
            hotelResult.classList.add('alojamiento-recomendado');
            console.log(tieneDeals);
        }
    });
}

async function changeCopyMap() {
    const resultsListPage = document.querySelector('.results-list__page');

    if (!resultsListPage) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        await changeCopyMap();
        return;
    }

    const items = resultsListPage.querySelectorAll('.results-list__item');

    items.forEach(item => {
        const mapLink = item.querySelector('.map-link');
        mapLink.textContent = 'Ver Mapa';
        mapLink.style.display = 'block'
    });
}

async function applyDisplayNoneToAllButLastButton() {
    const actionsContainer = document.querySelector('.info-card__actions');
    const buttonsAndLinks = actionsContainer.querySelectorAll('button, a');
  
    for (let i = 0; i < buttonsAndLinks.length; i++) {
      if (i !== buttonsAndLinks.length - 1) {
        buttonsAndLinks[i].style.display = 'none';
      }
    }
  
    const lastButtonContainer = buttonsAndLinks[buttonsAndLinks.length - 1].parentNode;
    lastButtonContainer.style.display = 'inline-block';
  }


document.addEventListener('DOMContentLoaded', async function () {
    await aplicarClaseRecomendada();
    await changeCopyMap();
    await applyDisplayNoneToAllButLastButton();
});
