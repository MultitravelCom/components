function wait(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

async function aplicarClaseRecomendada() {
    const resultsListPage = document.querySelector('.results-list__page');

    if (!resultsListPage) {
        // No se encontró el elemento, espera un breve período y vuelve a intentar
        await new Promise(resolve => setTimeout(resolve, 1000));
        await aplicarClaseRecomendada();
        return; // Salir de la función para evitar ejecutar el resto del código
    }

    const items = resultsListPage.querySelectorAll('.results-list__item');

    items.forEach(item => {
        const tieneDeals = item.querySelector('.deals') !== null;
        const hotelResult = item.querySelector('.result.hotel-result');

        if (tieneDeals && hotelResult) {
            hotelResult.classList.add('alojamiento-recomendado');
            console.log(tieneDeals);
        }
    });
}

async function agreeStarIcon() {
    const resultsListPage = document.querySelector('.results-list__page');
  
    while (!resultsListPage) {
      await wait(1000);
      resultsListPage = document.querySelector('.results-list__page');
    }
  
    const items = resultsListPage.querySelectorAll('.results-list__item');
  
    items.forEach(item => {
      const infoCardCategory = item.querySelector('.info-card__category');
  
      const newSpaninfoCardCategory = document.createElement('span');
      newSpaninfoCardCategory.className = 'glyphicon glyphicon-star iconStar';
  
      infoCardCategory.insertBefore(newSpaninfoCardCategory, infoCardCategory.firstChild);
    });
  }

async function changeCopyMap() {
    const resultsListPage = document.querySelector('.results-list__page');

    while (!resultsListPage) {
        await wait(1000);
        resultsListPage = document.querySelector('.results-list__page');
      }

    const items = resultsListPage.querySelectorAll('.results-list__item');

    items.forEach(item => {
        const mapLink = item.querySelector('.map-link');
        const locationIcon = mapLink.querySelector('.info-card__location-icon');

        mapLink.lastChild.textContent = 'Ver Mapa';
        mapLink.style.display = 'block';
    });
}

async function applyDisplayNoneToAllButLastButton() {
    const actionsContainer = document.querySelector('.info-card__actions');
    const buttonsAndLinks = actionsContainer.querySelectorAll('button, a');

    for (let i = 0; i < buttonsAndLinks.length; i++) {
        if (i !== buttonsAndLinks.length - 1) {
            buttonsAndLinks[i].style.display = 'none';
        }
    }

    const lastButtonContainer = buttonsAndLinks[buttonsAndLinks.length - 1].parentNode;
    lastButtonContainer.style.display = 'inline-block';

    const buttonsVerDetalle = document.querySelectorAll('.info-card__options-toggle');

    for (let i = 0; i < buttonsVerDetalle.length; i++) {
        buttonsVerDetalle[i].textContent = 'Ver detalle';
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    await aplicarClaseRecomendada();
    await changeCopyMap();
    await applyDisplayNoneToAllButLastButton();
    await agreeStarIcon();
});

// *********************** MODAL *************************
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
const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <>
            <div id="overlay" className="overlay">
                <div className="container__modal">
                    <div className='emcabezadoModal'>
                        <h3>Atención personalizada</h3>
                        <button className="close-button" onClick={onClose}><span>X</span></button>
                    </div>
                    <div className="container-fluid-modal">
                        <div className="row-modal">
                            <h2>hola</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const CompartirAlojamiento = () => {
    const [openModal, setOpenModal] = React.useState(false);
    return (
        <>
            <div className="container-fluid">
                <ButtonModalShare onClick={() => setOpenModal(true)}>
                    <div className="main__container__share">
                        <span className="glyphicon glyphicon-share share__icon"></span>
                        <span className="share__text">Compartí este alojamiento ahora</span>
                    </div>
                </ButtonModalShare>
                <Modal open={openModal} onClose={() => setOpenModal(false)} />
            </div>
        </>
    )
}

const infoCardContents = document.querySelectorAll('.info-card__content');

infoCardContents.forEach(infoCardContent => {
    const nuevoDiv = document.createElement('div');
    infoCardContent.appendChild(nuevoDiv);

    ReactDOM.render(<CompartirAlojamiento />, nuevoDiv);
});


