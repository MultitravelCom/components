function cerrarBanner() {
  bannerToastify.style.display = 'none';
}

window.onload = function () {
  // Verificar la condición de la URL
  if (window.location.href.indexOf('/results.aspx?searchSessionID=') !== -1) {
    let bannerToastify = document.createElement('div');
    bannerToastify.className = 'custom-div';
    bannerToastify.innerHTML = `
      <img src="https://multitravelcom.github.io/MT/Secciones/Popup-Precio/img-popup.jpg" alt="Imagen" class="custom-img">
      <div class="custom-content-botton" onclick="cerrarBanner()">X</div>
      <div class="custom-content">
        <h2>Lo que ves, es lo que pagás</h2>
        <p>Precios finales en todos nuestros productos, impuestos incluidos. Sin costos extras en aeropuerto o destino.</p>
      </div>
    `;

    Toastify({
      node: bannerToastify,
      duration: 10000,
      gravity: 'bottom',
      position: 'left',
      style: {
        background: '#2096ff',
        maxWidth: '454px',
        height: '112px',
        padding: '16px',
        borderRadius: '8px',
        border: '1px solid #cccccc',
      },
      onClick: function () {
        cerrarBanner();
      }
    }).showToast();
  }
};