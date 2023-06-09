function addHeaderLinks() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const meta = document.createElement('meta');

    document.title = "Paquetes turísticos al caribe | Multitravel.com"

    meta.setAttribute('name', 'description');
    meta.setAttribute('content', 'Compará paquetes al caribe y conseguí los mejores precios en alojamiento y vuelos a Bariloche, Iguazú y Mendoza. Solicitá atención personalizada por whatsapp');

    const linkCDNGlider = document.createElement('link');

    linkCDNGlider.rel = 'stylesheet';
    linkCDNGlider.href = 'https://cdn.jsdelivr.net/npm/glider-js@1.7.8/glider.min.css';


    const mailchimp = document.createElement('script');
    mailchimp.id = 'mcjs';
    mailchimp.async = true;
    mailchimp.src = 'https://chimpstatic.com/mcjs-connected/js/users/d09ee86703b1761e8337397e9/6e305f08d149ab3c55d2d9573.js';
    mailchimp.textContent = '!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/d09ee86703b1761e8337397e9/6e305f08d149ab3c55d2d9573.js");';

    head.appendChild(meta);
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

function verificarYActualizarMeta() {
    let metaTag = document.querySelector('meta[property="og:image"]');

    if (metaTag) {
        metaTag.setAttribute("content", "https://multitravelcom.github.io/MT/multitravel.webp");
    } else {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("property", "og:image");
        metaTag.setAttribute("content", "https://multitravelcom.github.io/MT/multitravel.webp");

        let head = document.querySelector("head");
        head.appendChild(metaTag);
    }
}
verificarYActualizarMeta();

// ************** Ancla *****************************
function mostrarSeccion() {
    let url = window.location.href;
    let hash = url.substring(url.indexOf("#") + 1);

    let seccion = document.getElementById(hash); 

    if (seccion) {
        seccion.scrollIntoView(); 
    } else {
        setTimeout(mostrarSeccion, 500);
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
    const response = await fetch('https://raw.githubusercontent.com/MultitravelCom/components/master/MULT324/dbCaribe.json');
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
    { carrusel: "carrusel__lista", btnLeft: "btnLeft", btnRight: "btnRight", title: 'Paquetes Cancún  – Alojamientos Cancún', destino: "Cancun" },
    { carrusel: "carrusel__lista2", btnLeft: "btnLeft2", btnRight: "btnRight2", title: 'Paquetes Playa del Carmen – Alojamientos Playa del Carmen', destino: "PlayaDelCarmen" },
    { carrusel: "carrusel__lista3", btnLeft: "btnLeft3", btnRight: "btnRight3", title: 'Paquetes Punta Cana - Alojamientos Punta Cana', destino: "PuntaCana" },
    { carrusel: "carrusel__lista4", btnLeft: "btnLeft4", btnRight: "btnRight4", title: 'Paquetes Panamá - Alojamientos Panamá', destino: "Panama" },
];

// *****************************************************
// ************** COMPONENTES ********************
function Button(props) {
    const handleClick = (event) => {
        event.preventDefault();

        if (window.innerWidth <= 767) {
            window.location.href = 'tel:08003480003';}
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
            https://multitravelcom.github.io/MT/Evento/Caribe/Banner/banner-1.webp
          "
                />
                <source
                    media="(min-width: 768px) and (max-width: 1023px)"
                    srcSet="
                    https://multitravelcom.github.io/MT/Evento/Caribe/Banner/banner-2.webp
                    "
                />
                <source
                    media="(max-width: 767px)"
                    srcSet="
                    https://multitravelcom.github.io/MT/Evento/Caribe/Banner/banner-3.webp
                    "
                />
                <img
                    className="main_conteiner__s1_medio__paquetes__img"
                    src="            https://multitravelcom.github.io/MT/Evento/Caribe/Banner/banner-1.webp
                    "
                    alt="Imagen banner promociones"
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
function App() {
    const [loaded, setLoaded] = React.useState(false);
    const [destinos, setDestinos] = React.useState([]);

    const Cancun = filtrarDestinos(destinos, "Cancun");
    const PlayaDelCarmen = filtrarDestinos(destinos, 'PlayaDelCarmen');
    const PuntaCana = filtrarDestinos(destinos, 'PuntaCana');
    const Panama = filtrarDestinos(destinos, 'Panama');

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
                            <CardContainer btnStyles={btnStyles[0]} destinosFiltrados={Cancun} />
                            <WarningPrice />
                            <CardContainer btnStyles={btnStyles[1]} destinosFiltrados={PlayaDelCarmen} />
                            <WarningPrice />
                            <CardContainer btnStyles={btnStyles[2]} destinosFiltrados={PuntaCana} />
                            <WarningPrice />
                            <CardContainer btnStyles={btnStyles[3]} destinosFiltrados={Panama} />
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));


