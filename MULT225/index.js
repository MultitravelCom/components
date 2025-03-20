
function getSubdomain() {
    return window.location.hostname.split('.')[0].toLowerCase();
}

// Banner Redes
const BannerRedes = () => {

    const subdomain = getSubdomain();

    if (subdomain === 'cl') {
        return null;
    }

    return (
        <>
            <div className="main_conteiner__s1_medio top_mkt">
                <h2 className="main__conteiner__titulo">
                    ¡Não perca nada, siga-nos!
                </h2>
                <div className="main_conteiner__s1_medio__paquetes">
                    <a href="https://www.instagram.com/multitravelcom.br/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank">
                        <picture>
                            <source media="(min-width: 1024px)" srcSet="
          https://multitravelcom.github.io/MTBrasil-Img/RedesSociales/Banner-MKT-Redes-1.jpg
        " />
                            <source media="(min-width: 768px) and (max-width: 1023px)" srcSet="
          https://multitravelcom.github.io/MTBrasil-Img/RedesSociales/Banner-MKT-Redes-2.jpg
        " />
                            <source media="(max-width: 767px)" srcSet="
          https://multitravelcom.github.io/MTBrasil-Img/RedesSociales/Banner-MKT-Redes-3.jpg
        " />
                            <img src="https://multitravelcom.github.io/MTBrasil-Img/RedesSociales/Banner-MKT-Redes-1.jpg"
                                alt="Redes sociais de promoção de banner de imagem" />
                        </picture>
                    </a>
                </div>
            </div>
        </>
    )
}

// Componente medios de pago.
const MediosDePagos = () => {

    const subdomain = getSubdomain();

    const content = {
        br: {
            section: 'Meios de pagamento',
            title: 'Você decide',
            subtitle: 'Encontre todos...',
            button: 'Descobrir'
        },
        cl: {
            section: 'Medios de pago',
            title: 'Tú decides',
            subtitle: 'Encuentra todos los medios de pago exclusivos para ti',
            button: 'Descubrir'
        }
    };
    const text = content[subdomain]

    return (
        <>
            <h2 className="main__conteiner__titulo">
                {text.section}
            </h2>
            <div className="main__conteiner__s2__pagos">
                <div className="main__conteiner__s2__pagos__card uno__s2">
                    <div className="main__conteiner__s2__pagos__card__texto">
                        <h4>{text.title}</h4>
                        <p>{text.subtitle}</p>
                        <button className="main__conteiner__s2__pagos__btn">
                            <a href="https://onefiveb2b.juniperbetemp.com/formas-de-pagamento" target="_blank"
                                style={{ color: "white", textDecoration: "none" }}>{text.button}</a>
                        </button>
                    </div>
                    <div className="main__conteiner__s2__pagos__card__img">
                        <picture>
                            <source media="(min-width: 1024px)" srcSet="https://multitravelcom.github.io/MTBrasil-Img/MediosPagos/mediospagos-01.webp" />
                            <source media="(min-width: 768px) and (max-width: 1023px)" srcSet="https://multitravelcom.github.io/MTBrasil-Img/MediosPagos/mediospagos-02.webp" />
                            <source media="(max-width: 767px)" srcSet="https://multitravelcom.github.io/MTBrasil-Img/MediosPagos/mediospagos-03.webp" />
                            <img alt={`Imagen banner`} src="https://multitravelcom.github.io/MTBrasil-Img/MediosPagos/mediospagos-01.webp" />
                        </picture>
                    </div>
                </div>
                <div className="main__conteiner__s2__pagos__card dos__s2">
                    <a href="https://onefiveb2b.juniperbetemp.com" target="_blank">
                        <source media="(min-width: 1024px)" srcSet="https://multitravelcom.github.io/MTBrasil-Img/MediosPagos/ahora12/ahora12-01.webp" />
                        <source media="(min-width: 768px) and (max-width: 1023px)" srcSet="https://multitravelcom.github.io/MTBrasil-Img/MediosPagos/ahora12/ahora12-02.webp" />
                        <source media="(max-width: 767px)" srcSet="https://multitravelcom.github.io/MTBrasil-Img/MediosPagos/ahora12/ahora12-03.webp" />
                        <img alt={`Imagen banner Ahora12`} src="https://multitravelcom.github.io/MTBrasil-Img/MediosPagos/ahora12/ahora12-01.webp" />
                    </a>
                </div>
            </div>
        </>
    )
}

// Lo mejor de Multitravel.com
const Secciones = ({ seccion, url, className }) => {
    return (
        <>
            <div className={`col-md-4 col-xs-12 hover__s3 ${className}`}>
                <a href={url} target="_blank">
                    <div className="main__conteiner__s3__piensa__parrafo">
                        <p>{seccion}</p>
                    </div>
                </a>
            </div>
        </>
    );
};

function Ofertas(props) {

    const subdomain = getSubdomain();

    const content = {
        br: {
            title: 'Mais ofertas em Multitravel.com',
        },
        cl: {
            title: 'Mas ofertas en Multitravel.com',
        }
    };
    const text = content[subdomain]

    return (
        <>
            <h2 className="main__conteiner__titulo">{text.title}</h2>
            <div className="main__conteiner">
                <div className="main__conteiner__s3__piensa row-cols-3">
                    <Secciones seccion={props.seccion1} url={props.url1} className={props.className1} />
                    <Secciones seccion={props.seccion2} url={props.url2} className={props.className2} />
                    <Secciones seccion={props.seccion3} url={props.url3} className={props.className3} />
                </div>
            </div>
        </>
    );
}

const LoMejorDe = () => {
    const path = window.location.pathname;
    const subdomain = getSubdomain();

    const content = {
        br: {
            hotels: 'Acomodações',
            flighthotel: 'Pacotes',
            insurances: 'Seguros',
            flights: 'voos'
        },
        cl: {
            hotels: 'Alojamientos',
            flighthotel: 'Paquetes',
            insurances: 'Asistencias',
            flights: 'Vuelos'
        }
    };
    const text = content[subdomain]


    if (path === '/flights/') {
        return (
            <>
                <Ofertas
                    seccion1={text.hotels}
                    url1="https://br.multitravel.com/hotels/"
                    className1="uno__s3"
                    seccion2={text.flighthotel}
                    url2="https://br.multitravel.com/packages/flighthotel/"
                    className2="dos__s3"
                    seccion3={text.insurances}
                    url3="https://br.multitravel.com/insurances/"
                    className3="tres__s3"
                />
            </>
        );
    } else if (path === '/hotels/') {
        return (
            <>
                <Ofertas
                    seccion1={text.hotels}
                    url1="https://br.multitravel.com/hotels/"
                    className1="uno__s3"
                    seccion2={text.flights}
                    url2="https://br.multitravel.com/flights/"
                    className2="dos__s3"
                    seccion3={text.insurances}
                    url3="https://br.multitravel.com/insurances/"
                    className3="tres__s3"
                />
            </>
        );
    } else if (path === '/packages/flighthotel/') {
        return (
            <>
                <Ofertas
                    seccion1={text.hotels}
                    url1="https://br.multitravel.com/hotels/"
                    className1="uno__s3"
                    seccion2={text.flights}
                    url2="https://br.multitravel.com/flights/"
                    className2="dos__s3"
                    seccion3={text.insurances}
                    url3="https://br.multitravel.com/insurances/"
                    className3="tres__s3"
                />
            </>
        );
    } else {
        return (
            <>
                <Ofertas
                    seccion1={text.hotels}
                    url1="https://br.multitravel.com/hotels/"
                    className1="uno__s3"
                    seccion2={text.flights}
                    url2="https://br.multitravel.com/flights/"
                    className2="dos__s3"
                    seccion3={text.flighthotel}
                    url3="https://br.multitravel.com/packages/flighthotel/"
                    className3="tres__s3"
                />
            </>
        );
    };
}

const App = () => {
    return (
        <>
            <div id="mediosDePago">
                <MediosDePagos />
            </div>
            <div id="bannerRedes">
                <BannerRedes />
            </div>
            <div id="loMejorDe" className="main__conteiner__s3">
                <LoMejorDe />
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('rootHome')).render(<App />);

