class Interfaz {
    
    constructor() {
        // Inicializa la app al instanciar
        this.init();

        // Leer el resultado
        this.listado = document.getElementById('resultado-eventos');
    }

    // Método para cuando inicialice la app
    init() {
        // Llamar imprimir categorias
        this.imprimirCategorias();
    }

    // Imprimir categorias
    imprimirCategorias() {
        const listaCategorias = eventbrite.obtenerCategorias()
            .then(categorias => {
                const categories = categorias.categorias.categories;

                // Seleccionar el select de categorias
                const selectCategoria = document.getElementById('listado-categorias');

                // Recorremos el arreglo y agregamos los option
                categories.forEach(categorie => {
                    const option = document.createElement('option');
                    option.value = categorie.id;
                    option.appendChild(document.createTextNode(categorie.name_localized));
                    selectCategoria.appendChild(option);
                });
            })
    }

    // Lee la respuesta de la API e imprime los resultados
    mostrarEventos(eventos) {

        // En caso de que tengamos resultados anteriores
        this.limpiarResultados();

        // Leer los eventos y agregarlos a una variable
        const listaEventos = eventos.events;

        // Crear el template de cada evento
        listaEventos.forEach(evento => {
            this.listado.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img class="img-fluid mb-2" src=${evento.logo !== null ? evento.logo.url : ''}>
                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center">${evento.name.text}</h2>
                                <p class="lead text-info">Información del evento</p>
                                <p>${evento.description.text.slice(0,280)}...</p>

                                <span class="badge badge-primary">Capacidad: ${evento.capacity === null ? '-' : evento.capacity}</span>

                                <span class="badge badge-secondary">Capacidad: ${evento.start.local}</span>
                                
                                <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        })

    }

    limpiarResultados() {
        while(this.listado.firstChild) {
            this.listado.removeChild(this.listado.firstChild);
        }
    }

    // Método para imprimir mensajes: 2 parametros, mensajes y clases
    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        div.classList = clases;

        // Agregar texto
        div.appendChild(document.createTextNode(mensaje));

        // Buscar el padre
        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 3000);
    }
}