class EventBrite {

    constructor() {
        // Consigue tu token privado en www.eventbrite.com
        this.token_auth = 'Aquí pon tu token :D';
        this.ordenar = 'date';
    }

    // Mostrar resultados de la busqueda
    async obtenerEventos(eventoSeleccionado, categoria) {
        const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventoSeleccionado}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`);

        const eventos = await respuestaEvento.json();

        return {
            eventos
        }
    }

    // Obtiene las categorias en init
    async obtenerCategorias() {

        // Consultar las categorias en la REST API
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        // Esperar la respuesta de las categorias y devolver json
        const categorias = await respuestaCategorias.json();

        // Devolver el resultado
        return {
            categorias
        }
    }

}