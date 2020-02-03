const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.mostrarEstablecimientos();
});

// Habilitar busquedas de establecimientos
const buscador = document.querySelector('#buscar input');
buscador.addEventListener('input', () => {
    if(buscador.value.length >= 4) {
        // Buscar en la API
        ui.obtenerSugerencias(buscador.value);
    }
    else {
        ui.mostrarEstablecimientos();
    }
});