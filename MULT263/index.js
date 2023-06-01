function ButtonBannerDescuento(props) {

    const handleClick = (event) => {
        event.preventDefault();
        window.location.href = `tel:0800 348 0003`;
    }

    return (
        <button className={props.style} onClick={handleClick}>{props.text}</button>
    );
}

const DescuentoComponente = () => {
    return (
        <div className="main__container_excluvisa">
            <div className="main__container_excluvisa__text">
                <div className="main__container_excluvisa__text__h1">
                    <h1>¡OFERTA EXCLUSIVA!</h1>
                </div>
                <div className="main__container_excluvisa__text__p">
                    <p>Contactate con nuestros especialistas en viajes y ahorrá hasta un 10%.</p>
                </div>
            </div>
            <div className="main__container_excluvisa__img">
                <picture>
                    <source media="(min-width: 1024px)" srcSet="https://multitravelcom.github.io/components/MULT263/img/detalleAlojamiento.png" />
                    <source media="(min-width: 768px) and (max-width: 1023px)" srcSet="https://multitravelcom.github.io/components/MULT263/img/detalleAlojamiento.png" />
                    <source media="(max-width: 767px)" srcSet="https://multitravelcom.github.io/components/MULT263/img/alojamientoMobile.png" />
                    <img src="https://multitravelcom.github.io/components/MULT263/img/detalleAlojamiento.png" alt="Imagen banner contacto personalizado" />
                </picture>
            </div>
            <ButtonBannerDescuento style="btn btnStyleBannerHotelsResult" text="Llamá al 0800 348 0003" />
        </div>
    )
}


const insertNewComponent = async () => {
    while (true) {
        const parentDivDescuentoComponente = document.querySelector('.details-content');
        const children = parentDivDescuentoComponente?.children;

        if (parentDivDescuentoComponente && children && children.length >= 2) {
            const newDivDescuentoComponente = document.createElement('div');
            parentDivDescuentoComponente.insertBefore(newDivDescuentoComponente, children[2]);
            ReactDOM.render(<DescuentoComponente />, newDivDescuentoComponente);
            break;
        }

        await new Promise(resolve => setTimeout(resolve, 100));
    }
};

insertNewComponent();