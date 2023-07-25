/*
  Función para ver si ya se cambio el elemento y no volver a cambiarlo
*/
function checkIfFirstTimeChanging(elementsToCheck, type){
if (type === "description") {
  if (!elementsToCheck.classList.contains('class_changed_description') ) {
    elementsToCheck.classList.add('class_changed_description');
    return true;
  }
}
else if (type === "order"){
  if (!elementsToCheck.classList.contains('class_changed_order') ) {
    elementsToCheck.classList.add('class_changed_order');
    return true;
  }
}
else if (type === "description_selected"){
  if (!elementsToCheck.classList.contains('class_changed_description_selected') ) {
    elementsToCheck.classList.add('class_changed_description_selected');
    return true;
  }
}
return false;
}


function changeDescription() {
  const elementsSinEscalas = document.querySelectorAll('.flight-result__stops, .flight-selection__stops');
  // Step 2: Iterate through each occurrence -
  elementsSinEscalas.forEach(element => {
    if(checkIfFirstTimeChanging(element,"description")){
    // Step 3: Hide the button
    const button = element.querySelector('.flight-result__segments-toggle, .flight-selection__segments-toggle');
    button.style.display = 'none';
    //Step 4: Insert new stops/escalas image
    const escalasDiv = document.createElement('div');
    escalasDiv.classList.add('glyphicon', 'glyphicon-miles');
    escalasDiv.alt = 'Image Description';
    // Step 5: Insert the new image element
    element.insertBefore(escalasDiv, button);
    }
  });
}

/*
  Dependiendo de si hay o no baggage se agrega "0" baggage 
*/
function checkIfTheresZeroBaggage(resultInfoElement) {
  const baggageElement = resultInfoElement.querySelector('.flight-result__baggage, .flight-selection__baggage');
  if(!baggageElement){
   // Step 1: Create the outermost <span> element with the class "flight-result__baggage"
  const outerSpan = document.createElement("span");
  outerSpan.classList.add("flight-result__baggage");
  // Step 2: Create the innermost <span> element with the class "glyphicon glyphicon-baggage"
  const innerSpan = document.createElement("span");
  innerSpan.classList.add("glyphicon", "glyphicon-baggage");
  // Step 3: Set the title attribute for the innermost <span> element
  innerSpan.setAttribute("data-toggle", "tooltip");
  innerSpan.setAttribute("data-placement", "top");
  innerSpan.setAttribute("title", "Included 1 Bagagem (LUGG)");
  // Set the text content of the innermost <span> element
  const innerSpanText = document.createElement("span");
  innerSpanText.textContent = "× 0";
  // Step 4: Append the innermost <span> element to the outermost <span> element
  outerSpan.appendChild(innerSpan);
  outerSpan.appendChild(innerSpanText);
  //we check to check if  in result duration there is already a baggage span
  const durationElementDiv = resultInfoElement.querySelector('.flight-result__duration');
  if(durationElementDiv){
    durationElementDiv.appendChild(outerSpan);
  }else{
    // Now you have the entire HTML element programmatically created. You can append it to an existing element in your HTML, for example:
    resultInfoElement.appendChild(outerSpan);
  }
  }
}

/*
  reordena los elementos dentro de .flight-result__info, .flight-selection__info
*/
function changeOrderOfDescriptionElements() {
  const elementsDescription = document.querySelectorAll('.flight-result__info, .flight-selection__info');

  // Step 2: Iterate through each occurrence
  elementsDescription.forEach(element => {
    //next line is to be able to use absolute position in last child (dropdown)
    if(checkIfFirstTimeChanging(element, "order")){
      checkIfTheresZeroBaggage(element);
      // Get references to the child div elements
      const aerolinea = element.querySelector('.flight-result__airline');
      const duracion = element.querySelector('.flight-result__duration, .flight-selection__duration');
      const escalas = element.querySelector('.flight-result__stops, .flight-selection__stops');
      // Append the child div elements in the desired order
      if(aerolinea)
      element.insertBefore(duracion, aerolinea);
      element.insertBefore(escalas,duracion);

      /*
      Create empty div so it takes up empty space with flex grow property
      */
      const emptyDiv = document.createElement('div');
      emptyDiv.classList.add('flight-info__empty-div');
      // Get the first child element of the container
      const firstChild = element.firstChild;
      // Insert the empty div before the first child element inside the container
      element.insertBefore(emptyDiv, firstChild);
      copyButtonAndMove(element);
    }
  });
}

/*
  La funcion obtiene los elementos Sin Escala para cambiar el icono dropdown por el de escalas"
*/
function copyButtonAndMove(element) {
  
  const escalas = element.querySelector('.flight-result__stops, .flight-selection__stops');
  copiaEscalas = escalas.cloneNode(true);
  copiaEscalas.classList.add('modified_blue_dropdown');
  const imageChildElement = copiaEscalas.querySelector('.glyphicon-miles');
  imageChildElement.style.display = 'none';
  const button = copiaEscalas.querySelector('.flight-result__segments-toggle, .flight-selection__segments-toggle');
  button.style.display = 'inline-block';
  for (let i = 0; i < copiaEscalas.childNodes.length; i++) {
    if (copiaEscalas.childNodes[i].nodeType === Node.TEXT_NODE) {
    copiaEscalas.removeChild(copiaEscalas.childNodes[i]);
    }
  }
  if (button.classList.contains('flight-selection__segments-toggle')) {
    copiaEscalas.style.margin= '0rem 1rem';
    const newText = document.createTextNode('Ver detalles');
    button.style.marginLeft = '0.5rem';
    // Insert the new text node after the button element
    copiaEscalas.insertBefore(newText, button);
  }
  copiaEscalas.style.textAlign= 'right'; 
  copiaEscalas.style.flexGrow= '1'; 
  element.appendChild(copiaEscalas);
}
function changeDescriptionElementFunctions() {
  changeDescription();
  changeOrderOfDescriptionElements();
}

  function observeElementChanges(targetClasses, callback) {
    const observer = new MutationObserver((mutationsList, observer) => {
      for (let mutation of mutationsList) {
        if (
          mutation.type === 'childList' ||
          mutation.type === 'attributes' ||
          mutation.type === 'characterData'
        ) {
          const addedNodes = mutation.addedNodes;
          const removedNodes = mutation.removedNodes;
          
          if (
            addedNodes.length > 0 ||
            removedNodes.length > 0 ||
            mutation.type === 'attributes'
          ) {
            for (let node of addedNodes) {
              if (
                node.nodeType === Node.ELEMENT_NODE &&
                targetClasses.some((targetClass) => node.matches(targetClass))
              ) {
                callback(); // Perform your desired actions for each change
              }
            }
          }
        }
      }
    });
  
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });
  }
  /*
    Tiene la logica para volver a repetir el scrip cada cierto tiempo hasta que aparezca el div que se quiere modificar
  */
  function onDivAdded(mutationsList, repetition) {
  mutationsList.forEach((mutation) => {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeName === 'DIV') {
          // Call your function or perform any action here
          changeDescriptionElementFunctions();
        }
      });
    }
  });

  const elements = document.querySelectorAll('.flight-selection');
    if (elements.length === 0 ) {
      if (repetition && repetition < 5000) {
      repetition +=100;
      setTimeout(()=>{onDivAdded(mutationsList,repetition)}, 100); // Retry after 100 milliseconds
      }else if  (repetition && repetition >= 3000){
        }
      else  {
        let repetition =100;
        setTimeout(()=>{onDivAdded(mutationsList,repetition)}, 100); // Retry after 100 milliseconds
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log("window.location.href ------->>>>> ", window.location.href)
  console.log("-> My URL: ", 'https://multitravel.com/flights/results.aspx')
  console.log("CONTAINS? : ", (window.location.href).toLocaleLowerCase().includes('https://www.multitravel.com/flights/results.aspx'));
  if (decodeURIComponent(window.location.href).includes('https://www.multitravel.com/flights/results.aspx')) {
    // Your script code here https://www.multitravel.com/flights/results.aspx?searchSessionID=2093016#?discount=0
    console.log('Script is running on the specific page.');
    
    const observer = new MutationObserver(onDivAdded);
    const observerConfig = { childList: true, subtree: true };
    observer.observe(document.documentElement, observerConfig);
  }
});