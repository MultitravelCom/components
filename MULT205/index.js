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

function movePromoCodesContainer() {
    const promocodesContainer = document.querySelector('.confirm-booking__promocodes');
    const sectionHolderData = document.querySelector('.confirm-booking__section.confirm-booking__holder-data');
    sectionHolderData.insertAdjacentElement('afterend', promocodesContainer);
};

movePromoCodesContainer();

function toggleWhatsappDisplayStyle(isOpen) {
    const whatsappSelector = document.querySelector('.whatsAppFixes');
    if (whatsappSelector) {
        whatsappSelector.style.display = isOpen ? 'none' : 'block';
    }
};

function moveBookingBreakdownTable() {
    const observer = new MutationObserver((mutationsList, observer) => {
        for (let mutation of mutationsList) {
            const addedNodes = mutation.addedNodes;
            for (let node of addedNodes) {
                if (node.classList && node.classList.contains('booking-breakdown__table')) {
                    const shoppingBasketLines = document.querySelector('.confirm-booking__shopping-basket.booking-sidebar .shopping-basket__lines');
                    node.classList.add('shopping-basket__line');
                    shoppingBasketLines.appendChild(node);

                    const fullLines = shoppingBasketLines.querySelectorAll('.shopping-basket__line-price');
                    fullLines.forEach(line => {
                        line.style.display = 'none';
                    });
                }
            }
        }
    });

    const targetNode = document.querySelector('.confirm-booking__promocodes');
    const config = { childList: true, subtree: true };

    observer.observe(targetNode, config);

    const existingTables = document.querySelectorAll('.confirm-booking__promocodes .booking-breakdown__table');
    for (let table of existingTables) {
        const shoppingBasketLines = document.querySelector('.confirm-booking__shopping-basket.booking-sidebar .shopping-basket__lines');
        table.classList.add('shopping-basket__line');
        shoppingBasketLines.appendChild(table);

        const fullLines = shoppingBasketLines.querySelectorAll('.shopping-basket__line-price');
        fullLines.forEach(line => {
            line.style.display = 'none';
        });
    }
};

moveBookingBreakdownTable();

async function changeText() {
    const span = document.querySelector('.promocodes__container tr:nth-child(3) td span');

    if (!span) {
        await new Promise(resolve => setTimeout(resolve, 100));
        await changeText();
    } else {
        span.textContent = 'Ingresá tu código promocional';
    }
};

async function showPromocodesDiv() {
    // Espera a que el elemento exista antes de intentar mostrarlo
    while (true) {
        const promocodesDiv = document.querySelector('.confirm-booking__promocodes');
        if (promocodesDiv) {
            promocodesDiv.style.display = 'block';
            break;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
    }
};

// ************************* Componentes *******************************
// Modal
const ModalCupones = ({ isOpen, onClose }) => {

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
                        <ComponenteCupones />
                    </div>
                </div>
            </div>
        </div>
    );
};
// ****************************************************************************************************
//  butones
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
            console.log('Texto copiado al portapapeles:', textToCopy);
        } catch (error) {
            console.error('Error al copiar el texto:', error);
        }

        document.body.removeChild(textarea);

        setTimeout(() => {
            setShowTooltip(false);
        }, 2000);
    };

    return (

        <button className="cardCuponButtonStyle" onClick={handleCopyClick}>
            <div className="cardCuponButtonStyle__copy">
                Copiar
            </div>
            <div className="cardCuponButtonStyle__svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M11.3335 8.93329V10.9333C11.3335 13.6 10.2668 14.6666 7.60016 14.6666H5.06683C2.40016 14.6666 1.3335 13.6 1.3335 10.9333V8.39996C1.3335 5.73329 2.40016 4.66663 5.06683 4.66663H7.06683" stroke="#0D4E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.3336 8.93329H9.20023C7.60023 8.93329 7.06689 8.39996 7.06689 6.79996V4.66663L11.3336 8.93329Z" stroke="#0D4E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.7334 1.33337H10.4001" stroke="#0D4E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.6665 3.33337C4.6665 2.22671 5.55984 1.33337 6.6665 1.33337H8.41317" stroke="#0D4E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.6668 5.33337V9.46004C14.6668 10.4934 13.8268 11.3334 12.7935 11.3334" stroke="#0D4E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.6665 5.33337H12.6665C11.1665 5.33337 10.6665 4.83337 10.6665 3.33337V1.33337L14.6665 5.33337Z" stroke="#0D4E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            {<ToolTipButton visible={showTooltip} />}
        </button>
    )
}
// **********************************************************************

function ComponenteCupones() {

    const [couponsData, setCouponsData] = React.useState([]);

    const getCouponsFetch = async () => {
        const res = await fetch('https://raw.githubusercontent.com/MultitravelCom/components/master/MULT205/cuponesDB.json');
        const data = await res.json();
        console.log(data)
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
            {couponsData.map(({ id, img, title, description, duration, cupon }) => (
                < div className="modal__content-uno" key={id}>
                    <div className="modal__content-uno-title">
                        <div className="modal__content-uno-logo">
                            <img src={img} />
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

const App = () => {
    const [modalOpen, setModalOpen] = React.useState(false);

    const whatsappRef = React.useRef(null);

    const handleOpenModal = (event) => {
        event.preventDefault();
        setModalOpen(true);
        toggleWhatsappDisplayStyle(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        toggleWhatsappDisplayStyle(false);
    };

    React.useEffect(() => {
        const confirmBookingPromocodes = document.querySelector('.confirm-booking__promocodes');
        confirmBookingPromocodes.style.display = 'flex';
        whatsappRef.current = document.querySelector('.whatsAppFixes');
    }, []);

    return (
        <>
            <div className="container__conocer__cupones__p">
                <p>Encuentra tu cupón ideal entre nuestra selección de ofertas</p>
            </div>
            <div className="container__conocer__cupones__btn">
                <button className="cupones__btn__style" onClick={handleOpenModal}>Conocer cupones</button>
            </div>
            <ModalCupones isOpen={modalOpen} onClose={handleCloseModal} />
        </>
    );
};

async function run() {
    await changeText();
    await showPromocodesDiv();
}

run();


const confirmBooking = document.querySelector('.confirm-booking__promocodes');
if (confirmBooking) {
    const newElementBookingCupons = document.createElement('div');
    newElementBookingCupons.classList.add('container__conocer__cupones');
    ReactDOM.render(<App />, newElementBookingCupons);

    confirmBooking.appendChild(newElementBookingCupons);
}