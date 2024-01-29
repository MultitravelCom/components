
function ocultarArrowButtonsCarrousels() {
    
const arrowLeft1 = document.querySelectorAll('.carrusel__anterior.btnLeft');
arrowLeft1.forEach(element => {
    element.style.display = 'none';
});

const arrowLeft2 = document.querySelectorAll('.carrusel__anterior.btnLeft2');
arrowLeft2.forEach(element => {
    element.style.display = 'none';
});

const arrowLeft3 = document.querySelectorAll('.carrusel__anterior.btnLeft3');
arrowLeft3.forEach(element => {
    element.style.display = 'none';
});

const arrowRight1 = document.querySelectorAll('.carrusel__anterior.btnRight');
arrowRight1.forEach(element => {
    element.style.display = 'none';
});

const arrowRight2 = document.querySelectorAll('.carrusel__anterior.btnRight');
arrowRight2.forEach(element => {
    element.style.display = 'none';
});

const arrowRight3 = document.querySelectorAll('.carrusel__anterior.btnRight');
arrowRight3.forEach(element => {
    element.style.display = 'none';
});

}
document.addEventListener("DOMContentLoaded", function () {
    ocultarArrowButtonsCarrousels();

})