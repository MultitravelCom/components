const ButtonUserMobile = () => {
    return (
        <>
            <button type="button" className="btn btn-secondary upper-menu__login-button js-login-box-modal hidden-xs" data-toggle="modal">
                <span className="glyphicon glyphicon-agent agentWidget" aria-hidden="true"></span>
                <span className="sr-only">Ingreso</span>
                <span className="quicklink-elem-label">Ingreso</span>
            </button>
        </>
    )
}

const ButtonARSEs = () => {
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
    )
}
function ButtonIngresar(props) {
    return (
        <button id={props.id} className={props.style}>{props.children}</button>
    );
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

    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours();


    const renderModal = () => {
        if (
            (currentDay >= 1 && currentDay <= 5 && currentHour >= 10 && currentHour < 20) ||
            (currentDay === 6 && currentHour >= 10 && currentHour < 15)
        ) {
            return (
                <>
                    <ModalContactos
                        iconModal="glyphicon-phone"
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
                    {/* <ModalContactos
                        iconModal="glyphicon-whatsapp-bottomless"
                        ventasClass="green"
                        ventasText="Posventa <span>11 4960 8454</span>"
                        horarioClass="green"
                        horarioText="Lunes a domingo las 24hs"
                        diasClass="green"
                        spanText="Escribí al whatsapp para que nuestros especialistas te ayuden."
                        buttonStyle="btn_Style_Venta_Contactarme"
                        buttonLink="https://wa.link/5s5eba"
                        buttonText="Enviar mensaje"
                    /> */}
                </>
            );
        } else {
            return (
                <>
                    <ModalContactos
                        iconModal="glyphicon-phone"
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
                    <ModalContactos
                        iconModal="glyphicon-whatsapp-bottomless"
                        ventasClass="green"
                        ventasText="Consulta por ventas <span>11 4979 1877</span>"
                        horarioClass="green"
                        horarioText="Fuera de horario de venta telefónica"
                        diasClass="green"
                        spanText="Dejanos tu consulta y nos contactaremos en nuestro horario de atención."
                        buttonStyle="btn_Style_Venta_Contactarme"
                        buttonLink="https://wa.link/5s5eba"
                        buttonText="Enviar mensaje"
                    />
                    {/* <ModalContactos
                        iconModal="glyphicon-whatsapp-bottomless"
                        ventasClass="green"
                        ventasText="Posventa / Consultas <span>11 4979 1877</span>"
                        horarioClass="green"
                        horarioText="Nuevo asistente virtual disponible"
                        diasClass="green"
                        spanText="Escribí al whatsapp que nuestro asistente virtual te indicara los pasos a seguir."
                        buttonStyle="btn_Style_Venta_Contactarme"
                        buttonLink="https://wa.link/64zdo9"
                        buttonText="Enviar mensaje"
                    /> */}
                </>
            );
        }
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
        const openModalButton = document.querySelector('.whatsAppFixes a');


        const handleButtonClick = () => {
            setOpenModal(true);
        };

        function buscarBtnStyleVentaPer() {
            const isDesktop = window.innerWidth > 768;

            if (isDesktop) {
                const btnStyleVentaPerList = document.querySelectorAll('.btn_Style_Venta_Per');

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
        };
    }, []);

    return (
        <>
            <div className="container-fluid">
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
                    <div className="glyphicon glyphicon-user-profile"></div>
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

const renderButtonUserMobile = () => {
    const targetElement = document.querySelector('#main-menu-features');
    const componentContainer = document.createElement('div');
    ReactDOM.render(<ButtonUserMobile />, componentContainer);
    targetElement.appendChild(componentContainer.firstChild);
};

// Llamada a la función para renderizar el componente
renderButtonUserMobile();