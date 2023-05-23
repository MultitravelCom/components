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
// const ModalShare = ({ open, onClose }) => {
//     if (!open) return null;

//     // const socialshareModal = document.querySelector('.socialshare-moda');
//     // const socialshareLinks = socialshareModal.querySelectorAll('.socialshare-modal__lin');

//     // const links = Array.from(socialshareLinks).map(link => link.href);

//     // const facebookLink = links[0];
//     // const linkedinLink = links[1];
//     // const mailLink = links[2];
//     // const twitterLink = links[3];
//     // const whatsappLink = links[4];

//     return (
//         <>
//             <div id="overlay" className="overlay">
//                 <div className="container__modal shareStyle">
//                     <div className='emcabezadoModal emcabezadoModalShare'>
//                         <h3>Compartir alojamiento</h3>
//                         <button className="close-button" onClick={onClose}><span>X</span></button>
//                     </div>
//                     <div className="container-fluid-modal">
//                         <div className="row-modal-share">
//                             <div className="row-modal-icons-arriba">
//                                 <ModalIconsShare imageName="https://multitravelcom.github.io/components/MULT245/icons/Facebook.svg"  />
//                                 <ModalIconsShare imageName="https://multitravelcom.github.io/components/MULT245/icons/LinkedIn.svg"  />
//                             </div>
//                             <div className="row-modal-icons-abajo">
//                                 <ModalIconsShare imageName="https://multitravelcom.github.io/components/MULT245/icons/Mail.svg"  />
//                                 <ModalIconsShare imageName="https://multitravelcom.github.io/components/MULT245/icons/Twitter.svg"  />
//                                 <ModalIconsShare imageName="https://multitravelcom.github.io/components/MULT245/icons/WhatsApp.svg"  />

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// const ModalIconsShare = ({ imageName, href }) => {
//     return (
//         <div className="modal__iconShare">
//             <div className="modal__iconShare__img">
//                 <a className="socialshare-modal__link socialshare-modal__link-facebook" href={href} target="_blank" title="Facebook"><span></span>
//                     <img alt="redes sociales" src={imageName} />
//                 </a>
//             </div>
//         </div>
//     )
// }

const ModalShare = ({ open }) => {
    React.useEffect(() => {
        const modalElement = document.getElementById("modal-social");
        if (modalElement) {
            modalElement.style.display = open ? "block" : "none";
        }
    }, [open]);

    return null;
};

const CompartirAlojamiento = () => {
    const [openModal, setOpenModal] = React.useState(false);
    return (
        <>
            <div className="cont">
                <ButtonModalShare
                    onClick={() => setOpenModal(true)}
                    style="main__container__widget__share"
                >
                    <div className="main__container__share js-social-share">
                        <span className="glyphicon glyphicon-share share__icon"></span>
                        <span className="share__text">Compartí este alojamiento ahora</span>
                    </div>
                </ButtonModalShare>
                <ModalShare open={openModal} onClose={() => setOpenModal(false)} />
            </div>
        </>
    )
}
const BannerMensageCard = ({ text_p }) => {
    return (
        <div className="main__container__bannerMensageCard">
            <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
            <p>{text_p}</p>
        </div>
    )
}

const BannerMensageCardApp = () => {
    const [isDivPresent, setIsDivPresent] = React.useState(false);
    React.useEffect(() => {
        const checkDivPresence = () => {
            const div = document.querySelector('.bestprice__taxincluded.apriclar');
            setIsDivPresent(!!div);
        };

        checkDivPresence();
        const interval = setInterval(checkDivPresence, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className="main__container__bannerMensageCard__App">
            {hasBestPriceTaxIncluded ? (
                <BannerMensageCard text_p={"Comprá ahora y congela el precio en pesos"} />
            ) : (
                <BannerMensageCard text_p={"Pagá hasta en 12 cuotas fijas"} />
            )}
        </div>
    )
}

const checkAndRender = async () => {
    let infoCardContents = document.querySelectorAll('.info-card__content');

    while (infoCardContents.length === 0) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        infoCardContents = document.querySelectorAll('.info-card__content');
    }

    infoCardContents.forEach(infoCardContent => {
        const nuevoDiv = document.createElement('div');
        const nuevoDivBannerMensage = document.createElement('div');
        
        infoCardContent.appendChild(nuevoDiv);
        infoCardContent.appendChild(nuevoDivBannerMensage);

        ReactDOM.render(<CompartirAlojamiento />, nuevoDiv);
        ReactDOM.render(<BannerMensageCardApp />, nuevoDivBannerMensage);
    });
};

checkAndRender();
