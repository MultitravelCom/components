// Lista de data-uid y sus correspondientes URLs de imagen
const dataUidMapping = {
    'GHU@JP037012': 'https://cdn0.frasess.net/es/posts/5/4/2/frases_de_rocky_245_600.jpg',
};

function findElementByUid(uidToFind) {
    // Selecciona todos los elementos dentro de results-list__page con data-uid
    const resultElements = document.querySelectorAll('.results-list__page .results-list__item [data-uid]');

    // Itera sobre cada elemento y verifica si el data-uid coincide con el que estás buscando
    resultElements.forEach(element => {
        // Obtiene el valor de data-uid
        const dataUid = element.getAttribute('data-uid');

        // Verifica si el data-uid coincide con el que estás buscando
        if (dataUid === uidToFind) {
            // Si lo encuentra, muestra un mensaje de consola y retorna el elemento
            console.log(`Elemento con data-uid ${uidToFind} encontrado.`);
            console.log(element); // Puedes omitir esta línea si no necesitas imprimir el elemento completo
            return element;
        }
    });

    // Si no se encuentra el elemento, muestra un mensaje de consola
    console.log(`Elemento con data-uid ${uidToFind} no encontrado.`);
    return null; // Retorna null si no se encuentra el elemento
}

// Llama a la función con el data-uid que estás buscando
const elementoEncontrado = findElementByUid('GHU@JP037012');