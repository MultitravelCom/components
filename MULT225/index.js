// ****************** Funciones ************************
function removeContainerClass() {
    const homeContent1 = document.getElementById("home-content-5");
    homeContent1.classList.remove("container");
};

removeContainerClass();

function Button(props) {

    const handleClick = (event) => {
        event.preventDefault();
        window.open(props.link, '_blank');
    }

    return (
        <button className={props.style} onClick={handleClick}>{props.text}</button>
    );
}

const isWithinDateRange = () => {
    const currentDate = new Date();
    const startDate = new Date("2023-11-23T23:59:00");
    const endDate = new Date("2023-11-27T23:59:00"); // 6:30 PM
    return currentDate >= startDate && currentDate <= endDate;
};

// *************************************

function ButtonTresSecciones(props) {
    const [buttonText, setButtonText] = React.useState(props.text);
    const clickInProgressRef = React.useRef(false);

    const handleClickTresSecciones = (event) => {
        event.preventDefault();

        if (!clickInProgressRef.current) {
            clickInProgressRef.current = true;
            window.open(props.link, '_blank');
        }
    };

    const updateButtonText = () => {
        if (props.mobileText && window.innerWidth <= 768) {
            setButtonText(props.mobileText);
        } else {
            setButtonText(props.text);
        }
    };

    React.useEffect(() => {
        updateButtonText();
        window.addEventListener("resize", updateButtonText);

        return () => {
            window.removeEventListener("resize", updateButtonText);
        };
    }, []);

    React.useEffect(() => {
        const resetClickInProgress = () => {
            clickInProgressRef.current = false;
        };

        window.addEventListener("beforeunload", resetClickInProgress);
        return () => {
            window.removeEventListener("beforeunload", resetClickInProgress);
        };
    }, []);

    return (
        <button id={props.id} className={props.style} onClick={handleClickTresSecciones}>
            {buttonText}
        </button>
    );
}
function Ofertas() {
    const path = window.location.pathname;

    if (path === "/flights/") {
        return (
            <>
                <div className="main__container_secciones">
                    <div className="offer-title">
                        <div class="text-left">
                            <h2 class="title_h2"><b>Más ofertas en Multitravel.com</b>
                            </h2>
                        </div>
                    </div>
                    <div className="main__container_app_components__ofertas__">
                        <Secciones
                            boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-alojamiento.webp"
                            boxs_ofertas_text="Alojamientos"
                            btn_link="https://ar.multitravel.com/hotels/"
                        />
                        <Secciones
                            boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-paquetes.webp"
                            boxs_ofertas_text="Paquetes"
                            btn_link="https://ar.multitravel.com/insurances/"
                        />
                        <Secciones
                            boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-asistencia.webp"
                            boxs_ofertas_text="Asistencias"
                        />
                    </div>
                </div>
            </>
        );
    } else if (path === "/hotels/") {
        return (
            <>
                <div className="main__container_secciones">
                    <div class="offer-title">
                        <div class="text-left">
                            <h2 class="title_h2"><b>Más ofertas en Multitravel.com</b>
                            </h2>
                        </div>
                    </div>
                    <div className="main__container_app_components__ofertas__">
                        <Secciones
                            boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-paquetes.webp"
                            boxs_ofertas_text="Paquetes"
                            btn_link="https://ar.multitravel.com/packages/flighthotel/"
                        />
                        <Secciones
                            boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-vuelo.webp"
                            boxs_ofertas_text="Vuelos"
                            btn_link="https://ar.multitravel.com/flights/"
                        />
                        <Secciones
                            boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-asistencia.webp"
                            boxs_ofertas_text="Asistencias"
                            btn_link="https://ar.multitravel.com/insurances/"
                        />
                    </div>
                </div>
            </>
        );
    } else if (path === "/packages/flighthotel/") {
        return (
            <>
                <div className="main__container_secciones">
                    <div class="offer-title">
                        <div class="text-left">
                            <h2 class="title_h2"><b>Más ofertas en Multitravel.com</b>
                            </h2>
                        </div>
                    </div>
                    <div className="main__container_app_components__ofertas__">
                        <Secciones
                            boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-alojamiento.webp"
                            boxs_ofertas_text="Alojamientos"
                            btn_link="https://ar.multitravel.com/hotels/"
                        />
                        <Secciones
                            boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-vuelo.webp"
                            boxs_ofertas_text="Vuelos"
                            btn_link="https://ar.multitravel.com/flights/"
                        />
                        <Secciones
                            boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-asistencia.webp"
                            boxs_ofertas_text="Asistencias"
                            btn_link="https://ar.multitravel.com/insurances/"
                        />
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="main__container_secciones">
                    <div class="offer-title">
                        <div class="text-left">
                            <h2 class="title_h2"><b>Más ofertas en Multitravel.com</b>
                            </h2>
                        </div>
                    </div>
                    <div className="main__container_app_components__ofertas__">
                        <Secciones
                            boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-alojamiento.webp"
                            boxs_ofertas_text="Alojamientos"
                            btn_link="https://ar.multitravel.com/hotels/"
                        />
                        <Secciones
                            boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-vuelo.webp"
                            boxs_ofertas_text="Vuelos"
                            btn_link="https://ar.multitravel.com/flights/"
                        />
                        <Secciones
                            boxs_ofertas_img="https://multitravelcom.github.io/MT/Secciones/EnTodo/product-paquetes.webp"
                            boxs_ofertas_text="Paquetes"
                            btn_link="https://ar.multitravel.com/packages/flighthotel/"
                        />
                    </div>
                </div>
            </>
        );
    }
}
function Secciones({ boxs_ofertas_img, boxs_ofertas_text, btn_link }) {
    return (
        <>
            <div className="main__container__ofertas__secciones">
                <div className="main__container__ofertas__secciones__img">
                    <img src={boxs_ofertas_img}></img>
                </div>
                <div className="main__container__ofertas__secciones__text">
                    <p>{boxs_ofertas_text}</p>
                </div>
                <ButtonTresSecciones
                    style="btn btnStyleOfertas"
                    link={btn_link}
                    text="Ver más"
                    mobileText=">"
                />
            </div>
        </>
    );
}
function Boxs({
    text_h2_pagos,
    text_p_pagos,
    text_position,
    position_img,
    boxs_pagos_img,
    boxs_pagos_img_mobile,
    btn_position,
    boxs_button_link,

}) {
    return (
        <div className="main__container__boxs__pagos">
            <div className={`main__container__boxs__pagos__text ${text_position}`}>
                <h2>{text_h2_pagos}</h2>
                <p>{text_p_pagos}</p>
            </div>
            <div className={`main__container__boxs__pagos__img ${position_img}`}>
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet={boxs_pagos_img}
                    />
                    <source
                        media="(min-width: 768px) and (max-width: 1023px)"
                        srcSet={boxs_pagos_img}
                    />
                    <source
                        media="(max-width: 767px)"
                        srcSet={boxs_pagos_img_mobile}
                    />
                    <img src={boxs_pagos_img}></img>
                </picture>
            </div>
            <Button
                style={`btn btnStylePagos ${btn_position}`}
                link={boxs_button_link}
                text="Descubrir"
            />
        </div>
    );
}

function Pagos() {
    return (
        <div className="main__container_pagos_boxes">
            <Boxs
                text_h2_pagos="Vos decidís"
                text_p_pagos="Encontrá todos los medios de pagos exclusivos para vos."
                position_img="boxs_right"
                btn_position="btnStylePagos__left"
                boxs_pagos_img="https://multitravelcom.github.io/components-ladings/img/MedisodePago-Desktop.png"
                boxs_pagos_img_mobile="https://multitravelcom.github.io/components-ladings/img/MedisodePago-Mobile.png"
                text_position="text_position__left"
                boxs_button_link="https://ar.multitravel.com/medios-de-pago"
            />
            <Boxs
                text_h2_pagos="Quienes somos"
                text_p_pagos="Conoce nuestro equipo y nuestra pasión."
                position_img="boxs_left"
                btn_position="btnStylePagos__right"
                boxs_pagos_img="https://multitravelcom.github.io/components-ladings/img/MedisodePago-Desktop2.png"
                boxs_pagos_img_mobile="https://multitravelcom.github.io/components-ladings/img/MedisodePago-Mobile2.png"
                text_position="text_position__right"
                boxs_button_link="https://ar.multitravel.com/quienes-somos"
            />
        </div>
    );
}

const Redes = () => {
    const [isImage1, setImage1] = React.useState(true);
    const [backgroundColor, setBackgroundColor] = React.useState("#2A91EB");
    const [text, setText] = React.useState({
        title: "¡SEGUINOS EN NUESTRAS REDES SOCIALES!",
        subtitle: "DESCUBRÍ ANTES QUE NADIE OFERTAS EXCLUSIVAS",
    });

    React.useEffect(() => {
        if (isWithinDateRange()) {
            setText({
                title: "¡SEGUINOS EN NUESTRAS REDES SOCIALES!",
                subtitle: "APROVECHA LAS PROMOS EXCLUSIVAS DEL BLACK FRIDAY",
            });
            setBackgroundColor("black");
            // setImage1(!isImage1);
        } else {
            setText({
                title: "¡SEGUINOS EN NUESTRAS REDES SOCIALES!",
                subtitle: "DESCUBRÍ ANTES QUE NADIE OFERTAS EXCLUSIVAS",
            });
            setBackgroundColor("#2A91EB")
        }
    }, []);

    const subtitleClassName = isWithinDateRange() ? "subTextColorCyber" : "textColorOriginal";

    return (
        <div className="main__container__redes" style={{ backgroundColor: backgroundColor }}>
            <div className="main__container__redes__img">
                {isImage1 ? (
                    <img
                        src="https://multitravelcom.github.io/components-ladings/img/Imagen1.png"
                        className="main__container__redes__img_left"
                        alt="Imagen1"
                    />
                ) : (
                    <img
                        src="https://multitravelcom.github.io/components/MULT225/img/GirlCyberMonday.png"
                        className="main__container__redes__img_left--event"
                        alt="Imagen2"
                    />
                )}
            </div>
            <div className="main__container__redes__text">
                <h2>{text.title}</h2>
                <p className={subtitleClassName}>{text.subtitle}</p>
            </div>
            <div className="main__container__redes__img_right">
                <div className="main__container__redes__img_right__fb redes__img_circle">
                    <a href="https://www.facebook.com/multitravelcom1?mibextid=ZbWKwL" target="_blank" style={{ display: "flex" }}>
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="Facebook svg" clip-path="url(#clip0_72_6187)">
                                <g id="g10">
                                    <g id="g12">
                                        <path
                                            id="path14"
                                            d="M30 14.9996C30 6.71533 23.2843 -0.000392914 15 -0.000392914C6.71572 -0.000392914 0 6.71533 0 14.9996C0 22.4865 5.48528 28.6921 12.6562 29.8174V19.3355H8.84766V14.9996H12.6562V11.6949C12.6562 7.93554 14.8956 5.85898 18.322 5.85898C19.9631 5.85898 21.6797 6.15195 21.6797 6.15195V9.84336H19.7882C17.9249 9.84336 17.3438 10.9996 17.3438 12.1858V14.9996H21.5039L20.8389 19.3355H17.3438V29.8174C24.5147 28.6921 30 22.4865 30 14.9996Z"
                                            fill="#1877F2"
                                        />
                                        <path
                                            id="path16"
                                            d="M20.8389 19.3359L21.5039 15H17.3438V12.1862C17.3438 11 17.9249 9.84375 19.7882 9.84375H21.6797V6.15234C21.6797 6.15234 19.9631 5.85938 18.322 5.85938C14.8956 5.85938 12.6563 7.93594 12.6563 11.6953V15H8.84766V19.3359H12.6563V29.8178C13.4199 29.9376 14.2027 30 15 30C15.7973 30 16.5801 29.9376 17.3438 29.8178V19.3359H20.8389Z"
                                            fill="transparent"
                                        />
                                    </g>
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_72_6187">
                                    <rect width="30" height="30" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
                <div className="main__container__redes__img_right__ins redes__img_circle">
                    <a href="https://www.instagram.com/multitravelcom" target="_blank" style={{ display: "flex" }}>
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.625 0H9.375C6.8886 0 4.50403 0.98772 2.74587 2.74587C0.98772 4.50403 0 6.8886 0 9.375V20.625C0 23.1114 0.98772 25.496 2.74587 27.2541C4.50403 29.0123 6.8886 30 9.375 30H20.625C23.1114 30 25.496 29.0123 27.2541 27.2541C29.0123 25.496 30 23.1114 30 20.625V9.375C30 6.8886 29.0123 4.50403 27.2541 2.74587C25.496 0.98772 23.1114 0 20.625 0ZM27.1875 20.625C27.1875 24.2437 24.2437 27.1875 20.625 27.1875H9.375C5.75625 27.1875 2.8125 24.2437 2.8125 20.625V9.375C2.8125 5.75625 5.75625 2.8125 9.375 2.8125H20.625C24.2437 2.8125 27.1875 5.75625 27.1875 9.375V20.625Z"
                                fill="url(#paint0_linear_2415_5285)"
                            />
                            <path
                                d="M20.625 0H9.375C6.8886 0 4.50403 0.98772 2.74587 2.74587C0.98772 4.50403 0 6.8886 0 9.375V20.625C0 23.1114 0.98772 25.496 2.74587 27.2541C4.50403 29.0123 6.8886 30 9.375 30H20.625C23.1114 30 25.496 29.0123 27.2541 27.2541C29.0123 25.496 30 23.1114 30 20.625V9.375C30 6.8886 29.0123 4.50403 27.2541 2.74587C25.496 0.98772 23.1114 0 20.625 0ZM27.1875 20.625C27.1875 24.2437 24.2437 27.1875 20.625 27.1875H9.375C5.75625 27.1875 2.8125 24.2437 2.8125 20.625V9.375C2.8125 5.75625 5.75625 2.8125 9.375 2.8125H20.625C24.2437 2.8125 27.1875 5.75625 27.1875 9.375V20.625Z"
                                fill="url(#paint1_linear_2415_5285)"
                            />
                            <path
                                d="M15 7.5C13.0109 7.5 11.1032 8.29018 9.6967 9.6967C8.29018 11.1032 7.5 13.0109 7.5 15C7.5 16.9891 8.29018 18.8968 9.6967 20.3033C11.1032 21.7098 13.0109 22.5 15 22.5C16.9891 22.5 18.8968 21.7098 20.3033 20.3033C21.7098 18.8968 22.5 16.9891 22.5 15C22.5 13.0109 21.7098 11.1032 20.3033 9.6967C18.8968 8.29018 16.9891 7.5 15 7.5ZM15 19.6875C13.7573 19.686 12.5658 19.1917 11.6871 18.3129C10.8083 17.4342 10.314 16.2427 10.3125 15C10.3125 12.4144 12.4162 10.3125 15 10.3125C17.5838 10.3125 19.6875 12.4144 19.6875 15C19.6875 17.5838 17.5838 19.6875 15 19.6875Z"
                                fill="url(#paint2_linear_2415_5285)"
                            />
                            <path
                                d="M23.0625 7.93687C23.6144 7.93687 24.0619 7.48944 24.0619 6.9375C24.0619 6.38556 23.6144 5.93813 23.0625 5.93813C22.5106 5.93813 22.0631 6.38556 22.0631 6.9375C22.0631 7.48944 22.5106 7.93687 23.0625 7.93687Z"
                                fill="url(#paint3_linear_2415_5285)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_2415_5285"
                                    x1="2.745"
                                    y1="27.255"
                                    x2="27.255"
                                    y2="2.745"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#FFC107" />
                                    <stop offset="0.507" stop-color="#F44336" />
                                    <stop offset="0.99" stop-color="#B604EE" />
                                </linearGradient>
                                <linearGradient
                                    id="paint1_linear_2415_5285"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="16"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#7932F8" />
                                    <stop offset="1" stop-color="#ED1C69" stop-opacity="0.09" />
                                </linearGradient>
                                <linearGradient
                                    id="paint2_linear_2415_5285"
                                    x1="4.395"
                                    y1="25.605"
                                    x2="25.605"
                                    y2="4.395"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#FFC107" />
                                    <stop offset="0.507" stop-color="#F44336" />
                                    <stop offset="0.99" stop-color="#B604EE" />
                                </linearGradient>
                                <linearGradient
                                    id="paint3_linear_2415_5285"
                                    x1="22.3556"
                                    y1="7.64473"
                                    x2="23.7694"
                                    y2="6.23098"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#FFC107" />
                                    <stop offset="0.507" stop-color="#F44336" />
                                    <stop offset="0.99" stop-color="#B604EE" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </a>
                </div>
                <div className="main__container__redes__img_right__in redes__img_circle">
                    <a href="https://www.linkedin.com/company/multi-travel-com/" target="_blank" style={{ display: "flex" }}>
                        <svg
                            width="30"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.4491 20.4496H16.8931V14.8805C16.8931 13.5525 16.8694 11.8429 15.0436 11.8429C13.1915 11.8429 12.9081 13.2899 12.9081 14.7838V20.4492H9.35203V8.99689H12.7658V10.562H12.8136C13.1553 9.97782 13.649 9.49726 14.2421 9.17149C14.8352 8.84572 15.5056 8.68693 16.1819 8.71203C19.7861 8.71203 20.4506 11.0828 20.4506 14.167L20.4491 20.4496ZM5.33963 7.43144C4.93148 7.43151 4.53247 7.31055 4.19307 7.08385C3.85367 6.85715 3.58913 6.53489 3.43287 6.15783C3.27661 5.78077 3.23566 5.36584 3.31521 4.96551C3.39477 4.56517 3.59125 4.19743 3.8798 3.90876C4.16835 3.6201 4.53602 3.42348 4.93631 3.34378C5.3366 3.26408 5.75152 3.30488 6.12863 3.46101C6.50573 3.61713 6.82807 3.88158 7.05489 4.22091C7.2817 4.56025 7.40281 4.95922 7.40288 5.36738C7.40293 5.63839 7.34959 5.90675 7.24593 6.15715C7.14227 6.40754 6.99032 6.63507 6.79873 6.82674C6.60714 7.0184 6.37966 7.17045 6.1293 7.27421C5.87895 7.37796 5.61062 7.43139 5.33963 7.43144ZM7.11765 20.4496H3.5579V8.99689H7.11765V20.4496ZM22.222 0.00163516H1.77099C1.30681 -0.00360329 0.859518 0.175663 0.52744 0.500042C0.195362 0.824421 0.00566506 1.26737 0 1.73156V22.2681C0.00547117 22.7325 0.195057 23.1758 0.527123 23.5005C0.85919 23.8252 1.30658 24.0048 1.77099 23.9999H22.222C22.6873 24.0057 23.1359 23.8266 23.4693 23.5019C23.8027 23.1772 23.9936 22.7334 24 22.2681V1.73008C23.9934 1.26497 23.8024 0.821515 23.469 0.497144C23.1356 0.172773 22.6871 -0.00598143 22.222 0.000152822"
                                fill="#0A66C2"
                            />
                        </svg>
                    </a>
                </div>
                <div className="main__container__redes__img_right__yt redes__img_circle">
                    <a href="https://youtube.com/@multitravelcom9712" target="_blank" style={{ display: "flex" }}>
                        <svg
                            width="30"
                            height="22"
                            viewBox="0 0 30 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="YouTube svg" clip-path="url(#clip0_72_6225)">
                                <g id="g10">
                                    <g id="g12">
                                        <path
                                            id="path14"
                                            d="M29.3731 3.28883C29.0281 1.99409 28.0116 0.974529 26.7208 0.628506C24.3813 -0.000350952 15 -0.000352859 15 -0.000352859C15 -0.000352859 5.61874 -0.000350952 3.27919 0.628506C1.98845 0.974529 0.971857 1.99409 0.626886 3.28883C0 5.63546 0 10.5316 0 10.5316C0 10.5316 0 15.4276 0.626886 17.7744C0.971857 19.069 1.98845 20.0886 3.27919 20.4348C5.61874 21.0635 15 21.0635 15 21.0635C15 21.0635 24.3813 21.0635 26.7208 20.4348C28.0116 20.0886 29.0281 19.069 29.3731 17.7744C30 15.4276 30 10.5316 30 10.5316C30 10.5316 30 5.63546 29.3731 3.28883Z"
                                            fill="#ED1D24"
                                        />
                                        <path
                                            id="path16"
                                            d="M11.9319 14.9766L19.7728 10.5315L11.9319 6.08601V14.9766Z"
                                            fill="white"
                                        />
                                    </g>
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_72_6225">
                                    <rect width="30" height="21.0638" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

function App() {
    return (
        <>
            <div className="main__container_app_components">
                <div className="main__container_app_components__backBlue">
                    <Redes />
                    {/* <Pagos /> */}
                </div>
                <div className="main__container_app_components____seccion__ofertas">
                    <Ofertas />
                </div>
            </div>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('rootSeccion')).render(<App />);