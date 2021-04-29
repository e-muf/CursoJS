// Arrow Functions

let aprendiendo;

// Function Expression
/*
aprendiendo = function() {
    console.log('Aprendiendo JavaScript');
}*/

// Arrow Functions
aprendiendo = () => {
    console.log('Aprendiendo JavaScript');
}

// Una línea no requiere llave
aprendiendoLinea = () => console.log('Aprendiendo JavaScript');

// Si se deja solo un valor, la función lo retornara por defecto
aprendiendoReturn = () => 'Aprendiendo JavaScript';

// Retornar un objeto
retornandoObjeto = () => ({ aprendiendo: 'Aprendiendo JavaScript' });

// Pasar parámetros

// Un parametro
unParametro = tecnologia => console.log('Aprendiendo ' + tecnologia);

// Dos o más parametros requieren parentesis
parametros = (tecnologia1, tecnologia2) => {
    console.log(`Aprendiendo ${tecnologia1} y ${tecnologia2}`);
}

aprendiendo();
aprendiendoLinea();
console.log(aprendiendoReturn());
console.log(retornandoObjeto());
unParametro('ES6');
parametros('JavaScript', 'ES6')

const productos = ['Disco', 'Camisa', 'Guitarra'];

const letrasProducto = productos.map(producto => producto.length);

console.log(letrasProducto);

// For Each con arrow functions
productos.forEach(producto => {
    console.log(producto);
});