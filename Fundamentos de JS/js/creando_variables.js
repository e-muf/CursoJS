// Crear variables con VAR
// VAR es la forma antigua de crear variables, no es recomendable usarla
var nombre = 'Emanuel';
nombre = 'Alice';
console.log(nombre);

var nombre = 'Ojos';
console.log(nombre);

var carrito, carrito1 = 'Libro 2';
carrito = 'Libro';
console.log(carrito, carrito1);

// Crear variables con LET
// LET es similar a VAR, revisa que no se haya declarado la variable anteriormente, si ya se ha creado arroja un Error.
let name = 'Emanuel';
//let name = 'Alice'; // Mandará un error
name = 'Alice'

console.log(name);

// Crear variable con CONST
// Sirve para declarar constantes, y siempre se deben inicializar.
const producto = 'Libro';
// producto = 'Libro 2'; // Mandará error

console.log(producto);

// Más ejemplos
let mensaje;
mensaje = 'Y entonces dije "Ese carburador no es mi esposa!"';
console.log(mensaje);

mensaje = '\'Quién tiene hambre?\''; // Se pueden usar las mismas comillas con el símbolo \
console.log(mensaje);

// Unir variables 
let aprendiendo = 'Aprendiendo,', 
    tecnologia = 'JavaScript';

console.log(`${aprendiendo} ${tecnologia}`);

