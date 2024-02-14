document.addEventListener("DOMContentLoaded", function () {
    const selectors = [
        ".details-card__amenities.details-card__section",
        ".details-card__description.details-card__section"
        // Agrega aquí los selectores adicionales que desees
    ];

    selectors.forEach(function (selector) {
        const sections = document.querySelectorAll(selector);

        sections.forEach(function (section) {
            const content = section.querySelector(".details-card__section-content");

            // Establecer un valor predeterminado para content.style.display
            content.style.display = "none";

            section.addEventListener("click", function () {
                if (content.style.display === "none") {
                    content.style.display = "block";
                    icon.style.transform = "rotate(180deg)";
                } else {
                    content.style.display = "none";
                    icon.style.transform = "rotate(0deg)";
                }
            });

            const icon = document.createElement('div');
            icon.className = "glyphicon glyphicon-chevron-down chevron-down-hotels";
            section.appendChild(icon);
        });
    });
});
