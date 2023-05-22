document.addEventListener("DOMContentLoaded", function() {
    var descriptionSection = document.querySelector(".details-card__section.details-card__description");
    var content = descriptionSection.querySelector(".details-card__section-content");
  
    descriptionSection.addEventListener("click", function() {
      content.style.display = (content.style.display === "none") ? "block" : "none";
    });
  });