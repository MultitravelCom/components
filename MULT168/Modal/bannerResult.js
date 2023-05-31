function ButtonBannerResult(props) {

    const handleClick = (event) => {
        event.preventDefault();
        setShowModal(true);
    }

    return (
        <button id={props.id} className={props.style} onClick={handleClick}>{props.text}</button>
    );
}
const BannerSearchResult = () => {
    return (
        <>
            <div className="container_fluid">
                <div className="main__container__text">
                    <h2>¿Necesitas ayuda con tu reserva?</h2>
                    <p>Contactate con nosotros a través del 0800-123-1234 (Venta) o al Whatsapp (PostVenta) para recibí atención personalizada</p>
                </div>
                <div className="main__container__img">
                    <picture>
                        <source media="(min-width: 1024px)" srcSet="https://multitravelcom.github.io/MT/Secciones/ResultadoBusqueda/busqueda.webp" />
                        <source media="(min-width: 768px) and (max-width: 1023px)" srcSet="https://multitravelcom.github.io/MT/Secciones/ResultadoBusqueda/busqueda.webp" />
                        <source media="(max-width: 767px)" srcSet="https://multitravelcom.github.io/MT/Secciones/ResultadoBusqueda/busqueda.webp" />
                        <img className="main__container__img__img" src="https://multitravelcom.github.io/MT/Secciones/ResultadoBusqueda/busqueda.webp" alt="Imagen banner contacto personalizado" />
                    </picture>
                    <ButtonBannerResult id="btnBannerSearch" style="btn btnStyleBannerHotelsResult" link="https://wa.link/j47nea" text="Contactarme" />
                </div>
            </div>
        </>
    );
};
const insertNewDivSearchResult = async () => {
    while (true) {
        const parentDiv = document.querySelector('.results-list__body');
        const firstChdtDiv = document.querySelector('.results-list__item');

        if (parentDiv && firstChdtDiv) {
            const newDiv = document.createElement('div');
            firstChdtDiv.after(newDiv);
            ReactDOM.render(<BannerSearchResult />, newDiv);
            break;
        }

        await new Promise(resolve => setTimeout(resolve, 100));
    }
};
insertNewDivSearchResult();