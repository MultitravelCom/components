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

const ContainerCuponer = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (

        <div className="overlay__cupones" id="overlay__cupones">
            <div className="modal__cupones">
                <div className="modal-content">
                    <div className="modal__content-title">
                        <h2>Te damos la bienvenida a nuestra cuponera</h2>
                        <span className="close" onClick={onClose}>X</span>
                    </div>
                    <div className="row modal-content__cupones-row">
                        <div className="modal__content-uno">
                            <div className="modal__content-uno-title">
                                <div className="modal__content-uno-logo">
                                    <img src="https://multitravelcom.github.io/style/General/img/Logo%20AA%20cupon.svg" />
                                </div>
                                <div className="modal__content-title-circleCalendar">
                                    <div className="modal__content-title-h3">
                                        <h2>15% OFF sobre la tarifa base</h2>
                                    </div>
                                    <div className="modal__content-title-circle">
                                        <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
                                        <p>Vuelos a Miami y Nueva York con Aerolineas Argentinas.</p>
                                    </div>
                                    <div className="modal__content-title-calendar">
                                        <div className="main__warningPric__icon glyphicon glyphicon-calendar"></div>                                 <p>Disponible hasta el 12/05/2023 hasta las 23:59.</p>
                                    </div>
                                </div>
                                <div className="modal__content-cupon">
                                    <h2>ARMTSALE15</h2>
                                    <span>Copia el siguiente código</span>
                                </div>
                            </div>
                        </div>
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
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div className="container__conocer__cupones__p">
                <p>Conoce y elige de nuestros diferentes cupones el que más te convenga</p>
            </div>
            <div className="container__conocer__cupones__btn">
                <button className="cupones__btn__style" onClick={handleOpenModal}>Conocer cupones</button>
            </div>
            <ContainerCuponer isOpen={modalOpen} onClose={handleCloseModal} />
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