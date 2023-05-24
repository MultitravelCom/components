// IMG
const imgLeft = "https://multitravelcom.github.io/components/MULT225/img/MedisodePago-Desktop.png";
const imgRight = "https://multitravelcom.github.io/components/MULT225/img/MedisodePago-Desktop2.png";

const SocialsBanner = () => {
    return (
        <div className="main__SocialsBanner">
            <div className="main__SocialsBanner__ImgLeft">
                <img></img>
            </div>
            <div className="main__SocialsBanner__text">
                <h2>¡SEGUINOS EN NUESTRAS REDES SOCIALES!</h2>
                <p>DESCUBRÍ ANTES QUE NADIE OFERTAS EXCLUSIVAS</p>
            </div>
            <div className="main__SocialsBanner__icons">
                <div className="main__SocialsBanner__Icons__Face">
                    <img></img>
                </div>
                <div className="main__SocialsBanner__Icons__Gran">
                    <img></img>
                </div>
                <div className="main__SocialsBanner__icons__Lin">
                    <img></img>
                </div>
                <div className="main__SocialsBanner__icons__you">
                    <img></img>
                </div>
            </div>
        </div>
    )
}
// ******************* MEDIOS DE PAGOS **********************
const ButtonMediosDePago = ({ style, text }) => {
    const handleClick = (event) => {
        event.preventDefault();
    }

    return (
        <button className={style} onClick={handleClick}>{text}</button>
    );
}

const SeccionMediosDePagosImg = ({ imgPagos }) => {
    return (
        <div className="main__seccion__pagos__img">
            <img src={imgPagos} alt="Medios de pagos" />
        </div>
    )
}

const SeccionMediosDePagosText = ({ title, text_p, linkButton }) => {
    return (
        <div className="main__seccion__pagos__text">
            <h2>{title}</h2>
            <p>{text_p}</p>
            <ButtonMediosDePago style="btn btnStyleBannerSearch" link={linkButton} text="Descubri" />
        </div>
    )
}

const SeccionMediosDePagos = ({ showImageFirst, title, text_p }) => {
    return (
        <div className="main__seccion__pagos">
            {showImageFirst ? (
                <>
                    <SeccionMediosDePagosImg imgPagos={imgLeft}/>
                    <SeccionMediosDePagosText title={title} text_p={text_p} />
                </>
            ) : (
                <>
                    <SeccionMediosDePagosText title={title} text_p={text_p} />
                    <SeccionMediosDePagosImg imgPagos={imgRight}/>
                </>
            )}
        </div>
    );
};

const BannerMediosDePagos = () => {
    return (
        <div className="main__seccion__pagos container">
            <SeccionMediosDePagos showImageFirst={true} title="Vos decidís" text_p="Encontrá todos los medios de pagos exclusivos para vos" />
            <SeccionMediosDePagos showImageFirst={false} title="Quienes somos" text_p="Vení a descubrir el MultiTeam pa" />
        </div>

    )
}

ReactDOM.render(<BannerMediosDePagos />, document.getElementById('root'));