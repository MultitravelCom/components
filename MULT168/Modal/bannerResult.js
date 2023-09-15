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
                    <ButtonBannerResult id="btnBannerSearch" style="btn btnStyleBannerSearch" link="https://wa.link/j47nea" text="Contactarme" />
                </div>
            </div>
        </>
    );
};

// const renderBannerSearchResult = () => {
//     if (!bannerRendered) {
//         const parentDiv = document.querySelector('.results-list__page');
//         const firstChildDiv = document.querySelector('.results-list__item');

//         if (parentDiv && firstChildDiv) {
//             const newDiv = document.createElement('div');
//             firstChildDiv.parentNode.insertBefore(newDiv, firstChildDiv.nextSibling);
//             ReactDOM.render(<BannerSearchResult />, newDiv);
//             bannerRendered = true;
//         }
//     }
// };

let bannerRendered = false;

const insertNewDivSearchResult = () => {
    const parentDiv = document.querySelector('.results-list__page');

    // Renderizar el banner la primera vez si no está presente
    if (!bannerRendered) {
        if (parentDiv) {
            const existingBanner = parentDiv.querySelector('.main__container__img');

            if (!existingBanner) {
                const firstChildDiv = parentDiv.querySelector('.results-list__item');
                if (firstChildDiv) {
                    const newDiv = document.createElement('div');
                    firstChildDiv.parentNode.insertBefore(newDiv, firstChildDiv.nextSibling);
                    ReactDOM.render(<BannerSearchResult />, newDiv);
                    bannerRendered = true;
                }
            }
        }
    }

    // Crear un observador de mutaciones para seguir observando cambios
    const observer = new MutationSummary({
        callback: handleDOMChanges,
        queries: [{ element: '.results-list__page' }]
    });

    function handleDOMChanges(summaries) {
        const summary = summaries[0];

        // Verificar si se han agregado elementos y el banner aún no se ha renderizado
        if (summary.added.length > 0 && !bannerRendered) {
            const parentDiv = summary.added[0];
            const existingBanner = parentDiv.querySelector('.main__container__img');

            if (!existingBanner) {
                const firstChildDiv = parentDiv.querySelector('.results-list__item');
                if (firstChildDiv) {
                    const newDiv = document.createElement('div');
                    firstChildDiv.parentNode.insertBefore(newDiv, firstChildDiv.nextSibling);
                    ReactDOM.render(<BannerSearchResult />, newDiv);
                    bannerRendered = true;
                }
            }
        }
    }
};

insertNewDivSearchResult();
