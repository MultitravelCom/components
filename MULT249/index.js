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
        if (optionElement.value === "nombre" || optionElement.value === "nombreInv") {
            optionElement.style.display = "none";
        }
    });

    const liElement = document.querySelector("#select2-bar9-container");
    if (liElement && liElement.textContent.trim() === "Recomendado") {
        liElement.textContent = "Mas elegidos";
    }

    const spanElement = document.querySelector(".select2-results__option.select2-results__option--highlighted");
    if (spanElement && spanElement.textContent.trim() === "Recomendado") {
        spanElement.textContent = "Mas elegidos";
        spanElement.setAttribute("title", "Mas elegidos");
    }
});