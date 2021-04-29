// Generador
// Un generador es una función que regresará un iterador, se deben empezar con un asterisco

function *crearGenerador() {
    yield 1;
    yield 'Nombre';
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador.next().value); // 1
console.log(iterador.next().value); // 'Nombre'
console.log(iterador.next().value); // 6
console.log(iterador.next().value); // true
console.log(iterador.next().value); // undefined

// Iterador para arreglos
function *nuevoGenerador(carrito) {
    for(let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

// Recorremos el iterador
let carritoIterador = nuevoGenerador(carrito);

// Para acceder al primer valor siempre se usa la función next()
console.log(carritoIterador.next());

