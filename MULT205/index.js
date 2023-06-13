async function changeText() {
    const span = document.querySelector('.promocodes__container tr:nth-child(3) td span');

    if (!span) {
        await new Promise(resolve => setTimeout(resolve, 100));
        await changeText();
    } else {
        span.textContent = 'Ingresá tu código promocional';
    }
}

async function agreeBtn() {
    const confirmBooking = document.querySelector('.confirm-booking__promocodes');

    const newElementBookingCupons = document.createElement('div');
    newElementBookingCupons.classList.add('container__conocer__cupones');
    newElementBookingCupons.innerHTML =
        `<div class="container__conocer__cupones__p">
                <p>Conoce y elegí de nuestros diferentes cupones el que más te convenga</p>
            </div>
            <div class="container__conocer__cupones__btn">
                <button class="cupones__btn__style">Conocer cupones</button>
            </div>
        `;

    newElementBookingCupons.querySelector('.cupones__btn__style').addEventListener('click', handleClick);

    // Espera a que el elemento padre exista antes de agregar el nuevo elemento
    while (!confirmBooking) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    confirmBooking.appendChild(newElementBookingCupons);
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

function handleClick(event) {
    event.preventDefault()
    // Crea el modal
    const modalCupones = document.createElement('div');
    modalCupones.classList.add('modal-cupones');
    modalCupones.innerHTML = `
    <div class="overlay__cupones" id="overlay__cupones">
    <div class="modal__cupones">
        <div class="modal-content">
            <div class="modal__content-title">
                <h2>Te damos la bienvenida a nuestra cuponera</h2>
                <span class="close">X</span>
            </div>
            <div class="row modal-content__cupones-row">
                <div class="modal__content-uno">
                    <div class="modal__content-uno-title">
                        <div class="modal__content-uno-logo">
                            <img src="https://multitravelcom.github.io/style/General/img/Logo%20AA%20cupon.svg" />
                        </div>
                        <div class="modal__content-title-circleCalendar">
                            <div class="modal__content-title-h3">
                                <h2>15% OFF sobre la tarifa base</h2>
                            </div>
                            <div class="modal__content-title-circle">
                                <div class="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
                                <p>Vuelos a Miami y Nueva York con Aerolineas Argentinas.</p>
                            </div>
                            <div class="modal__content-title-calendar">
                                <div class="main__warningPric__icon glyphicon glyphicon-calendar"></div>
                                <p>Disponible hasta el 12/05/2023 hasta las 23:59.</p>
                            </div>
                        </div>
                        <div class="modal__content-cupon">
                            <h2>ARMTSALE15</h2>
                            <span>Copia el siguiente código</span>
                        </div>
                    </div>
                </div>
                <div class="modal__content-uno">
                    <div class="modal__content-uno-title">
                        <div class="modal__content-uno-logo">
                            <img src="https://multitravelcom.github.io/style/General/img/Logo%20AA%20cupon.svg" />
                        </div>
                        <div class="modal__content-title-circleCalendar">
                            <div class="modal__content-title-h3">
                                <h2>10% OFF sobre la tarifa base</h2>
                            </div>
                            <div class="modal__content-title-circle">
                                <div class="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
                                <p>Vuelos a Madrid, Rio de Janeiro, Cancun, Punta Cana, Bogota, Havana, Lima, Roma, Santiago de Chile, Salvador de Bahia, Porto Seguro con Aerolíneas Argentinas.</p>
                            </div>
                            <div class="modal__content-title-calendar">
                                <div class="main__warningPric__icon glyphicon glyphicon-calendar"></div>
                                <p>Disponible hasta el 12/05/2023 hasta las 23:59.</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal__content-cupon">
                        <h2>ARMTSALE10</h2>
                        <span>Copia el siguiente código</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        `;

    // Agrega el modal al DOM
    document.body.appendChild(modalCupones);

    // Agrega un event listener al botón de cerrar el modal
    modalCupones.querySelector('.close').addEventListener('click', () => {
        modalCupones.remove();
    });
}

// const ContainerCuponer = ({ title_cupon, destination__cupon, data__cupon }) => {
//     return (
//         <>
//             <div classList="main__container__cupon">
//                 <div classList="main__container__cupon__img">

//                 </div>
//                 <div classList="main__container__cupon__text">
//                     <h2>{title_cupon}</h2>
//                     <div class="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
//                     <p>{destination__cupon}</p>
//                     <div class="main__warningPric__icon glyphicon glyphicon-calendar"></div>
//                     <p>{data__cupon}</p>
//                 </div>
//                 <div classList="main__container__cupon__cupon">

//                 </div>
//             </div >
//         </>
//     )
// }

async function run() {
    await changeText();
    await agreeBtn();
    showPromocodesDiv();
}

run();
