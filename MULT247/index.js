document.addEventListener("DOMContentLoaded", function () {
    const descriptionSection = document.querySelector(".details-card__section.details-card__description");
    const content = descriptionSection.querySelector(".details-card__section-content");
    const iconDiv = document.createElement('div');
    iconDiv.className = "glyphicon glyphicon-chevron-down";

    descriptionSection.addEventListener("click", function () {
        if (content.style.display === "none") {
            content.style.display = "block";
            icon.style.transform = "rotate(180deg)";
        } else {
            content.style.display = "none";
            icon.style.transform = "rotate(0deg)";
        }
    });

    descriptionSection.appendChild(icon);
});