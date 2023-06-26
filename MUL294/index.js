function cambiarTextoBoton() {
    let button = document.querySelector('.result-option__book-button');
  
    if (button) {
      button.textContent = 'Comprar';
      return;
    }

    setTimeout(cambiarTextoBoton, 100);
  }

  cambiarTextoBoton();