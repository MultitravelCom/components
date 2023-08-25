// **************** Array de zonas ******************************
const zonasTravelSale = [
    42011, 149562, 42150, 161549, 42746, 43037, 43120, 43575, 43577, 44069,
    77218, 86041, 45373, 45374, 94979, 45468, 46533, 46534, 46600, 46612,
    46613, 46761, 46762, 46938, 46944, 165395, 48606, 48947, 159359, 49950,
    50194, 50272, 50590, 50767, 52645, 56214, 57378, 57820, 57888, 69865,
    75390, 76821, 77187, 78498, 78942, 82953, 84544, 89016, 165159, 165160,
    165168, 165469, 42949, 43649, 43579, 43786, 57400, 43735, 44227, 129478,
    48952, 51042, 51194, 78783, 92253
];
//   *************************************************************

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
// Icono imagen carrusel.
const IconImg = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6.75992 22H17.2399C19.9999 22 21.0999 20.31 21.2299 18.25L21.7499 9.99C21.8899 7.83 20.1699 6 17.9999 6C17.3899 6 16.8299 5.65 16.5499 5.11L15.8299 3.66C15.3699 2.75 14.1699 2 13.1499 2H10.8599C9.82992 2 8.62992 2.75 8.16992 3.66L7.44992 5.11C7.16992 5.65 6.60992 6 5.99992 6C3.82992 6 2.10992 7.83 2.24992 9.99L2.76992 18.25C2.88992 20.31 3.99992 22 6.75992 22Z" stroke="#0D4E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.5 8H13.5" stroke="#0D4E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 18C13.79 18 15.25 16.54 15.25 14.75C15.25 12.96 13.79 11.5 12 11.5C10.21 11.5 8.75 12.96 8.75 14.75C8.75 16.54 10.21 18 12 18Z" stroke="#0D4E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </>
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
    const [isBariloche, setIsBariloche] = React.useState(false);
    const [shouldRenderBanner, setShouldRenderBanner] = React.useState(false);


    // React.useEffect(() => {
    //     const checkDivPresence = () => {
    //         const div = document.querySelector('.bestprice__taxincluded');
    //         setHasBestPriceTaxIncluded(!div);
    //     };

    //     checkDivPresence();
    //     const interval = setInterval(checkDivPresence, 1000);

    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);

    React.useEffect(() => {
        const interval = setInterval(() => {
            const div = document.querySelector('.bestprice__taxincluded');
            setHasBestPriceTaxIncluded(!div);
            
            const dataValueElement = document.querySelector('.zone-selector-value');
            if (dataValueElement) {
                const dataValue = dataValueElement.value;
                const numericValue = parseInt(dataValue);
        
                const isZoneInTravelSale = zonasTravelSale.includes(numericValue);
        
                console.log("Bariloche. ZonaCode:", numericValue);
        
                setIsBariloche(isZoneInTravelSale);
                setShouldRenderBanner(isZoneInTravelSale);
            }
        }, 1000);
    
        return () => {
            clearInterval(interval);
        };
    }, [shouldRenderBanner]);

    return (
        <>
            {(isBariloche || hasBestPriceTaxIncluded) ? (
                <BannerMensageCard text_p={"Pagá hasta en 12 cuotas fijas."} />
            ) : (
                <BannerMensageCard text_p={"Comprá ahora y congela el precio en pesos"} />
            )}
        </>
    );
};

const checkAndRender = async () => {

    let infoCardContents = document.querySelectorAll('.info-card__content');
    let infoCardImgContents = document.querySelectorAll('.info-card__image');

    while (infoCardContents.length === 0) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        infoCardContents = document.querySelectorAll('.info-card__content');
        infoCardImgContents = document.querySelectorAll('.info-card__image');
    }
    infoCardImgContents.forEach(infoCardImgContent => {
        const nuevoDivIconImg = document.createElement('div');
        infoCardImgContent.appendChild(nuevoDivIconImg);
        nuevoDivIconImg.classList.add("main__container__iconImg", "js-open-gallery");
        ReactDOM.render(<IconImg />, nuevoDivIconImg);
    });

    infoCardContents.forEach(infoCardContent => {
        /*
        Change property of a element so it opens another tab and doesnt redirect
        */
        const absLink = infoCardContent.querySelector('a.abs');

        // Check if the element exists before modifying it
        if (absLink) {
            // Add the target="_blank" attribute to the anchor element
            absLink.setAttribute('target', '_blank');

        }



        const nuevoDiv = document.createElement('div');
        const nuevoDivReact = document.createElement('div');
        const nuevoDivBannerMensage = document.createElement('div');

        infoCardContent.appendChild(nuevoDivReact);
        infoCardContent.appendChild(nuevoDivBannerMensage);

        nuevoDivBannerMensage.classList.add('main__container__bannerMensageCard__App');


        ReactDOM.render(<CompartirAlojamiento />, nuevoDivReact);
        ReactDOM.render(<BannerMensageCardApp />, nuevoDivBannerMensage);
    });
};

const BannerTopTravelSale = () => {
    const bannerStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '20px',
        width: '300px',
        justifyContent: 'center',
        margin: 'auto',
        display: 'none',
    };

    return (
        <>
            <div className="main__container__bannerTopTravelSale" style={bannerStyle}>
                <h2>Soy un banner!</h2>
            </div>
        </>
    );
};

const renderBanner = () => {
    const mainContentElement = document.getElementById('main-content');

    if (mainContentElement) {
        const nuevoDivIconImg = document.createElement('div');
        mainContentElement.insertBefore(nuevoDivIconImg, mainContentElement.firstChild);

        ReactDOM.render(<BannerTopTravelSale />, nuevoDivIconImg);
    }
};

function observarCambiosCheckAndRenderII() {
    const observerConfig = {
        rootNode: document.documentElement,
        callback: () => {
            checkAndRender();
        },
        queries: [{ element: '.results-list__page' }],
    };

    const observer = new MutationSummary(observerConfig);

    checkAndRender(); // Llamar a checkAndRender al cargar la página por primera vez
}
checkAndRender();
observarCambiosCheckAndRenderII();

