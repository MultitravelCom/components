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
const ModalShare = ({ open, onClose }) => {
    if (!open) return null;

    const socialshareModal = document.querySelector('.socialshare-moda');
    const socialshareLinks = socialshareModal.querySelectorAll('.socialshare-modal__lin');

    const links = Array.from(socialshareLinks).map(link => link.href);

    const facebookLink = links[0];
    const linkedinLink = links[1];
    const mailLink = links[2];
    const twitterLink = links[3];
    const whatsappLink = links[4];

    return (
        <>
            <div id="overlay" className="overlay">
                <div className="container__modal shareStyle">
                    <div className='emcabezadoModal emcabezadoModalShare'>
                        <h3>Compartir alojamiento</h3>
                        <button className="close-button" onClick={onClose}><span>X</span></button>
                    </div>
                    <div className="container-fluid-modal">
                        <div className="row-modal-share">
                            <div className="row-modal-icons-arriba">
                                <ModalIconsShare imageName="https://multitravelcom.github.io/components/MULT245/icons/Facebook.svg" href={facebookLink} />
                                <ModalIconsShare imageName="https://multitravelcom.github.io/components/MULT245/icons/LinkedIn.svg" href={linkedinLink} />
                            </div>
                            <div className="row-modal-icons-abajo">
                                <ModalIconsShare imageName="https://multitravelcom.github.io/components/MULT245/icons/Mail.svg" href={mailLink} />
                                <ModalIconsShare imageName="https://multitravelcom.github.io/components/MULT245/icons/Twitter.svg" href={twitterLink} />
                                <ModalIconsShare imageName="https://multitravelcom.github.io/components/MULT245/icons/WhatsApp.svg" href={whatsappLink} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const ModalIconsShare = ({ imageName, href }) => {
    return (
        <div className="modal__iconShare">
            <div className="modal__iconShare__img">
                <a className="socialshare-modal__link socialshare-modal__link-facebook" href={href} target="_blank" title="Facebook"><span></span>
                    <img alt="redes sociales" src={imageName} />
                </a>
            </div>
        </div>
    )
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
                <ModalShare open={openModal} onClose={() => setOpenModal(false)} />
            </div>
        </>
    )
}

const infoCardContents = document.querySelectorAll('.info-card__content');


document.addEventListener('DOMContentLoaded', function() {
    infoCardContents.forEach(infoCardContent => {
        const nuevoDiv = document.createElement('div');
        infoCardContent.appendChild(nuevoDiv);
    
        ReactDOM.render(<CompartirAlojamiento />, nuevoDiv);
    });
  });