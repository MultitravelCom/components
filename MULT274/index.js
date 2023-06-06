function addHeaderLinks() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const meta = document.createElement('meta');

    document.title = "Paquetes turísticos a a destinos invernales"

    meta.setAttribute('name', 'description');
    meta.setAttribute('content', '');

    const linkCDNGlider = document.createElement('link');

    linkCDNGlider.rel = 'stylesheet';
    linkCDNGlider.href = 'https://cdn.jsdelivr.net/npm/glider-js@1.7.8/glider.min.css';

    const linkStyle = document.createElement('link');

    linkStyle.rel = 'stylesheet';
    linkStyle.href = 'https://multitravelcom.github.io/style/Estaticas/Brasil/styleBrasil.css';

    const mailchimp = document.createElement('script');
    mailchimp.id = 'mcjs';
    mailchimp.async = true;
    mailchimp.src = 'https://chimpstatic.com/mcjs-connected/js/users/d09ee86703b1761e8337397e9/6e305f08d149ab3c55d2d9573.js';
    mailchimp.textContent = '!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/d09ee86703b1761e8337397e9/6e305f08d149ab3c55d2d9573.js");';

    head.appendChild(meta);
    head.appendChild(linkStyle);
    head.appendChild(linkCDNGlider);
    head.appendChild(mailchimp);

    const modalAtencionStyle = document.createElement('link');
    const modalAtencionsJs = document.createElement('script');

    modalAtencionsJs.src = 'https://multitravelcom.github.io/components/MULT168/Modal/index.js';
    modalAtencionsJs.type = "text/babel";

    modalAtencionStyle.href = "https://multitravelcom.github.io/components/MULT168/Modal/style.css";
    modalAtencionStyle.rel = "stylesheet";

    head.appendChild(modalAtencionStyle);
    head.appendChild(modalAtencionsJs);
}
addHeaderLinks();

// ************** Ancla *****************************
function mostrarSeccion() {
    let url = window.location.href; // Obtener la URL completa
    let hash = url.substring(url.indexOf("#") + 1); // Obtener el ancla de la URL

    let seccion = document.getElementById(hash); // Buscar el elemento con el ID del ancla

    if (seccion) {
        seccion.scrollIntoView(); // Mostrar la sección si existe
    } else {
        setTimeout(mostrarSeccion, 500); // Intentar nuevamente después de 500 milisegundos
    }
}
mostrarSeccion();

// ************************ Modificacion delinks WA **************************

function changeWaLink() {
    const linkWaHeader = document.querySelector('.btn-group.upper-menu__phone-wrapper a');
    const linkWaFixed = document.querySelector('.whatsAppFixes a');
    const linkWaHeaderMobile = document.querySelector('.btn.upper-menu__phone-wrapper.features_item a');
    linkWaHeader.href = 'https://wa.link/0tl29b';
    linkWaFixed.href = 'https://wa.link/0tl29b';
    linkWaHeaderMobile.href = 'https://wa.link/0tl29b';
}
changeWaLink();

// ***************************  Conexion a BD ***************************************
const fetchDestinos = async () => {
    const response = await fetch('https://raw.githubusercontent.com/MultitravelCom/components/master/MULT274/dbInvierno.json');
    const data = await response.json();

    return data;
};

// ************************************************
// Filter
function filtrarDestinos(destinos, nombreDestino) {
    const destinosFiltrados = destinos.filter(destino => destino.destino === nombreDestino);
    return destinosFiltrados;
}

const btnStyles = [
    { carrusel: "carrusel__lista", btnLeft: "btnLeft", btnRight: "btnRight", title: 'Mega Oferta Paquetes Ski', destino: "nieve" }
];

// *****************************************************
// ************** COMPONENTES ********************
function Button(props) {
    const handleClick = (event) => {
        event.preventDefault();

        if (window.innerWidth <= 767) {
            // Llamar a un número en dispositivos móviles
            window.location.href = 'tel:08003480003';
        }
        // } else {
        //     window.open(props.link, '_blank');
        // }
    };

    return (
        <button id={props.id} className={props.style} onClick={handleClick}>{props.text}</button>
    );
}
const Loader = () => {
    return (
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    );
};
function shouldShowEvent() {
    const startDate = new Date("2023-05-07T23:59:00");
    const endDate = new Date("2023-05-10T23:59:00");
    const now = new Date();

    return now >= startDate && now <= endDate;
}

const EventImg = (props) => {
    const { shouldShowEvent } = props;

    if (!shouldShowEvent()) {
        return (
            <div className={props.style}>
                <img
                    alt={`Imagen evento promocion`}
                    src={"https://multitravelcom.github.io/MT/HotSale2023/iconCardsOff/iconHotWeek.webp"}
                />
            </div>
        );
    }

    return (
        <div className={props.style}>
            <img
                alt={`Imagen evento promocion`}
                src={"https://multitravelcom.github.io/MT/HotSale2023/iconCardsOff/logohotsale.webp"}
            />
        </div>
    );
};
const WarningPrice = () => {
    return (
        <div className="container main__warningPrice">
            <div className="main__warningPric__icon glyphicon glyphicon-info-circle"></div>
            <p>Los precios publicados no aplican para fines de semana largo y vacaciones de invierno y verano.
                De todas maneras puedes comunicarte con nuestros especialistas para que te den información al respecto.</p>
        </div>

    )
}
// ************************************************

const BannerTop = () => {
    return (
        <div className="main_conteiner__s1_medio__paquetes">
            <picture>
                <source
                    media="(min-width: 1024px)"
                    srcSet="
                    https://multitravelcom.github.io/MT/Evento/InviernoSki/Banner/bannerski.webp"
                />
                <source
                    media="(min-width: 768px) and (max-width: 1023px)"
                    srcSet="https://multitravelcom.github.io/MT/Evento/InviernoSki/Banner/bannerski-2.webp"
                />
                <source
                    media="(max-width: 767px)"
                    srcSet="https://multitravelcom.github.io/MT/Evento/InviernoSki/Banner/bannerski-3.webp"
                />
                <img
                    className="main_conteiner__s1_medio__paquetes__img"
                    src="https://multitravelcom.github.io/MT/Evento/InviernoSki/Banner/bannerski.webp"
                    alt="Imagen banner titulo"
                />
            </picture>
        </div>
    )
}
const Card = ({ destinos }) => {
    const [noDestinos, setNoDestinos] = React.useState(false);
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        fetchDestinos()
            .then((data) => {
                // Verificar si data.destinos es un array
                if (Array.isArray(data.destinos)) {
                    if (data.destinos.length > 0) {
                        setLoaded(true);
                        setDestinos(data.destinos);
                    } else {
                        setLoaded(true);
                        setNoDestinos(true);
                    }
                } else {
                    console.log("La propiedad 'destinos' no es un array.");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            {loaded ? (
                destinos.length > 0 ? (
                    destinos.map(destino => (
                        <div key={destino.id} className="carrusel__elemento">
                            <div
                                className="main__conteiner__s1__destacado__card uno"
                                style={{ height: "100%", width: "100%" }}
                            >
                                {/* {destino.events === "no" && <EventImg style="eventImg" shouldShowEvent={shouldShowEvent} />} */}
                                <picture>
                                    <map name={destino.id}>
                                        <area
                                            target="_blank"
                                            alt={destino.title}
                                            title={destino.title}
                                            href={destino.linkWa}
                                            coords={destino.coords}
                                            shape="rect"
                                        />
                                    </map>
                                    <source media="(min-width: 1024px)" srcSet={destino.img} />
                                    <source
                                        media="(min-width: 768px) and (max-width: 1023px)"
                                        srcSet={destino.img}
                                    />
                                    <source media="(max-width: 767px)" srcSet={destino.img} />
                                    <img
                                        alt={`Imagen banner ${destino.title}`}
                                        src={destino.img}
                                        useMap={`#${destino.id}`}
                                    />
                                </picture>
                                <div className="priceStyle">{destino.price}</div>
                                <Button
                                    id={destino.title}
                                    style="btn_Style_Venta_Per"
                                    link={destino.linkWa}
                                    text="Contactarme"
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay destinos disponibles.</p>
                )
            ) : (
                <Loader />
            )}
        </>
    );

};
const CardContainer = ({ btnStyles, destinosFiltrados }) => {
    const { title, btnRight, btnLeft, carrusel, destino } = btnStyles;

    const setupGlider = () => {
        const btnLeftElement = document.querySelector(`.${btnLeft}`);
        const btnRightElement = document.querySelector(`.${btnRight}`);

        btnLeftElement.addEventListener('click', function (event) {
            event.preventDefault();
        });

        btnRightElement.addEventListener('click', function (event) {
            event.preventDefault();
        });

        new Glider(document.querySelector(`.${carrusel}`), {
            slidesToShow: 1.2,
            slidesToScroll: 0.5,
            draggable: true,
            arrows: {
                prev: btnLeftElement,
                next: btnRightElement,
            },
            responsive: [
                {
                    // screens greater than >= 775px
                    breakpoint: 450,
                    settings: {
                        // Set to `auto` and provide item width to adjust to viewport
                        slidesToShow: "2.2",
                        slidesToScroll: "1",
                    },
                },
                {
                    // screens greater than >= 775px
                    breakpoint: 760,
                    settings: {
                        // Set to `auto` and provide item width to adjust to viewport
                        slidesToShow: "3.2",
                        slidesToScroll: "1",
                    },
                },
                {
                    // screens greater than >= 1024px
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    },
                },
            ],
            rewind: true,
        });
    };

    React.useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
                    setupGlider();
                    observer.disconnect();
                }
            });
        });

        observer.observe(document.querySelector(`.${carrusel}`), {
            childList: true,
        });

        return () => {
            observer.disconnect();
        };
    }, [btnLeft, btnRight, carrusel]);

    return (
        <>
            <div key={title} className="main__conteiner__s1">
                <div className="main__conteiner__s1__titulo" id={`seccion${destino}`}>
                    <h2 key={title}>
                        <strong>{title}</strong>
                    </h2>
                </div>
                <div className="carrusel__contenedor">
                    <button
                        aria-label="Anterior"
                        className={`carrusel__anterior ${btnLeft}`}
                    >
                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    <div className={carrusel} id={title}>
                        <Card destinos={destinosFiltrados} />
                    </div>
                    <button
                        aria-label="Siguiente"
                        className={`carrusel__siguiente ${btnRight}`}
                    >
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </>
    );
};

const AcordeonComponen = ({ title_acord, p_acord }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="acordeonComponen__container">
            <summary onClick={handleToggle}>
                <div
                    className={`glyphicon glyphicon-chevron-down chevron-style ${isOpen ? 'rotate-icon' : ''
                        }`}
                ></div>
                <div className="acordeonComponen__container__title">
                    <span>{title_acord}</span>
                </div>
            </summary>
            {isOpen && <p>{p_acord}</p>}
        </div>
    );
};

const ComponetFAQ = () => {
    return (
        <div className="main_conteiner__s2__acordeon container">
            <div className="main_conteiner__s2__acordeon__title">
                <h2>Preguntas frecuentes</h2>
            </div>
            <AcordeonComponen
                title_acord="¿En qué ciudades se encuentran las estaciones de ski?"
                p_acord={
                    <>
                        En Argentina, podés disfrutar de la increíble temporada de nieve y esquí en varias ciudades.                        <ul>
                            <li>
                                <strong>Mendoza:</strong>
                                <ul>
                                    <li><strong>Las Leñas:</strong> Se encuentra el reconocido centro de sky Las Leñas, famoso por sus impresionantes pistas de ski y paisajes de montaña.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Bariloche (Provincia de Río Negro):</strong>
                                <ul>
                                    <li><strong>Cerro Catedral:</strong> Un destino de renombre internacional para los amantes del esquí y del snowboard.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>San Martín de los Andes (Provincia de Neuquén):</strong>
                                <ul>
                                    <li><strong>Cerro Chapelco Ski Resort:</strong> Donde podrás disfrutar de una experiencia única en medio de la naturaleza.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Ushuaia:</strong>
                                <ul>
                                    <li><strong>Cerro Castor:</strong> Una estación de esquí que ofrece una combinación perfecta de nieve y paisajes espectaculares.</li>
                                </ul>
                            </li>
                        </ul>
                    </>
                }
            />
            <AcordeonComponen
                title_acord="¿Los paquetes de ski incluyen el equipo de nieve?"
                p_acord={
                    <>
                        No, los paquetes no incluyen el equipo de nieve. Acá te dejamos lo que cuenta cada uno de ellos.
                        <ul>
                            <li><strong>Paquete Cerro Castor</strong></li>
                            <ul>
                                <li>3 días de ski en el Cerro Castor</li>
                                <li>Hospedaje y alojamiento en el Cerro Castor. Estos se encuentran en cercanía al cerro</li>
                                <li>Traslados al Cerro Castor</li>
                                <li>Traslados in/out</li>
                            </ul>
                            <li><strong>Paquete Cerro Catedral</strong></li>
                            <ul>
                                <li>3 días de ski en el Cerro Catedral</li>
                                <li>Hospedaje y alojamiento en Catedral</li>
                            </ul>
                            <li><strong>Paquete Las Leñas</strong></li>
                            <ul>
                                <li>3 días de ski en Las Leñas</li>
                                <li>Hospedaje y alojamiento en Las Leñas</li>
                            </ul>
                            <li><strong>Paquete Chapelco</strong></li>
                            <ul>
                                <li>3 días de ski en Chapelco</li>
                                <li>Hospedaje y alojamiento en Chapelco</li>
                                <li>Traslados al Cerro Chapelco</li>
                                <li>Traslados in/out</li>
                            </ul>
                        </ul>
                    </>
                }
            />
            <AcordeonComponen
                title_acord={"¿Cuentan con alquiler de ski los cerros? ¿Hay escuelas de ski?"}
                p_acord={"Sí, todos los cerros cuentan con un alquiler de equipamiento de ski. Además,cuentan con escuelas de ski para que los principiantes en ski y snowboard aprendan."} />
            <AcordeonComponen
                title_acord={"¿Puedo elegir el alojamiento de mi paquete de ski?"}
                p_acord={
                    <>
                        Sí, cuentas con diferentes opciones de hospedajes que se adaptan a tus necesidades.
                        <br/>
                        <strong>Chapelco:</strong>
                        <ul>
                            <li>La Posta del Cazador</li>
                            <li>Apart Hotel My Friends</li>
                            <li>Patagonia Plaza Cerro Castor</li>
                        </ul>

                        <strong>Catedral:</strong>
                        <ul>
                            <li>Hampton by Hilton Bariloche</li>
                            <li>Hotel Alma del Lago Suites & Spa</li>
                            <li>Village Catedral Spa & Resort de Montaña</li>
                        </ul>

                        <strong>Las Leñas:</strong>
                        <ul>
                            <li>Hotel Aries</li>
                            <li>Hotel Piscis</li>
                        </ul>
                    </>
                }
            />
        </div>
    )
}

function App() {
    const [loaded, setLoaded] = React.useState(false);
    const [destinos, setDestinos] = React.useState([]);

    const Invierno = filtrarDestinos(destinos, "Invierno");

    React.useEffect(() => {
        fetchDestinos().then(data => {
            setDestinos(data.destinos);
            setLoaded(true);
        });
    }, []);

    return (
        <>
            {!loaded && <Loader />}

            {loaded && (
                <>
                    <div className="main_conteiner__s1_medio top_mkt">
                        <BannerTop />
                    </div>
                    <div className="main__conteiner main__conteiner-principal container">
                        <div className="carrusel">
                            <CardContainer btnStyles={btnStyles[0]} destinosFiltrados={Invierno} />
                        </div>
                    </div>
                    <div className="main__conteiner__s2">
                        <ComponetFAQ />
                    </div>
                </>
            )}
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));


