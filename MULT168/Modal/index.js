function ButtonModal(props) {
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

const ModalContactos = () => {
    return (
        <div className="main__container__modalContactos">
            <div className="glyphicon glyphicon-phone"></div>
            <div className="modalContactos__telephone">
                <p>Ventas <span>0800 348 0003</span></p>
                <p>Lunes a viernes de 10 a 20 hs</p>
                <p>Sabados de 10 a 15 hs</p>
                <span>Llamá al número en pantalla para que nuestros especialistas te asesoren con tu compra.</span>
            </div>
            <ButtonModal
                id={destino.title}
                style="btn_Style_Venta_Per"
                link={destino.linkWa}
                text="Contactarme"
            />
        </div>
    );
};

const Modal = () => {
    return (
        <>
            <div id="overlay" className="overlay">
                <div className="container__modal">
                    <div className='emcabezadoModal'>
                        <h3>Atención personalizada</h3>
                        <span className="closeOverlay" onClick={closeModal}>X</span>
                    </div>
                    <ModalContactos />
                </div>
            </div>
        </>
    );
};

const Widget = () => {

    return (
        <>
            <ButtonModal
                id="container__widget"
                className="main__container__widget"
            >
                <div className="glyphicon glyphicon-agent agentWidget"></div>
                <div className="main__container__widget_text">Atención personalizada</div>
            </ButtonModal>
        </>
    );
};

ReactDOM.createRoot(document.getElementById('upper-menu')).render(<Widget />);
s