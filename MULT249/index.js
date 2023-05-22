document.addEventListener("DOMContentLoaded", function () {
    const selectElement = document.querySelector(".results-list__order-by-selector");
    const optionElements = selectElement.querySelectorAll('option');

    const optionsElements = document.querySelectorAll('.select2-results__option');

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

    optionsElements.forEach(function (optionElement) {
        if (optionElement.textContent.trim() === "Recomendado") {
            optionElement.textContent = "Más elegidos";
        }
    });

    const lastTwoOptions = Array.from(optionElements).slice(-2);
    lastTwoOptions.forEach(function (optionElement) {
        optionElement.style.display = "none";
    });
});