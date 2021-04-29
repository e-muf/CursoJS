// Window Object es en sí todo lo que esta en la ventana de navegación

/* 
prompt > window : Regresa mucha información relacionada al objeto de la ventana, como puede ser el tamaño de nuestro navegador, el navegador que estamos buscando.

Muchas de las funciones que usamos pertenecen a window, por ejemplo:

console.log('Hola');

es similar a escribir:

window.console.log('Hola');
*/

// El siguiente codigo se puede descomentar para ser ejecutado en consola.
/*
const nombre = window.prompt();
window.console.log(`Bienvenido ${nombre}`)

if(window.confirm('¿Eliminar?')){
    console.log('Eliminado');
}
else {
    console.log('No se ha eliminado.')
}
*/

// ## Acceder a los atributos del Window Object
let altura, anchura;

// Altura y anchura del navegador 
altura = window.outerHeight;
anchura = window.outerWidth;

console.log(`Altura del navegador: ${altura}`);
console.log(`Anchura del navegador: ${anchura}`);

// Altura y anchura del Window sin el HUB
altura = window.innerHeight;
anchura = window.innerWidth; 

console.log(`Altura del navegador sin HUB: ${altura}`);
console.log(`Anchura del navegador sin HUB: ${anchura}`);

// Location, nos indica en que página estamos actualmente.
let ubicacion;

ubicacion = window.location;

console.log(ubicacion);

// Para redireccionar se puede usar:
// window.location.href = 'http://twitter.com'

// Para utilizar el historial y redireccionar
// window.history.go(-2);

// Navigator, información acercate del navegador
ubicacion = window.navigator;
console.log(navigator);

ubicacion = window.navigator.appName;
console.log('App name: ' + ubicacion);

// Te dice para que sistema operativo se está usando el navegador y la versión del mismo
ubicacion = window.navigator.appVersion;
console.log('App version: ' + ubicacion);

// Regresa información similar al anterior per más detallada
ubicacion = window.navigator.userAgent;
console.log('User agent: ' + ubicacion);

// Te indica el idioma que un usuario tiene por defecto en su computadora
ubicacion = window.navigator.language;
console.log('Language: ' + ubicacion);









