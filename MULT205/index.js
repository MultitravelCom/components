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
                        {/* <ComponenteCupones /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
// ****************************************************************************************************

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
                            <span>Copia el siguiente código</span>
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