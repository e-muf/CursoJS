// Sets o conjuntos
let carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco');
carrito.add('Corbata');
carrito.add('Calcetines');
carrito.add('Calcetines'); // En un conjunto si se agrega el mismo valor, solo se quedará uno

console.log(carrito);
console.log(carrito.size); // Tamaño del conjunto

let numeros = new Set([1, 2, 3, 4, 4, 5, 6, 7, 1, 2, 3, 4]);
console.log(numeros);
console.log(numeros.size);

// Comprobar que un valor exista
console.log(carrito.has('Camisa')); // true
console.log(carrito.has('camisa')); // false

// Eliminar algo del Set
carrito.delete('Calcetines');
console.log(carrito);

// Vaciar un set
numeros.clear();
console.log(numeros);

// Recorrer un Set con foreach
carrito.forEach((producto, index) => {
    // En un Set la llave y el valor sera el mismo, por lo que no se pueden acceder por posicion
    console.log(`${index} ${producto}`);
});

// Convertir un set a arreglo
const arregloCarrito = [...carrito];

console.log(arregloCarrito);

// Operaciones de Conjuntos
// JavaScript no tiene por defecto operaciones de conjunto pero su programación resulta demasiado sencilla gracias a las funciones anteriores.
Set.prototype.isSuperset = function(subset) {
    for(var elem of subset) {
        if(!this.has(elem)) {
            return false;
        }
    }
    return true;
}

Set.prototype.union = function(setB) {
    var union = new Set(this);
    for(var element of setB) {
        union.add(element);
    }
    return union;
}

Set.prototype.intersection = function(setB) {
    var intersection = new Set();
    for(var element of setB) {
        if(this.has(element)) {
            intersection.add(element);
        }
    }

    return intersection;
}

Set.prototype.difference = function(setB) {
    var difference = new Set(this);
    for(var element of setB) {
        difference.delete(element);
    }
    return difference;
}

const setA = new Set([1,2,3,4]),
      setB = new Set([2,3]),
      setC = new Set([3,4,5,6]);

console.log(setA.isSuperset(setB));
console.log(setB.union(setC));
console.log(setA.intersection(setB));
console.log(setC.difference(setB));



