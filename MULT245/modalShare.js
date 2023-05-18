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
const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <>
            <div id="overlay" className="overlay">
                <div className="container__modal shareStyle">
                    <div className='emcabezadoModal emcabezadoModalShare'>
                        <h3>Compartir alojamiento</h3>
                        <button className="close-button" onClick={onClose}><span>X</span></button>
                    </div>
                    <div className="container-fluid-modal">
                        <div className="row-modal">
                            <ModalIconsShare />
                            <ModalIconsShare />
                            <ModalIconsShare />
                            <ModalIconsShare />
                            <ModalIconsShare />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const ModalIconsShare = () =>{
    <div className="modal__iconShare">
        <span className="glyphicon facebook-fill"></span>
    </div>
}

const CompartirAlojamiento = () => {
    const [openModal, setOpenModal] = React.useState(false);
    return (
        <>
            <div className="cont">
                <ButtonModalShare
                    onClick={() => setOpenModal(true)}
                    id="container__widget"
                    style="main__container__widget"
                >
                    <div className="main__container__share">
                        <span className="glyphicon glyphicon-share share__icon"></span>
                        <span className="share__text">Compartí este alojamiento ahora</span>
                    </div>
                </ButtonModalShare>
                <Modal open={openModal} onClose={() => setOpenModal(false)} />
            </div>
        </>
    )
}

const infoCardContents = document.querySelectorAll('.info-card__content');

infoCardContents.forEach(infoCardContent => {
    const nuevoDiv = document.createElement('div');
    infoCardContent.appendChild(nuevoDiv);

    ReactDOM.render(<CompartirAlojamiento />, nuevoDiv);
});