const targetElementUser = document.querySelector('#main-menu-features');

const buttonHTML = `
  <button type="button" class="btn features_item js-login-box-modal">
    <span class="glyphicon glyphicon-agent agentWidget" aria-hidden="true"></span>
    <span class="sr-only">Ingreso</span>
    <span class="quicklink-elem-label">Ingreso</span>
  </button>
`;

targetElementUser.insertAdjacentHTML('beforeend', buttonHTML);
