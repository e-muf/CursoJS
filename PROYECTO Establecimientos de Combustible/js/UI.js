class UI {
    constructor() {
        // Instanciar API
        this.api = new API();
        
        // Crear los markers con Layer Group
        this.markers = new L.LayerGroup();

         // Iniciar el mapa
         this.mapa = this.inicializarMapa();
    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);

         return map;
    }

    mostrarEstablecimientos() {
        this.api.obtenerDatos()
            .then(datos => {
                const resultado = datos.respuestaJSON.results;

                // Ejecutar la función para mostrar los pines
                this.mostrarPines(resultado);
            })
    }

    mostrarPines(datos) {
        // Limpiar los markers
        this.markers.clearLayers();

        // Recorrer los establecimientos
        datos.forEach(dato => {
            // Destructuring
            const {latitude, longitude, calle, regular, premium} = dato;

            // Crear popup
            const opcionesPopUp = L.popup()
                .setContent(`
                    <p>Calle: ${calle}</p>
                    <p><b>Regular:</b> ${regular}</p>
                    <p><b>Premium:</b> ${premium}</p>
                `);

            // Agregar el pin
            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(opcionesPopUp);
            this.markers.addLayer(marker);
        });

        this.markers.addTo(this.mapa);
    }

    // Buscador
    obtenerSugerencias(busqueda) {
        this.api.obtenerDatos()
            .then(datos => {
                const resultados = datos.respuestaJSON.results;

                // Enviar el JSON y la busqueda para el filtrado
                this.filtrarSugerencias(resultados, busqueda);
            })
    }

    // Filtrar sugerencias en base al input
    filtrarSugerencias(resultado, busqueda) {
        // Filtrar con filter
        const filter = resultado.filter(filtro => filtro.calle.indexOf(busqueda) !== -1);

        // Mostrar los pines
        this.mostrarPines(filter)
    }
}