// ***********************************MULT-287 /Ocultar nacionalidad*************************
function ocultarNacionalidad() {
    const element = document.querySelector('label[for="hotel-searcher-nationality"]');
    const parent = element.closest('.col-xs-12.col-sm-12.col-md-3');
    parent.style.display = 'none';

    if (window.innerWidth >= 768) {
        const elementFixedProduct = document.querySelector('.searcher__fixed-product');
        const parentFixedProduct = elementFixedProduct.closest('.col-xs-12.col-sm-12.col-md-3');
        parentFixedProduct.style.width = '50%';
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    ocultarNacionalidad()
});