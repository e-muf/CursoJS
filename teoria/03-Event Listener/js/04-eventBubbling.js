// Event Bubbling
// Cuando ocurre un evento en un elemento, primero ejecuta los manejadores en él, luego en su padre y luego en otros ancestros.

const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click', function(evt) {
    console.log('Click en Card');
    evt.stopPropagation(); // Hace que las funciones de los padres ya no se realicen
});

infoCurso.addEventListener('click', function(evt) {
    console.log('Click en Info Curso');
    evt.stopPropagation();
});

agregarCarrito.addEventListener('click', function(evt) {
    console.log('Click en Agregar a Carrito');
    evt.stopPropagation();
});

// Delegation
document.body.addEventListener('click', eliminarElemento);

function eliminarElemento(evt) {
    evt.preventDefault();

    if(evt.target.classList.contains('borrar-curso')) {
        console.log(evt.target.parentElement.parentElement.remove());
    }

    if(evt.target.classList.contains('agregar-carrito')) {
        console.log('Curso Agregado');
    }
}