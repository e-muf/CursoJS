class API {
    async obtenerDatos() {
        const total = 5000;

        // Obtener datos desde la API
        const datos = await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`);

        // Convertir a JSON
        const respuestaJSON = await datos.json();

        return { respuestaJSON }
    }
}