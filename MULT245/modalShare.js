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

const checkAndRender = async () => {

    let infoCardContents = document.querySelectorAll('.info-card__content');

    while (infoCardContents.length === 0) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        infoCardContents = document.querySelectorAll('.info-card__content');
    }

    infoCardContents.forEach(infoCardContent => {
        const nuevoDivReact = document.createElement('div');
        const nuevoDivBannerMensage = document.createElement('div');

        infoCardContent.appendChild(nuevoDivReact);
        infoCardContent.appendChild(nuevoDivBannerMensage);

        nuevoDivBannerMensage.classList.add('main__container__bannerMensageCard__App');


        ReactDOM.render(<CompartirAlojamiento />, nuevoDivReact);
        ReactDOM.render(<BannerMensageCardApp />, nuevoDivBannerMensage);
    });
};
checkAndRender();

function observarCambiosCheckAndRenderII() {
    const observerConfig = {
        rootNode: document.documentElement,
        callback: () => {
            checkAndRender(); // Llamar a checkAndRender al detectar cambios
        },
        queries: [{ element: '.results-list__page' }],
    };

    const observer = new MutationSummary(observerConfig);

    checkAndRender(); // Llamar a checkAndRender al cargar la página por primera vez
}

observarCambiosCheckAndRenderII();