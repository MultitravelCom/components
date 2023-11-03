// ****************** CUPONERA ****************************
function makeScrollableContainer(containerSelector) {
    const container = document.querySelector(containerSelector);
    let isDragging = false;
    let initialY;
    let initialScrollTop;

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        initialY = e.clientY;
        initialScrollTop = container.scrollTop;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const deltaY = e.clientY - initialY;
        container.scrollTop = initialScrollTop - deltaY;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}
function toggleWhatsappDisplayStyle(isOpen) {
    const whatsappSelector = document.querySelector('.whatsAppFixes');
    if (whatsappSelector) {
        whatsappSelector.style.display = isOpen ? 'none' : 'block';
    }
};
// Funcion timer(para mostrar desde / hasta cierta fecha)
const isWithinDateRange = (startDate, endDate) => {
    const currentDate = new Date();
    return currentDate >= startDate && currentDate <= endDate;
};
function ComponenteCupones() {

    const [couponsData, setCouponsData] = React.useState([]);

    const getCouponsFetch = async () => {
        const res = await fetch('https://raw.githubusercontent.com/MultitravelCom/components/master/MULT205/cuponesDB.json');
        const data = await res.json();
        return data.cupones;
    }

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await getCouponsFetch();
            setCouponsData(data);
        };
        fetchData();
    }, []);

    return (
        <>
            {couponsData.map(({ id, title, description, duration, cupon }) => (
                < div className="modal__content-uno" key={id}>
                    <div className="modal__content-uno-title">
                        <div className="modal__content-uno-logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="46" viewBox="0 0 60 46" fill="none">
                                <path d="M59.9952 38.2831C59.8561 25.9976 56.3316 13.7602 49.8787 3.18034C49.4812 2.52952 49.0672 1.87549 48.5074 1.3465C46.543 -0.503376 43.2172 -0.307809 40.8819 1.0804C38.5466 2.46861 36.9797 4.77053 35.5222 7.01795L35.5487 7.02757C34.3926 8.92874 32.4548 11.9905 30.146 15.5492L21.5996 28.3925C34.8001 38.3953 42.7502 22.2786 42.7899 22.2049L42.77 22.1921L38.5764 22.0927C38.0066 22.1055 37.5362 21.9163 37.4037 21.4194C37.2712 20.9193 37.5859 20.4127 38.0994 20.2845L45.6122 17.9377C45.6122 17.9377 48.4113 14.411 49.2725 13.7442C49.3786 13.6576 49.5077 13.5935 49.6502 13.5582C50.1669 13.43 50.6903 13.7346 50.8228 14.2315C50.8593 14.3726 50.8626 14.5168 50.8328 14.6515C50.8129 14.7926 50.6042 15.7864 48.8353 19.7715L50.2365 27.2672C50.369 27.7673 50.0543 28.2739 49.5409 28.4021C49.0241 28.5304 48.6465 28.2386 48.3682 27.7289L46.1389 24.0195C44.5588 29.1267 40.6069 32.3712 40.6069 32.3712C45.5758 38.9179 42.9224 36.0581 48.1794 41.9572C49.299 43.2139 50.5512 44.3328 52.0385 45.1568C53.5259 45.9807 55.4173 46.3045 56.961 45.5832C59.5447 44.3777 60.0284 41.0595 59.9952 38.2831Z" fill="#DF1E34" />
                                <path d="M24.4757 7.02763C23.0181 4.78021 21.4513 2.47828 19.116 1.09007C16.7806 -0.298133 13.4548 -0.490495 11.4905 1.35617C10.9307 1.88517 10.5166 2.53599 10.1191 3.19002C3.6663 13.7731 0.138443 26.0073 -0.00068365 38.296C-0.0304965 41.0724 0.449821 44.3906 3.0336 45.5961C4.57724 46.3174 6.4687 45.9936 7.95603 45.1697C9.44336 44.3457 10.6061 43.0761 11.7257 41.8194C13.2925 40.0625 15.6676 36.8725 18.3408 33.083C12.5704 28.3765 10.6458 18.7296 10.6458 18.7296C10.5266 18.207 13.2197 18.207 13.2197 18.207C15.7935 18.207 15.9127 18.7296 15.9127 18.7296C17.7876 23.0802 19.6526 26.4625 21.5971 28.3926C24.5287 24.1061 27.5663 19.5183 30.1434 15.5492L30.16 15.5428C29.6664 14.7445 31.0212 17.1266 24.4723 7.02763H24.4757Z" fill="#0D4E88" />
                                <path d="M30.1938 15.5716L28.2196 12.7471L19.4082 25.5744C19.4082 25.5744 21.0976 28.027 21.5779 28.3732L30.1971 15.5716H30.1938Z" fill="#0E4168" />
                                <path d="M18.3399 33.0637C18.3399 33.0637 11.516 43.2011 8.36913 44.9228C8.36913 44.9228 6.07023 46.5033 3.70508 45.8365L15.7097 30.3065C15.7097 30.3065 17.2004 32.2558 18.3366 33.0669L18.3399 33.0637Z" fill="#0E4168" />
                            </svg>
                        </div>
                        <div className="modal__content-title-circleCalendar">
                            <div className="modal__content-title-h3">
                                <h2>{title}</h2>
                            </div>
                            <div className="modal__content-title-circle">
                                <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
                                <p>{description}</p>
                            </div>
                            <div className="modal__content-title-calendar">
                                <div className="main__warningPric__icon glyphicon glyphicon-calendar"></div>
                                <p>{duration}</p>
                            </div>
                        </div>
                        <div className="modal__content-cupon">
                            <h2>{cupon}</h2>
                            <CardCuponButton textToCopy={cupon} />
                        </div>
                    </div>
                </div >
            ))}
        </>
    )
};
// Modal
const ModalCupones = ({ isOpen, onClose }) => {

    const startDate = new Date(2023, 7, 27, 22, 0); // 27 de Agosto a las 23:30
    const endDate = new Date(2023, 8, 7, 23, 30);   // 7 de Septiembre a las 23:30
    const shouldShowCupones = isWithinDateRange(startDate, endDate);


    const handleOutsideClick = (event) => {
        if (event.target.classList.contains('overlay__cupones')) {
            onClose();
        }
    };

    if (!isOpen) {
        return null;
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    React.useEffect(() => {
        if (isOpen) {
            const containerSelector = '.modal-content__cupones-row'; // Selector del contenedor con los cupones
            makeScrollableContainer(containerSelector);
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    return (

        <div className="overlay__cupones" id="overlay__cupones" onClick={handleOutsideClick} onKeyDown={handleKeyDown} tabIndex={-1}>
            <div className="modal__cupones">
                <div className="modal-content">
                    <div className="modal__content-title">
                        <h2>Te damos la bienvenida a nuestra cuponera</h2>
                        <span className="close-modal-cupon" onClick={onClose}>X</span>
                    </div>
                    <div className="row modal-content__cupones-row">
                        {shouldShowCupones ? <ComponenteCupones /> : <span>No hay cupones disponibles.</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};
const ToolTipButton = ({ visible }) => {
    return (
        <div className={`main_ToolTipButton ${visible ? 'visible' : ''}`}>
            <p>Copiado</p>
        </div>
    )
}
const CardCuponButton = ({ textToCopy }) => {
    const [showTooltip, setShowTooltip] = React.useState(false);

    const handleCopyClick = (event) => {
        event.preventDefault();
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();

        try {
            document.execCommand('copy');
            setShowTooltip(true);
        } catch (error) {
            console.error('Error al copiar el texto:', error);
        }

        document.body.removeChild(textarea);

        setTimeout(() => {
            setShowTooltip(false);
        }, 2000);
    };

    return (

        <button className="cardCuponButtonStyle-result" onClick={handleCopyClick}>
            <div className="cardCuponButtonStyle__copy">
                Copiar
            </div>
            <div className="cardCuponButtonStyle__svg" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M11.3335 8.93329V10.9333C11.3335 13.6 10.2668 14.6666 7.60016 14.6666H5.06683C2.40016 14.6666 1.3335 13.6 1.3335 10.9333V8.39996C1.3335 5.73329 2.40016 4.66663 5.06683 4.66663H7.06683" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M11.3336 8.93329H9.20023C7.60023 8.93329 7.06689 8.39996 7.06689 6.79996V4.66663L11.3336 8.93329Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M7.7334 1.33337H10.4001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M4.6665 3.33337C4.6665 2.22671 5.55984 1.33337 6.6665 1.33337H8.41317" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M14.6668 5.33337V9.46004C14.6668 10.4934 13.8268 11.3334 12.7935 11.3334" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M14.6665 5.33337H12.6665C11.1665 5.33337 10.6665 4.83337 10.6665 3.33337V1.33337L14.6665 5.33337Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </div>
            {<ToolTipButton visible={showTooltip} />}
        </button>
    )
}
// const App = () => {
//     const [modalOpen, setModalOpen] = React.useState(false);

//     const whatsappRef = React.useRef(null);

//     const handleOpenModal = (event) => {
//         event.preventDefault();
//         setModalOpen(true);
//         toggleWhatsappDisplayStyle(true);
//     };

//     const handleCloseModal = () => {
//         setModalOpen(false);
//         toggleWhatsappDisplayStyle(false);
//     };

//     React.useEffect(() => {
//         const confirmBookingPromocodes = document.querySelector('.confirm-booking__promocodes');
//         confirmBookingPromocodes.style.display = 'flex';
//         whatsappRef.current = document.querySelector('.whatsAppFixes');
//     }, []);

//     return (
//         <>
//             <BannerTopTravelSale onBannerClick={handleOpenModal} />

//             <div className="container__conocer__cupones__p">
//                 <p>Encuentra tu cupón ideal entre nuestra selección de ofertas</p>
//             </div>
//             <div className="container__conocer__cupones__btn">
//                 <button className="cupones__btn__style" onClick={handleOpenModal}>Conocer cupones</button>
//             </div>
//             <ModalCupones isOpen={modalOpen} onClose={handleCloseModal} />
//         </>
//     );
// };

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
// ********************** Timer *****************************
function shouldShowEvent() {
    const startDate = new Date("2023-08-27T22:00:00");
    const endDate = new Date("2023-11-02T23:30:00");
    const now = new Date();

    return now >= startDate && now <= endDate;
}
// **********************************************

function isZoneInTravelSale() {
    const dataValueElement = document.querySelector('.zone-selector-value');

    if (dataValueElement) {
        const dataValue = dataValueElement.value;
        const numericValue = parseInt(dataValue);

        return zonasTravelSale.includes(numericValue);
    }
    return false;
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
        <>
            <div className="main__container__bannerMensageCard">
                <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
                <p>{text_p}</p>
            </div>
        </>

    )
}

const BannerMensageCardApp = () => {
    let taxIncludedTrue = !!document.querySelector('.bestprice__taxincluded');
    let travelSaleTrue = false;
    let showFreezePriceMessageA = false;
    let showFreezePriceMessageB = false;
    let showFreezePriceMessageC = false;

    if (isZoneInTravelSale()) {
        travelSaleTrue = true;
    }
    if (shouldShowEvent()) {
        showFreezePriceMessageA = travelSaleTrue;
        showFreezePriceMessageB = !taxIncludedTrue && !travelSaleTrue;
        showFreezePriceMessageC = taxIncludedTrue && !travelSaleTrue;
    } else {
        showFreezePriceMessageB = !taxIncludedTrue && !travelSaleTrue;
        showFreezePriceMessageC = taxIncludedTrue
    }


    return (
        <>
            {showFreezePriceMessageA && (
                <BannerMensageCard text_p={"Comprá ahora y congela el precio en pesos"} />
            )}

            {showFreezePriceMessageB && (
                <BannerMensageCard text_p={"3 cuotas sin interés a través del 0800 349 0003"} />
            )}

            {showFreezePriceMessageC && (
                <BannerMensageCard text_p={"Comprá ahora y congela el precio en pesos"} />
            )}
        </>
    );
};

const BannerTopHotelResult = () => {
    const [isEventActive, setIsEventActive] = React.useState(false);
    const [modalOpen, setModalOpen] = React.useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
        toggleWhatsappDisplayStyle(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        toggleWhatsappDisplayStyle(false);
    }

    React.useEffect(() => {
        // Función para actualizar el estado en función de la presencia de bestprice__taxincluded
        const updateEventActiveState = () => {
            const taxIncludedElement = document.querySelector('.results-list__page .bestprice__taxincluded');
            
            if (!taxIncludedElement) {
                
                setIsEventActive(true); 
            } else {
                setIsEventActive(false);
            }
        };
    
        // Configurar un observador para detectar cambios en results-list__page
        const observerConfig = {
            rootNode: document.querySelector('.results-list__page'), // Escuchar solo en results-list__page
            callback: (summaries) => {
                updateEventActiveState(); // Actualizar el estado cuando haya cambios
            },
            queries: [{ element: '.results-list__page' }], // Escuchar cualquier cambio en results-list__page
        };
    
        const observer = new MutationSummary(observerConfig);
    
        return () => {
            observer.disconnect();
        };
    }, []);
    

    const bannerStyleHotelResult = {
        display: isEventActive ? 'flex' : 'flex',
    };

    return (
        <>
            <div className="main__container__bannerTopHotelResult" style={bannerStyleHotelResult} onClick={handleOpenModal}>
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet="https://multitravelcom.github.io/MT/Secciones/BannerResultado-Alojamiento/BannerD-Resultado.webp"
                    />
                    <source
                        media="(min-width: 768px) and (max-width: 1023px)"
                        srcSet="https://multitravelcom.github.io/MT/Secciones/BannerResultado-Alojamiento/BannerD-Resultado.webp"
                    />
                    <source
                        media="(max-width: 767px)"
                        srcSet="https://multitravelcom.github.io/MT/Secciones/BannerResultado-Alojamiento/BannerM-Resultado.webp"

                    />
                    <img
                        className="main__container__bannerTopTravelSaleS__img"
                        srcSet="https://multitravelcom.github.io/MT/Secciones/BannerResultado-Alojamiento/BannerD-Resultado.webp"
                        alt="Imagen banner promociones"
                    />
                </picture>
            </div>
            {modalOpen && <ModalCupones isOpen={modalOpen} onClose={handleCloseModal} />}
        </>
    );
};
const renderBanner = () => {
    // Obtén la ruta de la URL actual
    const currentPath = window.location.pathname;

    // Verifica si la ruta contiene "/hotels/results"
    if (currentPath.includes('/hotels/results')) {
        // Si contiene la ruta deseada, realiza las acciones necesarias
        const mainContentElement = document.getElementById('main-content');
        const banner = mainContentElement.querySelector('.main__container__bannerTopHotelResult');
        if (mainContentElement && banner === null) {
            const nuevoDivIconImg = document.createElement('div');
            nuevoDivIconImg.className = 'container-BannerTopHotelResult';
            mainContentElement.insertBefore(nuevoDivIconImg, mainContentElement.firstChild);

            ReactDOM.render(<BannerTopHotelResult />, nuevoDivIconImg);
        }
    }
};

// const checkAndRender = async () => {
//     const infoCardContents = document.querySelectorAll('.info-card__content');
//     const infoCardImgContents = document.querySelectorAll('.info-card__image');

//     // Esperar a que los elementos estén disponibles
//     while (infoCardContents.length === 0) {
//         await new Promise(resolve => setTimeout(resolve, 1000));
//     }

//     // Renderizar componentes de imágenes
//     infoCardImgContents.forEach(infoCardImgContent => {
//         if (!infoCardImgContent.querySelector('.main__container__iconImg')) {
//             const nuevoDivIconImg = document.createElement('div');
//             infoCardImgContent.appendChild(nuevoDivIconImg);
//             nuevoDivIconImg.classList.add("main__container__iconImg", "js-open-gallery");
//             ReactDOM.render(<IconImg />, nuevoDivIconImg);
//         }
//     });

//     // Renderizar componentes de contenido
//     infoCardContents.forEach(infoCardContent => {
//         if (!infoCardContent.querySelector('.main__container__bannerMensageCard__App')) {
//             const nuevoDivReact = document.createElement('div');
//             const nuevoDivBannerMensage = document.createElement('div');

//             infoCardContent.appendChild(nuevoDivReact);
//             infoCardContent.appendChild(nuevoDivBannerMensage);

//             nuevoDivBannerMensage.classList.add('main__container__bannerMensageCard__App');

//             ReactDOM.render(<CompartirAlojamiento />, nuevoDivReact);
//             ReactDOM.render(<BannerMensageCardApp isZoneInSale={isZoneInTravelSale()} />, nuevoDivBannerMensage);
//         }
//     });
// };

const checkAndRender = async () => {

    let infoCardContents = document.querySelectorAll('.info-card__content');
    let infoCardImgContents = document.querySelectorAll('.info-card__image');

    while (infoCardContents.length === 0) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        infoCardContents = document.querySelectorAll('.info-card__content');
        infoCardImgContents = document.querySelectorAll('.info-card__image');
    }

    // renderBanner();

    infoCardImgContents.forEach(infoCardImgContent => {

        const nuevoDivIconImg = document.createElement('div');
        infoCardImgContent.appendChild(nuevoDivIconImg);
        nuevoDivIconImg.classList.add("main__container__iconImg", "js-open-gallery");
        ReactDOM.render(<IconImg />, nuevoDivIconImg);
    });

    infoCardContents.forEach(infoCardContent => {

        const absLink = infoCardContent.querySelector('a.abs');

        if (absLink) {
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
// renderBanner();

