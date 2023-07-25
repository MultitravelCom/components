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
    )
}
const BannerMensageCard = ({ text_p }) => {
    return (
        <div className="main__container__bannerMensageCard">
            <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
            <p>{text_p}</p>
        </div>
    )
}

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

function renderComponents() {
    console.log('Rendering components...');
    const infoCardContents = document.querySelectorAll('.info-card__content');

    if (infoCardContents.length === 0) {
        // Si no se encuentran los elementos, se llama a la función de nuevo después de 1000ms
        setTimeout(renderComponents, 1000);
    } else {
        // Cuando se encuentran los elementos, se realiza la renderización
        infoCardContents.forEach(infoCardContent => {
            const nuevoDiv = document.createElement('div');
            const nuevoDivBannerMensage = document.createElement('div');

            infoCardContent.appendChild(nuevoDiv);
            infoCardContent.appendChild(nuevoDivBannerMensage);

            nuevoDivBannerMensage.classList.add('main__container__bannerMensageCard__App');

            ReactDOM.render(<CompartirAlojamiento />, nuevoDiv);
            ReactDOM.render(<BannerMensageCardApp />, nuevoDivBannerMensage);
        });
    }
}

function checkAndRender() {
    renderComponents();
}

// function observarCambiosCheckAndRender() {
//     const observerConfig = {
//         rootNode: document.documentElement,
//         callback: () => {
//             requestAnimationFrame(() => {
//                 const resultsListPages = document.querySelectorAll('.results-list__page');
//                 resultsListPages.forEach(resultsListPage => {
//                     checkAndRender();
//                     console.log('Observando cambios en el DOM...');
//                 });
//             });
//         },
//         queries: [{ element: '.results-list__page' }],
//     };

//     const observer = new MutationSummary(observerConfig);
// }

function observarCambiosCheckAndRender() {
    console.log('Observando cambios en el DOM...');

    const observerConfig = {
        childList: true, // Observar cambios en los hijos del elemento
        subtree: true, // Observar cambios en todos los niveles del árbol descendiente
    };

    const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
            if (mutation.type === 'childList') {
                const resultsListPages = document.querySelectorAll('.results-list__page');
                resultsListPages.forEach((resultsListPage) => {
                    renderComponents();
                    console.log('Cambios detectados en el DOM, llamando a checkAndRender...');
                });
            }
        });
    });

    observer.observe(document.documentElement, observerConfig);
}

observarCambiosCheckAndRender();