function wait(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

async function removeImageLinks() {
    let images = document.querySelectorAll('.info-card__image-holder img');
    images.forEach(function (image) {
        image.addEventListener('click', function (event) {
            event.preventDefault();
        });
    });
}

async function cargarEstilosYModales() {
    const link = document.querySelector('link[href="https://multitravelcom.github.io/components/MULT245/style.css"]');
    const scriptReact = document.querySelector('script[src="https://multitravelcom.github.io/components/MULT245/modalShare.js"]');

    // Forzar la recarga del archivo CSS
    if (link) {
        link.href = '';
        await wait(1000);
        link.href = 'https://multitravelcom.github.io/components/MULT245/style.css';
    }

    // Forzar la recarga del script de los modales de React
    if (scriptReact) {
        scriptReact.src = '';
        await wait(100);
        scriptReact.src = 'https://multitravelcom.github.io/components/MULT245/modalShare.js';
    }
}

async function aplicarClaseRecomendada(resultsListPage) {
    const items = resultsListPage.querySelectorAll('.results-list__item');

    items.forEach(item => {
        const tieneDeals = item.querySelector('.deals') !== null;
        const hotelResult = item.querySelector('.hotel-result');

        if (tieneDeals && hotelResult) {
            hotelResult.classList.add('alojamiento-recomendado');

            const bestPriceElements = item.querySelectorAll('.info-card__price');
            bestPriceElements.forEach(element => {
                element.classList.add('info-card__price__deals');
            });

            const toggleButtons = item.querySelectorAll('.info-card__options-toggle');
            toggleButtons.forEach(button => {
                button.classList.add('right-14px');
            });
        }
    });
}

async function agreeStarIcon(resultsListPage) {
    const items = resultsListPage.querySelectorAll('.results-list__item');

    items.forEach(item => {
        const infoCardCategory = item.querySelector('.info-card__category');

        const newSpaninfoCardCategory = document.createElement('span');
        newSpaninfoCardCategory.className = 'glyphicon glyphicon-star iconStar';

        infoCardCategory.insertBefore(newSpaninfoCardCategory, infoCardCategory.firstChild);
    });
}

async function changeCopyMap(resultsListPage) {
    let items = resultsListPage.querySelectorAll('.results-list__item');

    items.forEach(item => {
        let mapLink = item.querySelector('.map-link');
        let locationIcon = mapLink.querySelector('.info-card__location-icon');

        mapLink.lastChild.textContent = 'Ver Mapa';
        mapLink.style.display = 'block';
    });
}

async function applyDisplayNoneToAllButLastButton(resultsListPage) {
    const actionsContainer = resultsListPage.querySelector('.info-card__actions');

    if (!actionsContainer) {
        await wait(2000);
        await applyDisplayNoneToAllButLastButton(resultsListPage);
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
        buttonsVerDetalle[i].textContent = 'Comprar';
    }
}

async function changeCopyButton(resultsListPage) {
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

function aplicarEstiloSegunLongitud() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        const verificarElementos = () => {
            const resultsListPage = document.querySelector('.results-list__page');
            const items = document.querySelectorAll('.results-list__item');

            if (resultsListPage && items.length >= 2) {
                items.forEach(function (item) {
                    const elemento = item.querySelector('.info-card__price');
                    if (elemento) {
                        const longitud = elemento.textContent.trim();
                        const numerosDecimales = longitud.match(/\d+/g).join('');
                        const cantidadPuntos = longitud.split('.').length - 1;

                        if (cantidadPuntos >= 2) {
                            elemento.style.left = '14px';
                        }
                    }
                });
            } else {
                // Si los elementos no están presentes, llamar a la función recursivamente después de un breve tiempo
                setTimeout(verificarElementos, 100);
            }
        };

        verificarElementos(); // Llamar a la función por primera vez
    }
}

function removeClassResultInHotelResults() {
    // Verificar si el ancho de la ventana es menor o igual a 768 (ajusta este valor según tus necesidades)
    const isMobile = window.innerWidth <= 768;

    // Si no estamos en la versión móvil, salimos de la función y no hacemos nada
    if (!isMobile) {
        return;
    }

    const resultsPage = document.querySelector('.results-list__page');
    if (!resultsPage) {
        return;
    }

    const items = resultsPage.querySelectorAll('.results-list__item');
    if (items.length === 0) {
        return;
    }

    items.forEach(item => {
        const hotelResult = item.querySelector('.result.hotel-result');
        if (hotelResult) {
            hotelResult.classList.remove('result');
        }
    });
}

function aplicarModificaciones(resultsListPage) {
    removeImageLinks(resultsListPage);
    aplicarClaseRecomendada(resultsListPage);
    agreeStarIcon(resultsListPage);
    changeCopyMap(resultsListPage);
    applyDisplayNoneToAllButLastButton(resultsListPage);
    changeCopyButton(resultsListPage);
    aplicarEstiloSegunLongitud();
    removeClassResultInHotelResults();
}

function observarCambiosCheckAndRender() {
    const observerConfig = {
        rootNode: document.documentElement,
        callback: () => {
            requestAnimationFrame(() => {
                const resultsListPages = document.querySelectorAll('.results-list__page');
                resultsListPages.forEach(resultsListPage => {
                    aplicarModificaciones(resultsListPage);
                });
            });
        },
        queries: [{ element: '.results-list__page' }],
    };

    const observer = new MutationSummary(observerConfig);

    const resultsListPages = document.querySelectorAll('.results-list__page');
    resultsListPages.forEach(resultsListPage => {
        aplicarModificaciones(resultsListPage);
    });
}

document.addEventListener('DOMContentLoaded', async function () {
    removeClassResultInHotelResults();
    observarCambiosCheckAndRender();
    cargarEstilosYModales();
    aplicarEstiloSegunLongitud();
    aplicarClaseRecomendada();
});