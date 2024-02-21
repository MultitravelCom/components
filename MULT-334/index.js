// Lista de data-uid y sus correspondientes URLs de imagen
const dataUidMapping = {
    'GHU@JP037012': 'https://cdn0.frasess.net/es/posts/5/4/2/frases_de_rocky_245_600.jpg',
    // Agrega más mapeos según sea necesario
};

// Función para reemplazar los enlaces de imagen según el data-uid
function replaceImageLinks() {
    // Selecciona todos los elementos dentro de results-list__page con data-uid
    const resultElements = document.querySelectorAll('.results-list__page [data-uid]');

    // Itera sobre cada elemento
    resultElements.forEach(element => {
        // Obtiene el valor de data-uid
        const dataUid = element.getAttribute('data-uid');

        // Verifica si el data-uid existe en el mapeo
        if (dataUidMapping[dataUid]) {
            // Obtiene el enlace de imagen asociado al data-uid
            const imageUrl = dataUidMapping[dataUid];

            // Encuentra el selector de la imagen dentro del elemento actual
            const imgElement = element.querySelector('.info-card__image img');

            // Verifica si se encontró la imagen y actualiza su src
            if (imgElement) {
                imgElement.src = imageUrl;
            }
        }
    });
}

// Llama a la función para realizar la sustitución
replaceImageLinks();