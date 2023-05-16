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
                <p className="ventas">Ventas<span>0800 348 0003</span></p>
                <p className="horario">Lunes a viernes de 10 a 20 hs</p>
                <p className="dias">Sabados de 10 a 15 hs</p>
                <span className="modalContactos__telephone_span">Llamá al número en pantalla para que nuestros especialistas te asesoren con tu compra.</span>
            </div>
        </div>
    );
};

const Modal = ({ open, onClose }) => {
    if (!open) return null
    return (
        <>
            <div id="overlay" className="overlay">
                <div className="container__modal">
                    <div className='emcabezadoModal'>
                        <h3>Atención personalizada</h3>
                        <span className="closeModal" onClick={onClose}>X</span>
                    </div>
                    <div className="container-fluid">
                        <div className="row-modal">
                            <ModalContactos />
                            <ModalContactos />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

const App = () => {
    const [openModal, setOpenModal] = React.useState(false);

    return (
        <>
            <ButtonModal
                id="container__widget"
                style="main__container__widget"
                onClick={() => setOpenModal(true)}
            >
                <div className="glyphicon glyphicon-agent agentWidget"></div>
                <div className="main__container__widget_text">Atención personalizada</div>
            </ButtonModal>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
        </>
    );
};

ReactDOM.createRoot(document.getElementById('upper-menu')).render(<App />);