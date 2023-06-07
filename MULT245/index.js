function wait(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

async function removeImageLinks() {
    let resultsListPage = document.querySelector('.results-list__page');

    while (!resultsListPage) {
        await wait(1000);
        resultsListPage = document.querySelector('.results-list__page');
    }

    const items = resultsListPage.querySelectorAll('.results-list__item');

    items.forEach(item => {
        const image = item.querySelector('.info-card__image--action');

        if (image) {
            image.removeEventListener('click', function (event) {
                event.preventDefault();
            });
        }
    });
}

async function cargarEstilosYModales() {
    const link = document.querySelector('link[href="https://multitravelcom.github.io/components/MULT245/style.css"]');
    const scriptReact = document.querySelector('script[src="https://multitravelcom.github.io/components/MULT245/modalShare.js"]');

    // Forzar la recarga del archivo CSS
    if (link) {
        link.href = '';
        await wait(100);
        link.href = 'https://multitravelcom.github.io/components/MULT245/style.css';
    }

    // Forzar la recarga del script de los modales de React
    if (scriptReact) {
        scriptReact.src = '';
        await wait(100);
        scriptReact.src = 'https://multitravelcom.github.io/components/MULT245/modalShare.js';
    }
}
async function aplicarClaseRecomendada() {
    let resultsListPage = document.querySelector('.results-list__page');

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
                element.classList.add('info-card__price__deals');
            });

            const toggleButtons = item.querySelectorAll('.info-card__options-toggle');
            toggleButtons.forEach(button => {
                button.classList.add('right-14px');
                button.setAttribute('target', '_blank');
            });
        }
    });
}

async function agreeStarIcon() {
    let resultsListPage = document.querySelector('.results-list__page');

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
    let resultsListPage = document.querySelector('.results-list__page');

    while (!resultsListPage) {
        await wait(1000);
        resultsListPage = document.querySelector('.results-list__page');
    }

    let items = resultsListPage.querySelectorAll('.results-list__item');

    items.forEach(item => {
        let mapLink = item.querySelector('.map-link');
        let locationIcon = mapLink.querySelector('.info-card__location-icon');

        mapLink.lastChild.textContent = 'Ver Mapa';
        mapLink.style.display = 'block';
    });
}

async function applyDisplayNoneToAllButLastButton() {
    const actionsContainer = document.querySelector('.info-card__actions');

    if (!actionsContainer) {
        // Esperar un tiempo y volver a llamar a la función
        await wait(1000);
        await applyDisplayNoneToAllButLastButton();
        return;
    }
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
    let resultsListPage = document.querySelector('.results-list__page');

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

function aplicarModificaciones() {
    aplicarClaseRecomendada();
    changeCopyMap();
    applyDisplayNoneToAllButLastButton();
    agreeStarIcon();
    changeCopyButton();
    removeImageLinks();
}

function observarCambiosResultados() {
    const checkResults = () => {
        let resultsListPage = document.querySelector('.results-list__page');

        if (resultsListPage instanceof Node) {

            const observerListPage = new MutationSummary({
                queries: [{ element: '.results-list__page' }],
                callback: mutations => {
                    aplicarModificaciones();
                    cargarEstilosYModales();
                }
            });

            observerListPage.observe();

        } else {
            setTimeout(checkResults, 1000);
        }
    };

    checkResults();
}

document.addEventListener('DOMContentLoaded', async function () {
    aplicarModificaciones();
    observarCambiosResultados();
});