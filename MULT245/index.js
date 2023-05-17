async function aplicarClaseRecomendada() {
    const resultsListPage = document.querySelector('.results-list__page');

    if (!resultsListPage) {
        // No se encontró el elemento, espera un breve período y vuelve a intentar
        await new Promise(resolve => setTimeout(resolve, 1000));
        await aplicarClaseRecomendada();
        return; // Salir de la función para evitar ejecutar el resto del código
    }

    const items = resultsListPage.querySelectorAll('.results-list__item');

    items.forEach(item => {
        const tieneDeals = item.querySelector('.deals') !== null;
        const hotelResult = item.querySelector('.result.hotel-result');

        if (tieneDeals && hotelResult) {
            hotelResult.classList.add('alojamiento-recomendado');
            console.log(tieneDeals);
        }
    });
}

async function changeCopyMap() {
    const resultsListPage = document.querySelector('.results-list__page');
    const items = resultsListPage.querySelectorAll('.results-list__item');

    if (!resultsListPage) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        await aplicarClaseRecomendada();
        return; 
    }

    items.forEach(item => {
        const mapLink = document.querySelector('.map-link');
        const locationIcon = mapLink.querySelector('.info-card__location-icon');
        
        mapLink.textContent = 'Ver Mapa';
    });
}

document.addEventListener('DOMContentLoaded', async function () {
    await aplicarClaseRecomendada();
    await changeCopyMap();
});
