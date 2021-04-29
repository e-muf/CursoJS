// Variables

const encabezado = document.querySelector('#encabezado');

const enlaces = document.querySelectorAll('.enlace');

const boton = document.querySelector('#vaciar-carrito');

// Click
// boton.addEventListener('click', obtenerEvento);

// Double Click
// boton.addEventListener('dblclick', obtenerEvento);

// Mouse Enter, solo se puede utilizar una vez por id o clase
// boton.addEventListener('mouseenter', obtenerEvento);

// Mouse Leave, solo se puede usar una vez por id o por clase
// boton.addEventListener('mouseleave', obtenerEvento);

// Mouse Over
// boton.addEventListener('mouseover', obtenerEvento);

// Mouse Out
// boton.addEventListener('mouseout', obtenerEvento);

// Mouse down
// boton.addEventListener('mousedown', obtenerEvento);

// Mouse up
// boton.addEventListener('mouseup', obtenerEvento);

// Mouse move
encabezado.addEventListener('mousemove', obtenerEvento);

function obtenerEvento(event) {
    console.log(`Evento: ${event.type}`);
}
