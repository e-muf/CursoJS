// Un elemento se puede elminar el mismo o desde el padre

const enlaces = document.querySelectorAll('.enlace');
const navegacion = document.querySelector('#principal');

// Borrando desde el mismo elemento
enlaces[0].remove();

// Borrando desde el padre
navegacion.removeChild(navegacion.children[1]);

console.log(enlaces);