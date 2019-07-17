class API {
    constructor(apikey) {
        this.apikey = apikey;
    }

    // Obtener todas las monedas
    async getCurrencyAPI() {
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

        // Fetch al API
        const getCurrencyURL = await fetch(url);

        // Respuesta en JSON
        const currency = await getCurrencyURL.json();

        return {
            currency
        }
    }

    async getData(currency, cryptoCurrency) {

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}&api_key=${this.apikey}`;

        // Consultar en REST API
        const urlGetData = await fetch(url);
        const result = await urlGetData.json();

        return {
            result
        }
    }
}