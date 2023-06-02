window.onload = function () {
  // Crear el elemento de banner de Toastify
  let bannerToastify = document.createElement('div');
  bannerToastify.className = 'custom-div';
  bannerToastify.innerHTML =
    `
    <img src="https://multitravelcom.github.io/MT/Secciones/Popup-Precio/img-popup.jpg" alt="Imagen" class="custom-img">
    <div class="custom-content-button">X</div>
    <div class="custom-content">
      <h2>Lo que ves, es lo que pagás</h2>
      <p>Precios finales en todos nuestros productos, impuestos incluidos. Sin costos extras en aeropuerto o destino.</p>
    </div>
  `;

  Toastify({
    text: bannerToastify,
    duration: -1,
    gravity: 'top',
    position: 'left',
    close: false,
    style: {
      background: 'linear-gradient(to right, #00b09b, #96c93d)',
    },
    onClick: function () {
      // Aquí puedes agregar el código que se ejecutará cuando se haga clic en el banner
    },
    callback: function (instance) {
      // Obtener el botón de cierre personalizado
      let closeButton = bannerToastify.querySelector('.custom-content-button');

      // Agregar el evento de clic al botón de cierre
      closeButton.addEventListener('click', function () {
        instance.hideToast(); // Ocultar el banner de Toastify
      });
    }
  }).showToast();
};
