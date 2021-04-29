let valor;

// *** Primitivos ***
console.log(typeof valor); // undefined

valor = 'Juan'
console.log(typeof valor); // string

valor = 20;
console.log(typeof valor); // number

valor = 30.12;
console.log(typeof valor); // number

valor = true;
console.log(typeof valor); // boolean

valor = null;
console.log(typeof valor); // object

// ES6
valor = Symbol('Símbolo');
console.log(typeof valor); // symbol

// *** De referencia ***

valor = [1, 2, 3, 4, 5];
console.log(typeof valor); // object con typeof
console.log(valor); // Array sin typeof

valor = {
    nombre: 'Emanuel',
    profesion: 'Estudiante de Ingeniería en computación'
}
console.log(typeof valor); // object

valor = new Date();
console.log(typeof valor); // object