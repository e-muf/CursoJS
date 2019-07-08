// *** Function declaration ***

/*function saludar() {
    console.log('Hola');
}
saludar();**/

function saludar(nombre) {
    console.log('Hola ' + nombre);
}
// Se pueden ejecutar múltiples veces
saludar('Emanuel');
saludar('Ojos');
saludar('Kevin');

/*function sumar(a, b) {
    console.log(a + b);
}
sumar(1,2);
sumar(15,30);*/

// Si no pasamos un parámetro el valor es undefined
function sumar(a, b) {
    return a + b;
}

let suma = sumar(15, 30)
console.log(suma);

function saludarVisitante(nombre = 'Visitante') {
    return `Hola ${nombre}`;
}
let saludo = saludarVisitante('Emanuel');
console.log(saludo)

// *** Function Expression ***

const suma2 = function(a, b) {
    return a + b;
}
console.log(suma2(1,2));
console.log(suma2(5)); // 5 + undefined = NaN

const saludar2 = function(nombre = 'Visitante', edad=20, trabajo='Estudiante') {
    return `Hola ${nombre}, tienes ${edad} años y eres un ${trabajo}`
}
console.log(saludar2('Emanuel'));

// *** IIFE (Immediately Invoked Function Expressions)***
(function() {
    console.log('Creando un IIFE');
})();

// Se pueden pasar parametros a una IIFE
(function(tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
})('JavaScript');

// *** Métodos de propiedad ***
// Cuando una función se pone dentro de un objeto

const musica = {
    reproducir: function() {
        console.log('Reproduciendo música');
    },
    pausar: function() {
        console.log('Música detenida');
    }
}
// Los métodos también pueden crearse fuera del objeto
musica.borrar = function(id) {
    console.log(`Borrando la canción con el ID: ${id}`)
}

musica.reproducir();
musica.pausar();
musica.borrar(2);