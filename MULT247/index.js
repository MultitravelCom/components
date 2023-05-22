function initFunctionWhenSelectorAvailable() {

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
}

function observeDOM() {
    const observer = new MutationObserver(function (mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                for (let addedNode of mutation.addedNodes) {
                    if (addedNode.nodeType === Node.ELEMENT_NODE && addedNode.matches('.details-card__section.details-card__description')) {
                        observer.disconnect();
                        initFunctionWhenSelectorAvailable();
                        return;
                    }
                }
            }
        }
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
}

document.addEventListener("DOMContentLoaded", function () {
    observeDOM();
});