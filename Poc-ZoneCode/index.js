const getZoneId = () => {
    const dataValue = document.querySelector('.zone-selector-value').value;
    const numericValue = parseInt(dataValue);

    if (numericValue === 48656) {
        console.log("");
    } else {
        console.log("Default message or handle other cases");
        setTimeout(getZoneId, 1000);
    }
} 

getZoneId();