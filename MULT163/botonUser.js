const targetElementUser = document.querySelector('#main-menu-features');

const buttonHTML = `
  <button type="button" class="btn upper-menu__newsletter-button features_item js-login-box-modal btn-usd">
    <span class="glyphicon glyphicon-agent" aria-hidden="true"></span>
    <span class="sr-only">Ingreso</span>
    <span class="quicklink-elem-label">Ingreso</span>
  </button>
`;

targetElementUser.insertAdjacentHTML('beforeend', buttonHTML);

const buttonsBtnUser = targetElementUser.querySelectorAll('.btn-usd');

// Si hay más de un botón, ocultar el segundo
if (buttonsBtnUser.length > 1) {
    buttonsBtnUser[1].classList.add('hidden');
}
