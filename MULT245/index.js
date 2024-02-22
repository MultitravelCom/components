function wait(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
};

// async function removeImageLinks() {
//     let images = document.querySelectorAll('.info-card__image-holder img');
//     images.forEach(function (image) {
//         image.addEventListener('click', function (event) {
//             event.preventDefault();
//         });
//     });
// };

function checkURL() {
    let currentURL = window.location.href;
    let imageWrappers = document.querySelectorAll(".gallery__image-wrapper");

    imageWrappers.forEach(imageWrapper => {
        if (currentURL.includes("/results")) {
            imageWrapper.style.height = "80vh";
        } else {
            imageWrapper.style.height = "inherit";
            imageWrapper.style.width = "inherit";
        }
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
};

async function aplicarClaseRecomendada(resultsListPage) {

    if (!resultsListPage || !resultsListPage.querySelectorAll) {
        console.error('resultsListPage no es válido o no tiene querySelectorAll');
        return;
    }
    const items = resultsListPage.querySelectorAll('.results-list__item');

    if (!items || items.length === 0) {
        console.warn('No se encontraron elementos .results-list__item');
        return;
    }

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
};

async function agreeStarIcon(resultsListPage) {
    const items = resultsListPage.querySelectorAll('.results-list__item');

    items.forEach(item => {
        const infoCardCategory = item.querySelector('.info-card__category');

        const newSpaninfoCardCategory = document.createElement('span');
        newSpaninfoCardCategory.className = 'glyphicon glyphicon-star iconStar';

        infoCardCategory.insertBefore(newSpaninfoCardCategory, infoCardCategory.firstChild);
    });
};

async function changeCopyMap(resultsListPage) {
    let items = resultsListPage.querySelectorAll('.results-list__item');

    items.forEach(item => {
        let mapLink = item.querySelector('.map-link');
        let locationIcon = mapLink.querySelector('.info-card__location-icon');
        mapLink.lastChild.textContent = 'Ver Mapa';
        mapLink.style.display = 'block';

    });
};

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
};

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

    // checkResultsListPage();
};

function aplicarEstiloSegunLongitud() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        const resultsListPage = document.querySelector('.results-list__page');
        const items = resultsListPage.querySelectorAll('.results-list__item');

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
    }
};
function removeClassResultInHotelResults() {

    const isMobile = window.innerWidth <= 768;

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
};

function agregarClassResultInHotelResults() {

    const isMobile = window.innerWidth <= 768;

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
        const startResult = item.querySelector('.info-card__category');
        if (startResult) {
            startResult.classList.add('result');
        }
    });
};

function agregarTagAWithHREF(resultsListPage) {

    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
        return;
    }
    const items = resultsListPage.querySelectorAll('.hotel-result');
    if (items.length === 0) {
        return;
    }

    items.forEach(item => {
        const anchorElement = document.createElement("a");
        anchorElement.setAttribute("href", "javascript:void(0)");
        anchorElement.classList.add("js-result-detail-action");
        anchorElement.addEventListener("click", function (e) {
            //e.preventDefault(); // Prevent the default link behavior (scrolling to the top)
            console.log('Link clicked');
            // Your custom handling code here
        });

        // Insert the anchor element at the beginning (top) of the target element
        item.insertBefore(anchorElement, item.firstChild);
    });
};


function replaceImageForUid(resultsListPage, uid, imageUrl) {
    const uidList = [
        { uid: 'GHU@JP310739', imageUrl: 'https://strapi-s3-images-content.s3.amazonaws.com/JP_310739_image.png' },
        { uid: 'GHU@JP417661', imageUrl: 'https://strapi-s3-images-content.s3.amazonaws.com/JP_417661_image.png' },
        { uid: 'GHU@JP155487', imageUrl: 'https://strapi-s3-images-content.s3.amazonaws.com/JP_155487_image.png' },
        { uid: 'GHU@JP06179G', imageUrl: 'https://strapi-s3-images-content.s3.amazonaws.com/JP_06179G_image.png' },
        { uid: 'GHU@JP037034', imageUrl: 'https://strapi-s3-images-content.s3.amazonaws.com/JP_037034_7d8402a8e4.png' },
        { uid: 'GHU@JP157542', imageUrl: 'https://strapi-s3-images-content.s3.amazonaws.com/JP_157542_image.png' },
        { uid: 'GHU@JP984081', imageUrl: 'https://strapi-s3-images-content.s3.amazonaws.com/JP_984081_image.png' },
        { uid: 'GHU@JP789331', imageUrl: 'https://strapi-s3-images-content.s3.amazonaws.com/JP_789331_image.png' },
        { uid: 'GHU@JP151442', imageUrl: 'https://strapi-s3-images-content.s3.amazonaws.com/JP_151442_image.png' },
    ];
    const itemWithDataUid = resultsListPage.querySelector(`.results-list__item [data-uid="${uid}"]`);

    if (itemWithDataUid) {
        const imageHolder = itemWithDataUid.querySelector('.info-card__image-holder');

        if (imageHolder) {
            const pictureElement = imageHolder.querySelector('picture');

            if (pictureElement) {
                const imgElement = pictureElement.querySelector('img');

                if (imgElement) {
                    imgElement.src = imageUrl;
                    console.log(`Enlace de imagen reemplazado para data-uid ${uid}. Nueva URL: ${imageUrl}`);
                } else {
                    console.log(`No se encontró una etiqueta img para reemplazar en data-uid ${uid}.`);
                }
            } else {
                console.log(`No se encontró una etiqueta picture para reemplazar en data-uid ${uid}.`);
            }
        } else {
            console.log(`No se encontró el contenedor de imagen para reemplazar en data-uid ${uid}.`);
        }
    } else {
        console.log(`Elemento con data-uid ${uid} no encontrado en ningún elemento con la clase results-list__item.`);
    }
}

function aplicarModificaciones(resultsListPage) {
    aplicarClaseRecomendada(resultsListPage);
    // agreeStarIcon(resultsListPage);
    changeCopyMap(resultsListPage);
    applyDisplayNoneToAllButLastButton(resultsListPage);
    changeCopyButton(resultsListPage);
    aplicarEstiloSegunLongitud();
    agregarTagAWithHREF(resultsListPage);
    checkURL();
    replaceImageForUid(resultsListPage, uid, imageUrl);
};

function observarCambiosCheckAndRender() {
    const observerConfig = {
        rootNode: document.documentElement,
        callback: () => {
            requestAnimationFrame(() => {
                const resultsListPages = document.querySelectorAll('.results-list__page');
                resultsListPages.forEach(resultsListPage => {
                    aplicarModificaciones(resultsListPage);
                    replaceImageForUid(resultsListPage, uid, imageUrl);
                });
            });
        },
        queries: [{ element: '.results-list__page' }],
    };

    const observer = new MutationSummary(observerConfig);

    const resultsListPages = document.querySelectorAll('.results-list__page');
    resultsListPages.forEach(resultsListPage => {
        aplicarModificaciones(resultsListPage);
        replaceImageForUid(resultsListPage, uid, imageUrl);
    });
};


document.addEventListener('DOMContentLoaded', async function () {
    removeClassResultInHotelResults();
    observarCambiosCheckAndRender();
    cargarEstilosYModales();
    aplicarEstiloSegunLongitud();
    aplicarClaseRecomendada();
    checkURL();
});