let bannerToastify = document.createElement('div');
bannerToastify.className = 'custom-div';
bannerToastify.innerHTML =
    `
  <img src="ruta-de-la-imagen.jpg" alt="Imagen" class="custom-img">
  <div class="custom-content">
    <h2>Lo que ves, es lo que pagás</h2>
    <p>Precios finales en todos nuestros productos, impuestos incluidos. Sin costos extras en aeropuerto o destino.</p>
  </div>
`


Toastify({
    node: bannerToastify,
    duration: 10000,
    gravity: 'bottom', // Puedes ajustar la posición según tus necesidades
    position: 'right', // Puedes ajustar la posición según tus necesidades
    backgroundColor: '#2096ff'
}).showToast();