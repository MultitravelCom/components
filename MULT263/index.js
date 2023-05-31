// function ButtonBannerDescuento(props) {

//     const handleClick = (event) => {
//         event.preventDefault();
//     }

//     return (
//         <button id={props.id} className={props.style} onClick={handleClick}>{props.text}</button>
//     );
// }
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
                <img src="https://multitravelcom.github.io/components/MULT263/img/alojamientoMobile.png"></img>
            </div>
            {/* <ButtonBannerDescuento id="btnBannerSearch" style="btn btnStyleBannerSearch" link="https://wa.link/j47nea" text="Llamá al 0800 348 0003" /> */}
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