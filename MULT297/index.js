function cambiarTextoBoton() {
    var boton = document.querySelector('#main-content > div > article > section.details-content > div.details-card__top > div > div.details-card__price > div > button');
    if (boton) {
        boton.textContent = 'Nuevo texto del botón';
    }
}


const CompartirAlojamiento = () => {
    const [openModal, setOpenModal] = React.useState(false);
    return (
        <>
            <div className="cont">
                <ButtonModalShare
                    onClick={() => setOpenModal(true)}
                    style="main__container__widget__share"
                >
                    <div className="main__container__share js-social-share" id="hotelResult">
                        <span className="glyphicon glyphicon-share share__icon"></span>
                        <span className="share__text">Compartí este alojamiento ahora</span>
                    </div>
                </ButtonModalShare>
                <ModalShare open={openModal} onClose={() => setOpenModal(false)} />
            </div>
        </>
    )
}

const checkAndRender = async () => {
    let infoCardContents = document.querySelectorAll('.details-card__heading');

    while (infoCardContents.length === 0) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        infoCardContents = document.querySelectorAll('.details-card__heading');
    }

    infoCardContents.forEach(infoCardContent => {
        const nuevoDiv = document.createElement('div');

        infoCardContent.appendChild(nuevoDiv);


        ReactDOM.render(<CompartirAlojamiento />, nuevoDiv);
    });
    cambiarTextoBoton();
};
checkAndRender();