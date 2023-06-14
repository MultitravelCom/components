function cambiarTextoMapaYBoton() {
    let sidebarElements = document.querySelectorAll('.results__sidebar .sidebar-map, .js-sidebar-map-placeholder .sidebar-map');
    sidebarElements.forEach(function (element) {
        var span = element.querySelector('span.btn.btn-secondary');
        if (span.innerText === 'Abrir mapa') {
            span.innerText = 'Ver en mapa';
        }
    });
}

document.addEventListener('DOMContentLoaded', async function () {
    cambiarTextoMapaYBoton();
});