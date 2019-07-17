class UserInterface {

    constructor() {
        this.init();
    }

    init() {
        this.constructSelect();
    }

    constructSelect() {
        api.getCurrencyAPI()
            .then(coins => {

                const select = document.querySelector('#criptomoneda');

                for(const [key, value] of Object.entries(coins.currency.Data)) {
                    
                    // Añadir el Symbol y el Nombre como opciones
                    const option = document.createElement('option');
                    option.value = value.Symbol;
                    option.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(option);
                }
            })
    }

    showMessage(message, classes) {
        const div = document.createElement('div');
        div.className = classes;
        div.appendChild(document.createTextNode(message));

        // Seleccionar mensajes
        const divMessage = document.querySelector('.mensajes');
        divMessage.appendChild(div);

        // Mostrar contenido
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }

    // Imprime el resultado de la cotización
    showResult(result, currency, crypto) {

        // En caso de un resultado anterior, ocultarlo
        const resultadoAnterior = document.querySelector('#resultado > div');

        if(resultadoAnterior) {
            resultadoAnterior.remove();
        }

        const currencyData = result[crypto][currency];

        // Recortar digitos de precio
        let price = currencyData.PRICE.toFixed(2),
            percent = currencyData.CHANGEPCTDAY.toFixed(2),
            update = new Date(currencyData.LASTUPDATE * 1000).toLocaleDateString('es-MX');

        // Construir el template
        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El precio de ${currencyData.FROMSYMBOL} a moneda ${currencyData.TOSYMBOL} es de: $${price}</p>
                    <p>Variación último día: %${percent}</p>
                    <p>Última actualización: ${update}</p>
                </div>
            </div>
        `;

        this.spinnerControl('block');

        setTimeout(() => {
            // Insertar el resultado
            document.querySelector('#resultado').innerHTML = templateHTML;

            // Ocultar spinner
            this.spinnerControl('none');

        }, 3000);
    }

    // Spinner de carga al enviar cotización
    spinnerControl(action) {
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = action;
    }
}