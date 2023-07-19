function cambiarTextoBoton() {
    const boton = document.querySelector('#main-content > div > article > section.details-content > div.details-card__top > div > div.details-card__price > div > button');
    if (boton) {
        boton.textContent = "Ver opciones";
        boton.style.display = "block";
    }
}

const CompartirAlojamientoResult = () => {
    const [openModal, setOpenModal] = React.useState(false);
    return (
        <>
            <ButtonModalShare
                onClick={() => setOpenModal(true)}
                style="main__container__widget__share"
            >
                <div className="main__container__share__result js-social-share" id="hotelResult">
                    <span className="glyphicon glyphicon-share share__icon__result"></span>
                    <span className="share__text__result">Compartí este alojamiento ahora</span>
                </div>
            </ButtonModalShare>
            <ModalShare open={openModal} onClose={() => setOpenModal(false)} />
        </>
    )
}

const checkAndRender = async () => {
    let infoCardContents = document.querySelectorAll('#main-content > div > article > section.details-content > div.details-card__top > div > div.details-card__product');

    while (infoCardContents.length === 0) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        infoCardContents = document.querySelectorAll('#main-content > div > article > section.details-content > div.details-card__top > div > div.details-card__product');
    }

    infoCardContents.forEach(infoCardContent => {
        const nuevoDiv = document.createElement('div');
        infoCardContent.appendChild(nuevoDiv);


        ReactDOM.render(<CompartirAlojamientoResult />, nuevoDiv);

    });
};
cambiarTextoBoton();
checkAndRender();