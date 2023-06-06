const targetElementUser = document.querySelector('#main-menu-features');

const buttonHTML = `
  <button type="button" class="btn">
    <span class="glyphicon glyphicon-agent agentWidget" aria-hidden="true"></span>
    <span class="sr-only">Ingreso</span>
    <span class="quicklink-elem-label">Ingreso</span>
  </button>
`;

targetElementUser.insertAdjacentHTML('beforeend', buttonHTML);
