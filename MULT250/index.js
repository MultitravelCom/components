document.addEventListener('DOMContentLoaded', function() {
    const imageHolder = document.querySelector('.info-card__image-holder[data-title="Basia Hotel & Sushi"]');
    if (imageHolder) {
      const image = imageHolder.querySelector('img');
      if (image) {
        image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERduDqa01YWeUfD7CwPH2SD41XriCvSNKVEQ7LzXV4A-OrO2TcM5noE02qVedYE7xQLY&usqp=CAU';
      }
    }
  });