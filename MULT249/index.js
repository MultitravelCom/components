document.addEventListener("DOMContentLoaded", function () {

    const selectElement = document.querySelector(".results-list__order-by-selector");
    const optionElements = selectElement.querySelectorAll('option');

    optionElements.forEach(function (optionElement) {
        if (optionElement.value === "etiqueta") {
            optionElement.textContent = "Más elegidos";
        }
        if (optionElement.value === "precio") {
            optionElement.textContent = "Precio: menor a mayor";
        }
        if (optionElement.value === "precioDesc") {
            optionElement.textContent = "Precio: mayor a menor";
        }
        if (optionElement.value === "categoria") {
            optionElement.textContent = "Estrellas: menor a mayor";
        }
        if (optionElement.value === "categoriaInv") {
            optionElement.textContent = "Estrellas: mayor a menor";
        }
    });

    optionElements.forEach(function (optionElement) {
        if (optionElement.value === "nombre" || optionElement.value === "nombreInv") {
            optionElement.style.display = "none";
        }
    });

    function checkSelectors() {
        const select2Span = document.querySelector("#select2-order-5b-container");
        const select2Li = document.querySelector("#select2-order-ip-result-rra1-etiqueta");

        if (select2Span && select2Span.textContent.trim() === "Recomendado") {
            select2Span.textContent = "Más elegido";
            select2Span.setAttribute("title", "Más elegido");
        }

        if (select2Li && select2Li.textContent.trim() === "Recomendado") {
            select2Li.textContent = "Más elegidos";
        }

        if (!select2Span || !select2Li) {
            setTimeout(checkSelectors, 2000); // Volver a intentar después de 2000 ms (2 segundos)
        }
    }
    setTimeout(checkSelectors, 2000); // Iniciar la verificación después de 2000 ms (2 segundos) del evento "DOMContentLoaded"

});
