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
}

function ButtonModalShare(props) {
    const handleClick = (event) => {
        event.preventDefault();
        props.onClick();
    };

    return (
        <button id={props.id} className={props.style} onClick={handleClick}>
            {props.children}
        </button>
    );
}

const ModalShare = ({ open }) => {
    React.useEffect(() => {
        const modalElement = document.getElementById("modal-social");
        if (modalElement) {
            modalElement.style.display = open ? "block" : "none";
        }
    }, [open]);

    return null;
};

const CompartirAlojamiento = () => {
    const [openModal, setOpenModal] = React.useState(false);
    return (
        <>
            <div className="cont">
                <ButtonModalShare
                    onClick={() => setOpenModal(true)}
                    style="main__container__widget__share"
                >
                    <div className="main__container__share js-social-share">
                        <span className="glyphicon glyphicon-share share__icon"></span>
                        <span className="share__text">Compartí este alojamiento ahora</span>
                    </div>
                </ButtonModalShare>
                <ModalShare open={openModal} onClose={() => setOpenModal(false)} />
            </div>
        </>
    );
};

const BannerMensageCard = ({ text_p }) => {
    return (
        <div className="main__container__bannerMensageCard">
            <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
            <p>{text_p}</p>
        </div>
    );
};

const BannerMensageCardApp = () => {
    const [hasBestPriceTaxIncluded, setHasBestPriceTaxIncluded] = React.useState(true);

    React.useEffect(() => {
        const checkDivPresence = () => {
            const div = document.querySelector('.bestprice__taxincluded');
            setHasBestPriceTaxIncluded(!div);
        };

        checkDivPresence();
        const interval = setInterval(checkDivPresence, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            {hasBestPriceTaxIncluded ? (
                <BannerMensageCard text_p={"Pagá hasta en 12 cuotas fijas"} />
            ) : (
                <BannerMensageCard text_p={"Comprá ahora y congela el precio en pesos"} />
            )}
        </>
    );
};

const checkAndRender = async () => {
    let infoCardContents = document.querySelectorAll('.info-card__content');

    while (infoCardContents.length === 0) {
        await wait(1000);
        infoCardContents = document.querySelectorAll('.info-card__content');
    }

    infoCardContents.forEach(infoCardContent => {
        const nuevoDiv = document.createElement('div');
        const nuevoDivBannerMensage = document.createElement('div');

        infoCardContent.appendChild(nuevoDiv);
        infoCardContent.appendChild(nuevoDivBannerMensage);

        nuevoDivBannerMensage.classList.add('main__container__bannerMensageCard__App');

        ReactDOM.render(<CompartirAlojamiento />, nuevoDiv);
        ReactDOM.render(<BannerMensageCardApp />, nuevoDivBannerMensage);
    });
};

document.addEventListener('DOMContentLoaded', async function () {
    await aplicarClaseRecomendada();
    await changeCopyMap();
    await applyDisplayNoneToAllButLastButton();
    await agreeStarIcon();
    await changeCopyButton();

    checkAndRender();
});
