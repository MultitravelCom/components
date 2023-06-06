document.addEventListener("DOMContentLoaded", function () {
    const selectors = [
        ".details-card__amenities .details-card__section",
        ".details-card__description.details-card__section"
        // Agrega aquí los selectores adicionales que desees
    ];

    selectors.forEach(function (selector) {
        const sections = document.querySelectorAll(selector);

        sections.forEach(function (section) {
            const content = section.querySelector(".details-card__section-content");

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


<script type="text/babel" src="https://multitravelcom.github.io/components/MULT258/index.js"></script>
<link href="https://multitravelcom.github.io/components/MULT258/style.css" rel="stylesheet" />
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css" />
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<link href="https://multitravelcom.github.io/style/General/style.css" rel="stylesheet" />
<link href="https://multitravelcom.github.io/style/Flight/style.css" rel="stylesheet" />
<link href="https://multitravelcom.github.io/style/General/styleTest.css" rel="stylesheet" />
<script src="https://multitravelcom.github.io/style/Flight/main.js"></script>
<script type="text/babel" src="https://multitravelcom.github.io/style/General/components/Equipaje/baggageComponente.js"></script>
<link href="https://multitravelcom.github.io/style/General/components/Equipaje/baggageComponenteStyle.css" rel="stylesheet" />
<link href="https://multitravelcom.github.io/components/MULT168/Modal/style.css" rel="stylesheet" />
<script type="text/babel" src="https://multitravelcom.github.io/components/MULT276/index.js"></script>
<link href="https://multitravelcom.github.io/components/MULT276/style.css" rel="stylesheet" />
<script type="text/babel" src="https://multitravelcom.github.io/components/MULT163/index.js"></script>
<link href="https://multitravelcom.github.io/components/MULT258/style.css" rel="stylesheet" />
<script src="https://multitravelcom.github.io/components/MULT163/botonUser.js"></script>
<script src="https://multitravelcom.github.io/components/MULT245/mutation-summary.js"></script>