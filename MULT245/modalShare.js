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
                <div className="container__modal">
                    <div className='emcabezadoModal'>
                        <h3>Atención personalizada</h3>
                        <button className="close-button" onClick={onClose}><span>X</span></button>
                    </div>
                    <div className="container-fluid-modal">
                        <div className="row-modal">
                            <h2>hola</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const CompartirAlojamiento = () => {
    const [openModal, setOpenModal] = React.useState(false);
    return (
        <>
            <div className="container-fluid">
                <ButtonModalShare onClick={() => setOpenModal(true)}>
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