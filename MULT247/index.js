document.addEventListener("DOMContentLoaded", function() {
    const descriptionSection = document.querySelector(".details-card__section.details-card__description");
    const content = descriptionSection.querySelector(".details-card__section-content");
    const iconDiv = document.createElement('div'); 
    iconDiv.className="glyphicon glyphicon-chevron-up";

    descriptionSection.addEventListener("click", function() {
      content.style.display = (content.style.display === "none") ? "block" : "none";
    });
  });