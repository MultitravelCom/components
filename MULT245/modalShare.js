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

function checkAndRender(resultsListPage) {
    const infoCardContents = resultsListPage.querySelectorAll('.info-card__content');

    infoCardContents.forEach(infoCardContent => {
        const nuevoDiv = infoCardContent.querySelector('.main__container__bannerMensageCard__App');

        if (!nuevoDiv) {
            const nuevoDivBannerMensage = document.createElement('div');
            nuevoDivBannerMensage.classList.add('main__container__bannerMensageCard__App');
            infoCardContent.appendChild(nuevoDivBannerMensage);

            ReactDOM.render(<BannerMensageCardApp />, nuevoDivBannerMensage);

            // Renderizar también la componente <CompartirAlojamiento />
            const contDiv = infoCardContent.querySelector('.cont');
            if (contDiv) {
                ReactDOM.render(<CompartirAlojamiento />, contDiv);
            }
        }
    });
}

function observarCambiosCheckAndRenderReact() {
    const observerConfig = {
        rootNode: document.documentElement,
        callback: (summaries) => {
            // Obtener los elementos results-list__page afectados por los cambios
            const resultsListPages = summaries[0].added;
            resultsListPages.forEach(resultsListPage => {
                checkAndRender(resultsListPage);
            });
        },
        queries: [{ element: '.results-list__page' }],
    };

    const observer = new MutationSummary(observerConfig);
}

checkAndRender();
observarCambiosCheckAndRenderReact();