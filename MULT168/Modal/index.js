function addHideDuplicateButtonLogic() {
    const targetElementUser = document.querySelector('#main-menu-features');

    const buttonHTML = `
      <div class="upper-menu_quicklinks btn-toolbar visible-xs-block visible-sm-block">
        <button type="button" class="btn upper-menu__newsletter-button features_item js-login-box-modal btn-user">
          <span class="glyphicon glyphicon-user-profile" aria-hidden="true"></span>
          <span class="sr-only">Ingreso</span>
          <span class="quicklink-elem-label">Ingreso</span>
        </button>
      </div>
    `;

    targetElementUser.insertAdjacentHTML('beforeend', buttonHTML);

    const buttonsBtnUser = targetElementUser.querySelectorAll('.btn-user');

    if (buttonsBtnUser.length > 1) {
        buttonsBtnUser[1].classList.add('hidden');
    }
}

addHideDuplicateButtonLogic();

function ButtonARSEs() {
    return (
        <div className="main_container__buttonARSEs">
            <div className="main_container__buttonARSEs__ARS">
                <div>
                    <img src="https://multitravelcom.github.io/components/MULT168/icons/IconoPesos.png"></img>
                    <span>ARS</span>
                </div>
            </div>
            <div className="main_container__buttonARSEs__Es">
                <div>
                    <img src="https://multitravelcom.github.io/components/MULT168/icons/iconoArgentina.png"></img>
                    <span>ES</span>
                </div>
            </div>
        </div>
    );
}
function ButtonIngresar(props) {
    return (
        <button id={props.id} className={props.style}>{props.children}</button>
    );
}

// CONEXION API STRAPI
async function fetchDataWidgetFromAPI() {
    try {
        const response = await fetch('https://32tpwbxjq7.us-east-1.awsapprunner.com/api/widget-atencion');
        if (!response.ok) {
            throw new Error('No se pudo obtener los datos de la API');
        }
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

function ButtonModalLink(props) {
    const handleClick = (event) => {
        console.log("callToPhone:", props.callToPhone);
        event.preventDefault();
        if (props.callToPhone) {
            window.location.href = `tel:${props.link}`;
        } else {
            window.open(props.link, '_blank');
        }
    }

    return (
        <button id={props.id} className={props.style} onClick={handleClick}>{props.text}</button>
    );
}

const ButtonWidget = () => {
    return (
        <div className="main__container__buttonWidget">
            <div className="glyphicon glyphicon-agent agentWidget"></div>
            <div className="main__container__widget_text">Atención personalizada</div>
        </div>
    )
}

function ButtonModal(props) {
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

const ModalContactos = ({ ventasClass, ventasText, horarioClass, horarioText, diasClass, diasText, spanText, iconModal, buttonStyle, buttonLink, buttonText, callToPhone }) => {
    return (
        <div className="main__container__modalContactos">
            <div className={`glyphicon ${iconModal}`}></div>
            <div className="modalContactos__telephone">
                <p className={`ventas ${ventasClass}`} dangerouslySetInnerHTML={{ __html: ventasText }}></p>
                <p className={`horario ${horarioClass}`}>{horarioText}</p>
                <p className={`dias ${diasClass}`}>{diasText}</p>
                <p className="modalContactos__telephone_span">{spanText}</p>
            </div>
            <ButtonModalLink
                style={buttonStyle}
                link={buttonLink}
                text={buttonText}
                callToPhone={callToPhone}
            />
        </div>
    );
};

const Modal = ({ open, onClose }) => {
    const [apiData, setApiData] = useState(null)


    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours();


    React.useEffect(() => {
        fetchDataWidgetFromAPI()
            .then((data) => {
                setApiData(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    const shouldVentaTelefonica = apiData?.data?.attributes?.Venta_Telefonica;
    const shouldContactoWhatsapp = apiData?.data?.attributes?.Venta_Telefonica;

    const renderModal = () => {
            return (
                <>
                    {shouldVentaTelefonica ? (
                        <ModalContactos
                            iconModal="glyphicon-phone stylePhoneIconModal"
                            ventasClass="blue"
                            ventasText="Ventas <span>0800 348 0003</span>"
                            horarioClass="blue"
                            horarioText="Lunes a viernes de 10 a 20 hs"
                            diasClass="blue"
                            diasText="Sábados de 10 a 15 hs"
                            spanText="Llamá al número en pantalla para que nuestros especialistas te asesoren con tu compra."
                            buttonStyle="btn_Style_Venta_llamar"
                            buttonLink="08003480003"
                            buttonText="Llamar"
                            callToPhone={true}
                        />
                    ) : null
                    }
                    {shouldContactoWhatsapp ? (
                        <ModalContactos
                            iconModal="glyphicon-whatsapp-bottomless styleWaIconModal"
                            ventasClass="green"
                            ventasText="Posventa <span>11 4979 1877</span>"
                            horarioClass="green"
                            horarioText="Lunes a viernes de 10 a 20 hs"
                            diasText="Sábado de 10 a 15 hs"
                            diasClass="green"
                            spanText=""
                            buttonStyle="btn_Style_Venta_Contactarme"
                            buttonLink="https://wa.link/5s5eba"
                            buttonText="Enviar mensaje"
                        />
                    ) : null}
                </>
            );
    };

    if (!open) return null;
    return (
        <>
            <div id="overlay" className="overlay">
                <div className="container__modal">
                    <div className='emcabezadoModal'>
                        <h3>Tu especialista en viajes</h3>
                        <button className="close-button" onClick={onClose}><span>X</span></button>
                    </div>
                    <div className="container-fluid-modal">
                        <div className="row-modal">
                            {renderModal()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const App = () => {
    const [openModal, setOpenModal] = React.useState(false);

    React.useEffect(() => {
        const openModalButton = document.querySelector('.whatsAppFixes');
        const buttonIngresar = document.getElementById('container__widget');
        const openModalLading = document.querySelector('.classOpenModal, .btn_FormBitrix');

        const handleButtonClick = () => {
            setOpenModal(true);
        };

        function handleGlobalKeyPress(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                setOpenModal(false);
            }
        }

        document.addEventListener('keydown', handleGlobalKeyPress);

        function buscarBtnStyleVentaPer() {
            const isDesktop = window.innerWidth > 768;

            if (isDesktop) {
                const btnStyleVentaPerList = document.querySelectorAll('.classOpenModal, .btn_FormBitrix');

                if (btnStyleVentaPerList.length > 0) {
                    btnStyleVentaPerList.forEach((btnStyleVentaPer) => {
                        btnStyleVentaPer.addEventListener('click', (event) => {
                            event.preventDefault();
                            setOpenModal(true);
                        });
                    });
                } else {
                    setTimeout(buscarBtnStyleVentaPer, 1000);
                }
            }
        }
        if (window.innerWidth > 768) {
            buscarBtnStyleVentaPer();
        }

        const checkButtonExistence = setInterval(() => {
            const openModalButtonNew = document.getElementById('btnBannerSearch');
            if (openModalButtonNew) {
                openModalButtonNew.addEventListener('click', handleButtonClick);
                clearInterval(checkButtonExistence);
            }
        }, 500);

        openModalButton.addEventListener('click', (event) => {
            event.preventDefault();
            setOpenModal(true);
        });

        return () => {
            clearInterval(checkButtonExistence);
            openModalButton.addEventListener('click', handleButtonClick);
            document.removeEventListener('keydown', handleGlobalKeyPress);
        };
    }, []);

    return (
        <>
            <div className="container-fluid flex_container">
                <ButtonModal
                    id="container__widget"
                    style="main__container__widget"
                    onClick={() => setOpenModal(true)}
                >
                    <div className="glyphicon glyphicon-agent agentWidget"></div>
                    <div className="main__container__widget_text">Atención</div>
                </ButtonModal>
                <ButtonIngresar
                    id="container__widget__ars"
                    style="btn_login-button js-login-box-modal"
                    onClick={() => setOpenModal(true)}
                >
                    <div className="glyphicon-user-profile"></div>
                    <div className="main__container__widget_text__ars">Ingresar</div>
                </ButtonIngresar>
                <ButtonARSEs />
                <Modal open={openModal} onClose={() => setOpenModal(false)} />
            </div>
        </>
    );
};

const targetDivDesktop = document.querySelector('.upper-menu_quicklinks');
ReactDOM.render(<App />, targetDivDesktop);

const targetDivMobile = document.querySelector('.pull-left.hidden-xs');
ReactDOM.render(<App />, targetDivMobile);

const targetDivWidgetFixe = document.querySelector('.whatsAppFixes');
const widgetFixeComponent = <ButtonWidget />;
ReactDOM.render(widgetFixeComponent, targetDivWidgetFixe);
