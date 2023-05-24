function wait(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

async function aplicarClaseRecomendada() {
    const resultsListPage = document.querySelector('.results-list__page');

    if (!resultsListPage) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        await aplicarClaseRecomendada();
        return;
    }

    const items = resultsListPage.querySelectorAll('.results-list__item');

    items.forEach(item => {
        const tieneDeals = item.querySelector('.deals') !== null;
        const hotelResult = item.querySelector('.result.hotel-result');

        if (tieneDeals && hotelResult) {
            hotelResult.classList.add('alojamiento-recomendado');
            const bestPriceElements = item.querySelectorAll('.info-card__price');
            bestPriceElements.forEach(element => {
                element.classList.add("info-card__price__deals");
            });
        }
    });
}

async function agreeStarIcon() {
    const resultsListPage = document.querySelector('.results-list__page');

    while (!resultsListPage) {
        await wait(1000);
        resultsListPage = document.querySelector('.results-list__page');
    }

    const items = resultsListPage.querySelectorAll('.results-list__item');

    items.forEach(item => {
        const infoCardCategory = item.querySelector('.info-card__category');

        const newSpaninfoCardCategory = document.createElement('span');
        newSpaninfoCardCategory.className = 'glyphicon glyphicon-star iconStar';

        infoCardCategory.insertBefore(newSpaninfoCardCategory, infoCardCategory.firstChild);
    });
}

async function changeCopyMap() {
    const resultsListPage = document.querySelector('.results-list__page');

    while (!resultsListPage) {
        await wait(1000);
        resultsListPage = document.querySelector('.results-list__page');
    }

    const items = resultsListPage.querySelectorAll('.results-list__item');

    items.forEach(item => {
        const mapLink = item.querySelector('.map-link');
        const locationIcon = mapLink.querySelector('.info-card__location-icon');

        mapLink.lastChild.textContent = 'Ver Mapa';
        mapLink.style.display = 'block';
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

    const buttonsVerDetalle = document.querySelectorAll('.info-card__options-toggle');

    for (let i = 0; i < buttonsVerDetalle.length; i++) {
        buttonsVerDetalle[i].textContent = 'Ver detalle';
    }
}
async function changeCopyButton() {
    const resultsListPage = document.querySelector('.results-list__page');

    while (!resultsListPage) {
        await wait(1000);
        resultsListPage = document.querySelector('.results-list__page');
    }
    const itemsButtonComprar = resultsListPage.querySelectorAll('.results-list__item');

    itemsButtonComprar.forEach(item => {
        const buttonElement = item.querySelector('.info-card__options-toggle');
        buttonElement.textContent = 'Comprar';
        buttonElement.style.display = 'block';
    });

    const checkResultsListPage = () => {

        const resultsPage = document.querySelector('.results-list__page');

        if (resultsPage) {
            const resultsListPage = resultsPage.querySelectorAll('.results-list__item');

            resultsListPage.forEach(item => {
                const selectors = item.querySelectorAll('.info-card__image-holder');

                selectors.forEach(selector => {
                    selector.classList.remove('js-open-gallery');
                });
            });
        } else {
            setTimeout(checkResultsListPage, 2000);
        }
    };

    checkResultsListPage();
};



function observeResultsListPage() {
    const resultsListPage = document.querySelector('.results-list__page');
  
    if (!resultsListPage) {
      setTimeout(observeResultsListPage, 1000);
      return;
    }
  
    const observer = new MutationObserver(function () {
      // Ejecutar las funciones aquí
      aplicarClaseRecomendada();
      changeCopyMap();
      applyDisplayNoneToAllButLastButton();
      agreeStarIcon();
      changeCopyButton();
    });
  
    observer.observe(resultsListPage, { childList: true, subtree: true });
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    observeResultsListPage();
  });