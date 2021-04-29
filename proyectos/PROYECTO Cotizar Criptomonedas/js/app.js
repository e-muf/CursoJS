// Consigue una llave en www.cryptocompare.com
const api = new API('Aquí pon tu llave :D');
const ui = new UserInterface();

// Leer el formulario
const form = document.querySelector('#formaulario');

// Event Listener
formulario.addEventListener('submit', event => {
    event.preventDefault();

    // Leer la moneda seleccionada
    const currencyInput = document.querySelector('#moneda');
    const currencySelected = currencyInput.options[currencyInput.selectedIndex].value;

    const cryptoInput = document.querySelector('#criptomoneda');
    const cryptoSelected = cryptoInput.options[cryptoInput.selectedIndex].value;

    // Comprobar que ambos campos tengan algo seleccionado
    if(currencySelected === '' || cryptoSelected === '') {
        // Mostrar un mensaje de error
        ui.showMessage('Seleccione ambos campos', 'alert bg-danger text-center');
    }
    else {
        // Consultar API
        api.getData(currencySelected, cryptoSelected)
            .then(data => {
                ui.showResult(data.result.RAW, currencySelected, cryptoSelected);
            }).catch(error => {
                    ui.showMessage('No se ha encontrado, intente con otro', 'alert bg-danger text-center')
                }
            )
    }
});