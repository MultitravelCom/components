function cambiarTextoBoton() {
    const boton = document.querySelector('#main-content > div > article > section.details-content > div.details-card__top > div > div.details-card__price > div > button');
    if (boton) {
        boton.textContent = "Ver opciones";
        boton.style.display = "inline-block";
    } else {
        setTimeout(() => cambiarTextoBoton(), 1000);
    }
};

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
};
const BannerTopHotelDetails = () => {
    const [mostrarBanner, setMostrarBanner] = React.useState(false);

    React.useEffect(() => {
        // Función para verificar si el texto contiene la palabra "Argentina"
        function contienePalabraArgentina(contenedor) {
            const textoContenedor = contenedor.textContent;
            return textoContenedor.includes('Argentina');
        }

        // Obtén el elemento contenedor
        const elementoContenedor = document.querySelector('.details-card__top');

        // Verifica si el texto contiene la palabra "Argentina" y actualiza el estado
        if (contienePalabraArgentina(elementoContenedor)) {
            setMostrarBanner(true);
        } else {
            setMostrarBanner(false);
        }
    }, []);
    return (
        <>
            {mostrarBanner && (
                <div className="main__container__bannerTopTravelSale">
                    <picture>
                        <source
                            media="(min-width: 1024px)"
                            srcSet="
                        https://multitravelcom.github.io/MT/Secciones/BannerDetalle-Alojamiento/BannerD-Detalle.webp
          "
                        />
                        <source
                            media="(min-width: 768px) and (max-width: 1023px)"
                            srcSet="https://multitravelcom.github.io/MT/Secciones/BannerDetalle-Alojamiento/BannerD-Detalle.webp"
                        />
                        <source
                            media="(max-width: 767px)"
                            srcSet="https://multitravelcom.github.io/MT/Secciones/BannerDetalle-Alojamiento/BannerM-Detalle.webp"
                        />
                        <img
                            className="main_conteiner__s1_medio__paquetes__img"
                            src="https://multitravelcom.github.io/MT/Secciones/BannerDetalle-Alojamiento/BannerD-Detalle.webp"
                            alt="Imagen banner promociones"
                        />
                    </picture>
                </div>
            )}
        </>
    )
};

const renderBanner = () => {
    const confirmBooking = document.querySelector('.details-card__top');

    if (confirmBooking) {
        const nuevoDivIconImg = document.createElement('div');
        nuevoDivIconImg.className = 'container-BannerTopHotelResult';
        confirmBooking.insertBefore(nuevoDivIconImg, confirmBooking.firstChild);

        ReactDOM.render(<BannerTopHotelDetails />, nuevoDivIconImg);
    }
};

const checkAndRenderResult = async () => {
    let infoCardContents = document.querySelectorAll('#main-content > div > article > section.details-content > div.details-card__top > div > div.details-card__product');

    while (infoCardContents.length === 0) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        infoCardContents = document.querySelectorAll('#main-content > div > article > section.details-content > div.details-card__top > div > div.details-card__product');
    }

    infoCardContents.forEach(infoCardContent => {
        const nuevoDivResult = document.createElement('div');
        infoCardContent.appendChild(nuevoDivResult);


        ReactDOM.render(<CompartirAlojamientoResult />, nuevoDivResult);
        renderBanner();
    });
};
cambiarTextoBoton();
checkAndRenderResult();
renderBanner();