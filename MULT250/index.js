document.addEventListener('DOMContentLoaded', async function () {
    async function replaceImage() {
        const imageHolder = document.querySelector('.info-card__image-holder[data-title="Basia Hotel & Sushi"]');
        if (imageHolder) {
            const sources = imageHolder.querySelectorAll('source');
            sources.forEach(function (source) {
                source.srcset = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERduDqa01YWeUfD7CwPH2SD41XriCvSNKVEQ7LzXV4A-OrO2TcM5noE02qVedYE7xQLY&usqp=CAU';
            });
        } else {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Esperar 1000ms
            await replaceImage(); // Volver a llamar a la función
        }
    }

    await replaceImage();
});