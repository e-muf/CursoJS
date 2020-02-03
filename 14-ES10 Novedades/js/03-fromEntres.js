const map = new Map([ 
    ['nombre', 'Producto 1'], 
    ['precio', 20] 
]);

// Convierte a un objeto un map
const objeto = Object.fromEntries(map);
console.log(objeto);

delete objeto.precio;

console.log(objeto);