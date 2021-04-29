// Crear un arreglo

const numeros = [10, 20, 30, 40, 50];
console.log(numeros);

// Arreglo de Strings [método alternativo]
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');
console.log(meses);
console.log(meses.length);
console.log(Array.isArray(meses)); // Comprueba si es un arreglo
console.log(meses[1]); // Accedemos a la posición 1 del arreglo

meses[4] = 'Mayo'; // Agregamos un mes en la posición indicada
meses.push('Junio'); // Agrega el elemento al final del array
console.log(meses);

console.log(meses.indexOf('Abril')); // Nos dirá la posición de un arreglo

meses.unshift('Mes 0'); // Agrega el elemento al inicio y los demás los recorre

meses.pop() // Elimina el ultimo elemento del arreglo

console.log(meses)

meses.shift(); // Elimina el primer elemento del arreglo

meses.splice(2, 1); // Elimina desde una posición hasta una cantidad de elementos (pos, cantidad)

meses.reverse() // Cambia el orden del arreglo

console.log(meses);

let arreglo1 = [1, 2, 3],
    arreglo2 = [9, 8, 7];

console.log(arreglo1.concat(arreglo2)); // Concatena dos arreglos

// Ordenar strings
const frutas = ['Platano', 'Manzana', 'Fresa', 'Naranja', 'Zanahoria'];

console.log(frutas);
frutas.sort()
console.log(frutas);

// Ordenar números
arreglo1 = [3, 9, 91, 92, 23, 45, 21, 56, 1, 100, 101];
console.log(arreglo1);

// Orden ascendente
arreglo1.sort(function(a, b){
    return a - b;
});
console.log(arreglo1)

// Orden descendente
arreglo1.sort(function(a, b){
    return b - a;
});
console.log(arreglo1)


// Arreglo mezclado
const mezclado = ['Hola', 20, true, null, false, undefined];
console.log(mezclado)