function Button(props) {
    const handleClick = (event) => {
        event.preventDefault();
        window.open(props.link, '_blank');
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

const ModalContactos = ({ ventasClass, ventasText, horarioClass, horarioText, diasClass, diasText, spanText, iconModal, buttonStyle, buttonLink, buttonText }) => {
    return (
        <div className="main__container__modalContactos">
            <div className={`glyphicon ${iconModal}`}></div>
            <div className="modalContactos__telephone">
                <p className={`ventas ${ventasClass}`} dangerouslySetInnerHTML={{ __html: ventasText }}></p>
                <p className={`horario ${horarioClass}`}>{horarioText}</p>
                <p className={`dias ${diasClass}`}>{diasText}</p>
                <p className="modalContactos__telephone_span">{spanText}</p>
            </div>
            <Button
                style={buttonStyle}
                link={buttonLink}
                text={buttonText}
            />
        </div>
    );
};

const Modal = ({ open, onClose }) => {
    if (!open) return null
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
                                ventasText="Posventa <span>11 4960 8454</span>"
                                horarioClass="green"
                                horarioText="Lunes a domingo las 24hs"
                                diasClass="green"
                                spanText="Escribí al whatsapp que nuestro asistente virtual te indicara los pasos a seguir."
                                buttonStyle="btn_Style_Venta_Contactarme"
                                buttonLink="https://wa.link/5s5eba"
                                buttonText="Contactarme"
                            />
                            <ModalContactos
                                iconModal="glyphicon-whatsapp-bottomless"
                                ventasClass="green"
                                ventasText="Posventa / Consultas <span>11 4960 8454</span>"
                                horarioClass="green"
                                horarioText="Nuevo asistente virtual disponible"
                                diasClass="green"
                                spanText="Escribí al whatsapp que nuestro asistente virtual te indicara los pasos a seguir."
                                buttonStyle="btn_Style_Venta_Contactarme"
                                buttonLink="https://wa.link/5s5eba"
                                buttonText="Contactarme"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const App = () => {
    const [openModal, setOpenModal] = React.useState(false);

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

const targetDiv = document.querySelector('.top-row.d-flex');
ReactDOM.render(<App />, targetDiv);