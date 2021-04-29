// Instanciar clases
const eventbrite = new EventBrite();
const ui = new Interfaz();

// Listener al boton buscar
document.getElementById('buscarBtn').addEventListener('click', event => {
    event.preventDefault();

    // Leer el texto de input buscar
    const textoBuscador = document.getElementById('evento').value;

    // Leer el select
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

    // Revisar que haya algo escrito en el buscador
    if(textoBuscador !== '') {
        // Cuando si hay una busqueda
        eventbrite.obtenerEventos(textoBuscador, categoriaSeleccionada)
        .then(data => {
            if(data.eventos.events.length > 0) {
                // Si hay eventos mostrar el resultado
                ui.mostrarEventos(data.eventos);
            }
            else {
                ui.mostrarMensaje('No se ha encontrado ningun evento', 'alert alert-warning mt-4')
            }
        })
    }
    else {
        // Mostrar un mensaje de error
        ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4');
    }
});