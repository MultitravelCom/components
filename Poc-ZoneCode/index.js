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

const renderBanner = () => {
    const mainContentElement = document.getElementById('main-content');

    if (mainContentElement) {
        const nuevoDivIconImg = document.createElement('div');
        mainContentElement.insertBefore(nuevoDivIconImg, mainContentElement.firstChild);

        ReactDOM.render(<BannerTopTravelSale />, nuevoDivIconImg);
    }
};

const BannerTopTravelSale = () =>{
    return (
        <>
            <div className="main__container__bannerTopTravelSale">    
            </div>
        </>
    );
};


getZoneId();
