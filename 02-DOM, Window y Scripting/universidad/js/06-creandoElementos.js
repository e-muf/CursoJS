// Creando un enlace

const enlace = document.createElement('a');

// Agregando una clase
enlace.className = 'enlace';

// Añadir ID
enlace.id = 'nuevo-id'

// Añadir atributo
enlace.setAttribute('href', '#');

// Añadir texto
enlace.appendChild(document.createTextNode('Nuevo enlace'));

// Agregando al HTML
document.querySelector('#secundaria').appendChild(enlace);

console.log(enlace);