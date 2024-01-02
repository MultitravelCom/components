import React from "react";

type DataItem = {
  id: number;
  attributes: {
    Vertical: string[];
  };
};

async function fetchDataFromAPIStrapi(): Promise<DataItem[]> {
  try {
    const response = await fetch('https://strapicontent.apimultitravel.com/api/banner-top-junipers?populate=*');
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

fetchDataFromAPIStrapi();

async function procesarDatosDeAPI() {
  try {
    // Obtener los datos de la API utilizando fetchDataFromAPIStrapi
    const jsonData: any = await fetchDataFromAPIStrapi();

    // Tu código de procesamiento de datos aquí
    const result: { [key: string]: any[] } = {};

    jsonData.data.forEach((item: any) => {
      const verticals: string[] = item.attributes.Vertical;
      const ubicacion: string = item.attributes.Ubicacion;

      verticals.forEach((vertical: string) => {
        if (!result[vertical]) {
          result[vertical] = [];
        }

        const bannerData = {
          Ubicacion: ubicacion,
          content: {
            Link_Imagen: item.attributes.Link_Imagen,
            Imagen_Desktop: item.attributes.Imagen_Desktop.data[0].attributes.url,
            Imagen_Mobile: item.attributes.Imagen_Mobile.data[0].attributes.url,
          },
        };

        result[vertical].push(bannerData);
      });
    });

    // Crear la estructura de salida final
    const finalResult = Object.keys(result).map((vertical: string) => ({
      vertical,
      data: result[vertical],
    }));

    finalResult.forEach((obj) => {
      console.log(JSON.stringify(obj, null, 2));
      console.log(); // Agregar una línea en blanco para separación
    });
  } catch (error) {
    console.error("Error al procesar datos de la API:", error);
  }
}

procesarDatosDeAPI();

const scrollHandler = (event, target) => {
  event.preventDefault();

  const targetElement = document.getElementById(target);
  if (targetElement) {
      targetElement.scrollIntoView({
          behavior: "smooth",
      });
  }
}


const getImageUrlForPositionDesktop = (data, position) => {
  const positionData = data.data.find(
    (item) => item.attributes.Ubicacion === position
  );

  return positionData
    ? positionData.attributes.Imagen_Desktop.data[0].attributes.url
    : "";
};

const getImageUrlForPositionMobile = (data, position) => {
  const positionData = data.data.find(
    (item) => item.attributes.Ubicacion === position
  );
  return positionData
    ? positionData.attributes.Imagen_Mobile.data[0].attributes.url
    : "";
};

const getVerticalData = (data) => {
  const paquetesData = [];
  const homeData = [];
  const alojamientosData = [];
  const circuitosData = [];
  const actividadesData = [];
  const otrasVerticalesData = [];
  const transfersData = [];
  const insurances = [];
  const vuelosData = [];

  data.data.forEach((item) => {
    if (item.attributes && Array.isArray(item.attributes.Vertical)) {
      if (item.attributes.Vertical.includes("Paquetes")) {
        paquetesData.push(item);
      }
      if (item.attributes.Vertical.includes("Home")) {
        homeData.push(item);
      }
      if (item.attributes.Vertical.includes("Alojamientos")) {
        alojamientosData.push(item);
      }
      if (item.attributes.Vertical.includes("Circuitos")) {
        circuitosData.push(item);
      }
      if (item.attributes.Vertical.includes("Actividades")) {
        actividadesData.push(item);
      }
      if (item.attributes.Vertical.includes("Traslados")) {
        transfersData.push(item);
      }
      if (item.attributes.Vertical.includes("Asistencias")) {
        insurances.push(item);
      }
      if (item.attributes.Vertical.includes("Vuelos")) {
        vuelosData.push(item);
      }
    }
  });

  return {
    paquetesData,
    homeData,
    alojamientosData,
    circuitosData,
    actividadesData,
    otrasVerticalesData,
    transfersData,
    insurances,
    vuelosData,
  };
};

const getUrlLinkImage = (data, position) => {
  const positionData = data.data.find(
    (item) => item.attributes.Ubicacion === position
  );

  return positionData ? positionData.attributes.Link_Imagen : "";
};

const setDataForBanner = (data) => {
  const url = window.location.href;

  let imageUrlsDesktop = [];
  let imageUrlMobile = [];
  let imageUrl = [];
  let resultBanner;

  if (url.includes("/flighthotel")) {
    const paquetesData = data.paquetesData;
    imageUrlsDesktop.push(
      paquetesData[0]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlsDesktop.push(
      paquetesData[1]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlsDesktop.push(
      paquetesData[2]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      paquetesData[0]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      paquetesData[1]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      paquetesData[2]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrl.push(paquetesData[0]?.attributes?.Link_Imagen);
    imageUrl.push(paquetesData[1]?.attributes?.Link_Imagen);
    imageUrl.push(paquetesData[2]?.attributes?.Link_Imagen);
    resultBanner = { imageUrlsDesktop, imageUrlMobile, imageUrl };
    return resultBanner;
  } else if (url.includes("/hotels")) {
    // El resto de tu código permanece sin cambios
    // ... (seguir con la misma estructura para otras condiciones)
  } else {
    const home = data.homeData;
    imageUrlsDesktop.push(
      home[0]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlsDesktop.push(
      home[1]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlsDesktop.push(
      home[2]?.attributes?.Imagen_Desktop?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      home[0]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      home[1]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrlMobile.push(
      home[2]?.attributes?.Imagen_Mobile?.data[0]?.attributes?.url
    );
    imageUrl.push(home[0]?.attributes?.Link_Imagen);
    imageUrl.push(home[1]?.attributes?.Link_Imagen);
    imageUrl.push(home[2]?.attributes?.Link_Imagen);
    resultBanner = { imageUrlsDesktop, imageUrlMobile, imageUrl };
    return resultBanner;
  }
};

// *************** DETECTAR URL PARA EL ID***************
 function getBannerId() {
  const url = window.location.href;

  if (url.includes("/flighthotel")) {
    return "flighthotel";
  } else {
    return "no_flighthotel";
  }
}
// ***********************************************************

const getShowBannerStatus = () => {
  const currentUrl = window.location.href;
  const targetUrl = "https://www.multitravel.com/packages/flighthotel/";

  const isMatch = currentUrl === targetUrl;
  return isMatch;
};

const BannerLink = ({
  showPackageImages,
  scrollAncla,
  imageUrlsDesktop,
  imageUrlMobile,
  imageUrl,
}) => {
  return (
    <a
      href={imageUrl}
      target="_blank"
      onClick={(event) =>
        !showPackageImages ? scrollAncla(event, "home-sliding-offers-2") : null
      }
    >
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet={
            showPackageImages
              ? `${imageUrlsDesktop}`
              : `${imageUrlsDesktop}`
          }
        />
        <source
          media="(min-width: 768px) and (max-width: 1023px)"
          srcSet={
            showPackageImages
              ? `${imageUrlsDesktop}`
              : `${imageUrlsDesktop}`
          }
        />
        <img
          className="bannerTop__img"
          alt=""
          srcSet={
            showPackageImages
              ? `${imageUrlsDesktop}`
              : `${imageUrlMobile}`
          }
        />
      </picture>
    </a>
  );
};

const BannerContainer = ({
  bannerId,
  showPackageImages,
  scrollAncla,
  containerClassName,
  position,
  imageUrlsDesktop,
  imageUrlMobile,
  imageUrl,
}) => {
  return (
    <div id={`bannerTop__${position}_${bannerId}`} className={containerClassName}>
      <BannerLink
        showPackageImages={showPackageImages}
        scrollAncla={scrollAncla}
        imageUrlsDesktop={imageUrlsDesktop}
        imageUrlMobile={imageUrlMobile}
        imageUrl={imageUrl}
      />
    </div>
  );
};

function App() {
  const [urlIncludesPaquetes, setUrlIncludesPaquetes] =
    React.useState<boolean>(false);

  const [propsBanner, setPropsBanner] = React.useState<propsDataBanner>();
  const [shouldScroll, setShouldScroll] = React.useState(true);

  React.useEffect(() => {
    fetchData();
    setUrlIncludesPaquetes(window.location.href.includes("Paquetes"));
    setShouldScroll(false);
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetchDataFromAPIStrapi();

      const verticalsDataSegmented = getVerticalData(data);
      const propsForBanner = setDataForBanner(verticalsDataSegmented);
      setPropsBanner(propsForBanner);
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };

  const bannerId = getBannerId();
  const showBanner = getShowBannerStatus();
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="container-fluid main__container__bannerTop scroll-mobile">
      <>
        {isMobile ? (
          <>
            <BannerContainer
              bannerId={`bannerTop__left_${bannerId}`}
              showPackageImages={false}
              scrollAncla={(event) =>
                shouldScroll && scrollHandler(event, "home-sliding-offers-2")
              }
              containerClassName="main__container_left"
              position="left"
              imageUrlsDesktop={propsBanner?.imageUrlsDesktop[1]}
              imageUrlMobile={propsBanner?.imageUrlMobile[1]}
              imageUrl={propsBanner?.imageUrl[1]}
            />
            <BannerContainer
              bannerId={`bannerTop__center_${bannerId}`}
              showPackageImages={false}
              scrollAncla={(event) =>
                shouldScroll && scrollHandler(event, "home-sliding-offers-2")
              }
              containerClassName="main__container_center"
              position="center"
              imageUrlsDesktop={propsBanner?.imageUrlsDesktop[0]}
              imageUrlMobile={propsBanner?.imageUrlMobile[0]}
              imageUrl={propsBanner?.imageUrl[0]}
            />
            <BannerContainer
              bannerId={`bannerTop__right_${bannerId}`}
              showPackageImages={false}
              scrollAncla={(event) =>
                shouldScroll && scrollHandler(event, "home-sliding-offers-2")
              }
              containerClassName="main__container_right"
              position="right"
              imageUrlsDesktop={propsBanner?.imageUrlsDesktop[2]}
              imageUrlMobile={propsBanner?.imageUrlMobile[2]}
              imageUrl={propsBanner?.imageUrl[2]}
            />
          </>
        ) : (
          <>
            <BannerContainer
              bannerId={`bannerTop__left_${bannerId}`}
              showPackageImages={false}
              scrollAncla={(event) =>
                shouldScroll && scrollHandler(event, "home-sliding-offers-2")
              }
              containerClassName="main__container_left"
              position="left"
              imageUrlsDesktop={propsBanner?.imageUrlsDesktop[0]}
              imageUrlMobile={propsBanner?.imageUrlMobile[0]}
              imageUrl={propsBanner?.imageUrl[0]}
            />
            <BannerContainer
              bannerId={`bannerTop__center_${bannerId}`}
              showPackageImages={false}
              scrollAncla={(event) =>
                shouldScroll && scrollHandler(event, "home-sliding-offers-2")
              }
              containerClassName="main__container_center"
              position="center"
              imageUrlsDesktop={propsBanner?.imageUrlsDesktop[1]}
              imageUrlMobile={propsBanner?.imageUrlMobile[1]}
              imageUrl={propsBanner?.imageUrl[1]}
            />
            <BannerContainer
              bannerId={`bannerTop__right_${bannerId}`}
              showPackageImages={false}
              scrollAncla={(event) =>
                shouldScroll && scrollHandler(event, "home-sliding-offers-2")
              }
              containerClassName="main__container_right"
              position="right"
              imageUrlsDesktop={propsBanner?.imageUrlsDesktop[2]}
              imageUrlMobile={propsBanner?.imageUrlMobile[2]}
              imageUrl={propsBanner?.imageUrl[2]}
            />
          </>
        )}
      </>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("BannerTop"));
