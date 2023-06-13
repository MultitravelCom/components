function moveBookingBreakdownTable() {
    const container = document.querySelector('.promocodes__container');
    const applyButton = document.querySelector('.promocode__apply-button');
  
    const observer = new MutationObserver(mutationsList => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'disabled' && !applyButton.disabled) {
          const bookingBreakdownTable = container.querySelector('.booking-breakdown__table');
          if (bookingBreakdownTable) {
            const shoppingBasketLines = document.querySelector('.shopping-basket__lines');
            shoppingBasketLines.appendChild(bookingBreakdownTable);
          }
        }
      }
    });
  
    const observerOptions = {
      attributes: true,
      attributeFilter: ['disabled']
    };
  
    observer.observe(applyButton, observerOptions);
  }
  
  // Llama a la función para iniciar la observación
  moveBookingBreakdownTable();
  // Llama a la función para iniciar la observación
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

    return (

        <div className="overlay__cupones" id="overlay__cupones" onClick={handleOutsideClick}>
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
                            code_cupon="NEWSLETTER15OFF"
                            cupon_texto_a="15% en tu primera compra"
                            cupon_texto_b="Todos los productos"
                            cupon_texto_c="Disponible hasta el 30/06/2023 hasta las 23:59"
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