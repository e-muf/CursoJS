// Variables
const busqueda = document.querySelector('#buscador');

// Key down
// busqueda.addEventListener('keydown', obtenerEvento);

// Key up
// busqueda.addEventListener('keyup', obtenerEvento);

// Key press, lo que se está escribiendo
// busqueda.addEventListener('keypress', obtenerEvento);

// Focus, cuando se selecciona el Input
// busqueda.addEventListener('focus', obtenerEvento);

// Blur, cuando se da click fuera del Input
// busqueda.addEventListener('blur', obtenerEvento);

// Cut, cuando se corta algo Ctrl+X
// busqueda.addEventListener('cut', obtenerEvento);

// Copy, cuando se copia algo Ctrl+C
// busqueda.addEventListener('copy', obtenerEvento);

// Paste, cuando se pega algo Ctrl + V
// busqueda.addEventListener('paste', obtenerEvento);

// Input, revisa cualquier evento que se haga
busqueda.addEventListener('input', obtenerEvento);

// Change, cuando se cambia una opcion en un selector
//busqueda.addEventListener('change', obtenerEvento);


function obtenerEvento(event) {
    // console.log(busqueda.value);
    console.log(`Evento: ${event.type}`);
}