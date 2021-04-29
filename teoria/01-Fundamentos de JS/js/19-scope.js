// Scope
// Visibilidad que tiene un valor dentro de las funciones

// Una variable global es visible para todas las funciones, una función local de una función no puede ser accedida por otras funciones

// ## Globales
// Las variables globales no se encuentran dentro de una función
var a = 'a';
var b = 'b';
var c = 'c';

// ## Scope de una función
// Podemos darnos cuenta que dentro la funcion, las variables se llaman igual que las globales, pero estas se 'sobreescribiran' dentro de la función
function funcionScope() {
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log('Funcion: ' + a, b, c);
}
funcionScope();

// ## Scope de bloque {}
// Todo lo que esta dentro de un bloque de código {}, pertenecerá unicamente a ese bloque, excepto si estos son declarados como var.
if(true) {
    let a = 'AA';
    var b = 'BB';
    const c = 'CC';
    console.log('Bloque: ' + a, b, c);
}

// Al declar b como var, estamos modificando la variable global dentro del bloque de código, por eso es recomendable usar let y const.

console.log('Globales: ' + a, b, c);