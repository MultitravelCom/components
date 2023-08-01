async function makeModalDraggable(modalSelector) {
    const modalContainer = document.querySelector(modalSelector);
    let isDragging = false;
    let initialX;
    let initialY;

    modalContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        initialX = e.clientX - modalContainer.offsetLeft;
        initialY = e.clientY - modalContainer.offsetTop;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const currentX = e.clientX - initialX;
        const currentY = e.clientY - initialY;

        modalContainer.style.left = `${currentX}px`;
        modalContainer.style.top = `${currentY}px`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

function movePromoCodesContainer() {
    const promocodesContainer = document.querySelector('.confirm-booking__promocodes');
    const sectionHolderData = document.querySelector('.confirm-booking__section.confirm-booking__holder-data');
    sectionHolderData.insertAdjacentElement('afterend', promocodesContainer);
}

movePromoCodesContainer();

function toggleWhatsappDisplayStyle(isOpen) {
    const whatsappSelector = document.querySelector('.whatsAppFixes');
    if (whatsappSelector) {
        whatsappSelector.style.display = isOpen ? 'none' : 'block';
    }
}

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
}

moveBookingBreakdownTable();

async function changeText() {
    const span = document.querySelector('.promocodes__container tr:nth-child(3) td span');

    if (!span) {
        await new Promise(resolve => setTimeout(resolve, 100));
        await changeText();
    } else {
        span.textContent = 'Ingresá tu código promocional';
    }
}

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
}

function ComponenteCupones({ img_logo_cupon, code_cupon, cupon_texto_a, cupon_texto_b, cupon_texto_c }) {
    return (
        <div className="modal__content-uno">
            <div className="modal__content-uno-title">
                <div className="modal__content-uno-logo">
                    <img src={img_logo_cupon} />
                </div>
                <div className="modal__content-title-circleCalendar">
                    <div className="modal__content-title-h3">
                        <h2>{cupon_texto_a}</h2>
                    </div>
                    <div className="modal__content-title-circle">
                        <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
                        <p>{cupon_texto_b}</p>
                    </div>
                    <div className="modal__content-title-calendar">
                        <div className="main__warningPric__icon glyphicon glyphicon-calendar"></div>
                        <p>{cupon_texto_c}</p>
                    </div>
                </div>
                <div className="modal__content-cupon">
                    <h2>{code_cupon}</h2>
                    <span>Copia el siguiente código</span>
                </div>
            </div>
        </div>
    )
}

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

    return (

        <div className="overlay__cupones" id="overlay__cupones" onClick={handleOutsideClick} onKeyDown={handleKeyDown} tabIndex={-1}>
            <div className="modal__cupones">
                <div className="modal-content">
                    <div className="modal__content-title">
                        <h2>Te damos la bienvenida a nuestra cuponera</h2>
                        <span className="close-modal-cupon" onClick={onClose}>X</span>
                    </div>
                    <div className="row modal-content__cupones-row">
                        <ComponenteCupones
                            img_logo_cupon="https://multitravelcom.github.io/style/General/img/Logo%20Multi%20cupon.svg"
                            code_cupon="DIADELPADRE10"
                            cupon_texto_a="10% OFF para regalarle a papá"
                            cupon_texto_b="Todos los productos"
                            cupon_texto_c="Disponible hasta el 18/06/2023 hasta las 23:59"
                        />
                        <ComponenteCupones
                            img_logo_cupon="https://multitravelcom.github.io/style/General/img/Logo%20Multi%20cupon.svg"
                            code_cupon="DIADELPADRE10"
                            cupon_texto_a="10% OFF para regalarle a papá"
                            cupon_texto_b="Todos los productos"
                            cupon_texto_c="Disponible hasta el 18/06/2023 hasta las 23:59"
                        />
                        <ComponenteCupones
                            img_logo_cupon="https://multitravelcom.github.io/style/General/img/Logo%20Multi%20cupon.svg"
                            code_cupon="DIADELPADRE10"
                            cupon_texto_a="10% OFF para regalarle a papá"
                            cupon_texto_b="Todos los productos"
                            cupon_texto_c="Disponible hasta el 18/06/2023 hasta las 23:59"
                        />
                        <ComponenteCupones
                            img_logo_cupon="https://multitravelcom.github.io/style/General/img/Logo%20Multi%20cupon.svg"
                            code_cupon="DIADELPADRE10"
                            cupon_texto_a="10% OFF para regalarle a papá"
                            cupon_texto_b="Todos los productos"
                            cupon_texto_c="Disponible hasta el 18/06/2023 hasta las 23:59"
                        />
                        <ComponenteCupones
                            img_logo_cupon="https://multitravelcom.github.io/style/General/img/Logo%20Multi%20cupon.svg"
                            code_cupon="DIADELPADRE10"
                            cupon_texto_a="10% OFF para regalarle a papá"
                            cupon_texto_b="Todos los productos"
                            cupon_texto_c="Disponible hasta el 18/06/2023 hasta las 23:59"
                        />
                        <ComponenteCupones
                            img_logo_cupon="https://multitravelcom.github.io/style/General/img/Logo%20Multi%20cupon.svg"
                            code_cupon="DIADELPADRE10"
                            cupon_texto_a="10% OFF para regalarle a papá"
                            cupon_texto_b="Todos los productos"
                            cupon_texto_c="Disponible hasta el 18/06/2023 hasta las 23:59"
                        />
                        <ComponenteCupones
                            img_logo_cupon="https://multitravelcom.github.io/style/General/img/Logo%20Multi%20cupon.svg"
                            code_cupon="DIADELPADRE10"
                            cupon_texto_a="10% OFF para regalarle a papá"
                            cupon_texto_b="Todos los productos"
                            cupon_texto_c="Disponible hasta el 18/06/2023 hasta las 23:59"
                        />
                        <ComponenteCupones
                            img_logo_cupon="https://multitravelcom.github.io/style/General/img/Logo%20Multi%20cupon.svg"
                            code_cupon="DIADELPADRE10"
                            cupon_texto_a="10% OFF para regalarle a papá"
                            cupon_texto_b="Todos los productos"
                            cupon_texto_c="Disponible hasta el 18/06/2023 hasta las 23:59"
                        />
                        <ComponenteCupones
                            img_logo_cupon="https://multitravelcom.github.io/style/General/img/Logo%20Multi%20cupon.svg"
                            code_cupon="DIADELPADRE10"
                            cupon_texto_a="10% OFF para regalarle a papá"
                            cupon_texto_b="Todos los productos"
                            cupon_texto_c="Disponible hasta el 18/06/2023 hasta las 23:59"
                        />
                        <ComponenteCupones
                            img_logo_cupon="https://multitravelcom.github.io/style/General/img/Logo%20Multi%20cupon.svg"
                            code_cupon="DIADELPADRE10"
                            cupon_texto_a="10% OFF para regalarle a papá"
                            cupon_texto_b="Todos los productos"
                            cupon_texto_c="Disponible hasta el 18/06/2023 hasta las 23:59"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const App = () => {
    const [modalOpen, setModalOpen] = React.useState(false);

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
                <p>Conoce y elige de nuestros diferentes cupones el que más te convenga</p>
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
    await makeModalDraggable('.modal__cupones');
}

run();


const confirmBooking = document.querySelector('.confirm-booking__promocodes');
if (confirmBooking) {
    const newElementBookingCupons = document.createElement('div');
    newElementBookingCupons.classList.add('container__conocer__cupones');
    ReactDOM.render(<App />, newElementBookingCupons);

    confirmBooking.appendChild(newElementBookingCupons);
}