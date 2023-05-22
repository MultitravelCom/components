document.addEventListener("DOMContentLoaded", function () {

    const selectores = [
        {
            selector: ".details-card__section.details-card__description"
        },
        {
            selector: ".details-card__amenities"
        }
    ];

    selectores.forEach(function (selectorObj) {
        const section = document.querySelector(selectorObj.selector);
        const content = section.querySelector(".details-card__section-content");
        const iconChevron = document.createElement('div');
        iconChevron.className = "glyphicon glyphicon-chevron-down";

        section.addEventListener("click", function () {
            if (content.style.display === "none") {
                content.style.display = "block";
                icon.style.transform = "rotate(180deg)";
            } else {
                content.style.display = "none";
                icon.style.transform = "rotate(0deg)";
            }
        });

        section.appendChild(icon);
    });
});