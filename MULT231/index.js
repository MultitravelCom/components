
document.addEventListener('DOMContentLoaded', function () {
    function cambiarHrefNuevoDestino() {
        const linkLogo = document.querySelector('#logo');
        if (linkLogo) {
            linkLogo.href = "https://multitravel.com.ar/";
        }
    }

    cambiarHrefNuevoDestino();
});