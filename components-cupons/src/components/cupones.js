import './cuponesStyle.css';

const Cupones = () => {
    return(
        <div className="modal__content-uno">
        <div className="modal__content-uno-title">
            <div className="modal__content-uno-logo">
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
                    <div className="main__warningPric__icon glyphicon glyphicon-calendar"></div>
                    <p>Disponible hasta el 12/05/2023 hasta las 23:59.</p>
                </div>
            </div>
        </div>
        <div className="modal__content-cupon">
            <h2>ARMTSALE15</h2>
            <span>Copia el siguiente código</span>
        </div>
    </div> 
    )
}

export default Cupones;