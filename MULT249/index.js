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

    const select2Span = document.querySelector('span[title="Recomendado"]');
    if (select2Span) {
        select2Span.textContent = "Más elegidos";
        select2Span.setAttribute("title", "Más elegidos");
    }

    const spanElement = document.querySelector(".select2-results__option.select2-results__option--highlighted");
    if (spanElement && spanElement.textContent.trim() === "Recomendado") {
        spanElement.textContent = "Mas elegidos";
        spanElement.setAttribute("title", "Mas elegidos");
    }

    const checkResultsListPage = () => {

        const resultsPage = document.querySelector('.results-list__page');

        if (resultsPage) {
            const resultsListPage = resultsPage.querySelectorAll('.results-list__item');

            resultsListPage.forEach(item => {
                const selectors = item.querySelectorAll('.info-card__image-holder');

                selectors.forEach(selector => {
                    selector.classList.remove('js-open-gallery');
                });
            });
        } else {
            setTimeout(checkResultsListPage, 2000);
        }
    };

    checkResultsListPage();
});