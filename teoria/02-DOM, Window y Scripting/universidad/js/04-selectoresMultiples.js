// Función getElementsByClassName
// Sirve para seleccionar múltiples nodos por la clase a la que pertenecen

let enlaces = document.getElementsByClassName('enlace');

console.log(enlaces);

const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');
console.log(listaEnlaces);

// ## Seleccionar por tags

// Seleccionar todos los tags 'a'
const links = document.getElementsByTagName('a');
console.log(links);

let listaLinks = Array.from(links);

listaLinks.forEach(enlace => {
    console.log(enlace.textContent);
});

// ## Seleccionar con CSS querySelectorAll()
enlaces = document.querySelectorAll('#principal .enlace');

console.log(enlaces);

// Seleccionar enlaces en una posición impar
enlaces = document.querySelectorAll('#principal a:nth-child(odd)');

enlaces.forEach(impares => {
    impares.style.backgroundColor = 'red';
    impares.style.color = 'white';
});

console.log(enlaces);