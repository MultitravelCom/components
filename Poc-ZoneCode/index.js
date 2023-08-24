// **************** Array de zonas ******************************
const zonasTravelSale = [
    42011, 149562, 42150, 161549, 42746, 43037, 43120, 43575, 43577, 44069,
    77218, 86041, 45373, 45374, 94979, 45468, 46533, 46534, 46600, 46612,
    46613, 46761, 46762, 46938, 46944, 165395, 48606, 48947, 159359, 49950,
    50194, 50272, 50590, 50767, 52645, 56214, 57378, 57820, 57888, 69865,
    75390, 76821, 77187, 78498, 78942, 82953, 84544, 89016, 165159, 165160,
    165168, 165469, 42949, 43649, 43579, 43786, 57400, 43735, 44227, 129478,
    48952, 51042, 51194, 78783, 92253
  ];
//   *************************************************************

const renderBanner = () => {
    const mainContentElement = document.getElementById('main-content');

    if (mainContentElement) {
        const nuevoDivIconImg = document.createElement('div');
        mainContentElement.insertBefore(nuevoDivIconImg, mainContentElement.firstChild);

        ReactDOM.render(<BannerTopTravelSale />, nuevoDivIconImg);
    }
};

const BannerTopTravelSale = () => {
    const bannerStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '20px',
        width: '300px',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto'
    };

    return (
        <>
            <div className="main__container__bannerTopTravelSale" style={bannerStyle}>
                <h2>Soy un banner!</h2>
            </div>
        </>
    );
};

// Funcion para obtener ZoneID.
const getZoneId = () => {
    const interval = setInterval(() => {
        const dataValueElement = document.querySelector('.zone-selector-value');

        if (dataValueElement) {
            const dataValue = dataValueElement.value;
            const numericValue = parseInt(dataValue);

            if (numericValue === 48656) {
                clearInterval(interval);
                console.log("Bariloche. ZonaCode:", numericValue);
                renderBanner();
            } else {
                clearInterval(interval);
                console.log("Not Bariloche. ZonaCode:", numericValue);
            }
        }
    }, 1000);
};

getZoneId();
