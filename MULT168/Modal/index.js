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
    const currentHour = now.getHours();

    const renderModal = () => {
        if ((currentHour >= 10 && currentHour < 21) || currentHour === 20 && now.getMinutes() <= 59) {
            return (
                <>
                    <ModalContactos
                        iconModal="glyphicon-phone"
                        ventasClass="blue"
                        ventasText="Ventas <span>0800 348 0003</span>"
                        horarioClass="blue"
                        horarioText="Lunes a viernes de 10 a 20 hs"
                        diasClass="blue"
                        diasText="Sabados de 10 a 15 hs"
                        spanText="Llamá al número en pantalla para que nuestros especialistas te asesoren con tu compra."
                        buttonStyle="btn_Style_Venta_llamar"
                        buttonLink="08003480003"
                        buttonText="Llamar"
                        callToPhone={true}
                    />
                    <ModalContactos
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
                    />
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
                        diasText="Sabados de 10 a 15 hs"
                        spanText="Llamá al número en pantalla para que nuestros especialistas te asesoren con tu compra."
                        buttonStyle="btn_Style_Venta_llamar"
                        buttonLink="https://wa.link/5s5eba"
                        buttonText="Llamar"
                    />
                    <ModalContactos
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
                    />
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
                        <h3>Atención personalizada</h3>
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
        const btnStyleVentaPerList = document.querySelectorAll('.btn_Style_Venta_Per');

        const handleButtonClick = () => {
            setOpenModal(true);
        };

        btnStyleVentaPerList.forEach((btnStyleVentaPer) => {
            btnStyleVentaPer.addEventListener('click', (event) => {
                event.preventDefault();
                setOpenModal(true);
                console.log("test");
            });
        });

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
                    <div className="main__container__widget_text">Atención personalizada</div>
                </ButtonModal>
                <Modal open={openModal} onClose={() => setOpenModal(false)} />
            </div>
        </>
    );
};

const targetDivDesktop = document.querySelector('.upper-menu_quicklinks');
ReactDOM.render(<App />, targetDivDesktop);

const targetDivMobile = document.querySelector('.pull-left.hidden-xs');
ReactDOM.render(<App />, targetDivMobile);