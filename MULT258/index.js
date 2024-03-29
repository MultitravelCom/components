window.onload = function () {
  // Verificar la condición de la URL
  if (window.location.href.indexOf('/results.aspx?') !== -1) {
    let bannerToastify = document.createElement('div');
    bannerToastify.className = 'custom-div-pop';
    bannerToastify.innerHTML = `
      <img src="https://multitravelcom.github.io/MT/Secciones/Popup-Precio/img-popup.jpg" alt="Imagen" class="custom-img-img">
      <div class="custom-content">
        <h2>Lo que ves, es lo que pagás</h2>
        <p>Precios finales en todos nuestros productos, impuestos incluidos. Sin costos extras en aeropuerto o destino.</p>
      </div>
    `;

    Toastify({
      node: bannerToastify,
      duration: -1,
      gravity: 'bottom',
      position: 'left',
      close: true,
      style: {
        background: '#2096ff',
        maxWidth: '454px',
        height: '112px',
        padding: '16px',
        borderRadius: '8px',
        border: '1px solid #cccccc',
        cursor: "default",
      }
    }).showToast();
  }
};


{/* <link href="https://multitravelcom.github.io/components/MULT258/style.css" rel="stylesheet" />
<script type="text/babel" src="https://multitravelcom.github.io/components/MULT258/index.js"></script> */}