function cambiarTextoBoton() {
    let button = document.querySelector('.result-option__book-button');

    if (button) {
        button.textContent = 'Comprar';
        return;
    }

    setTimeout(cambiarTextoBoton, 100);
}
function initializeModal() {
    const myLink = document.querySelector(".js-result-selected-action--extended-hotel-info");

    function openModal() {
        console.log("Se ha hecho clic en el botón");
        const modal = document.createElement("div");
        modal.id = "myModal";
        modal.className = "modal";
        modal.innerHTML = `
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2>Título del Modal</h2>
          <p>Contenido del Modal</p>
        </div>
      `;

        document.body.appendChild(modal);

        const closeBtn = modal.getElementsByClassName("close")[0];
        closeBtn.onclick = closeModal;

        window.onclick = function (event) {
            if (event.target == modal) {
                closeModal();
            }
        };
    }

    function closeModal() {
        const modal = document.getElementById("myModal");
        if (modal) {
            modal.parentNode.removeChild(modal);
        }
    }

    if (myLink) {
        myLink.onclick = openModal;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    initializeModal();
    cambiarTextoBoton();
});
