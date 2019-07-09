// Función query Selector
// Sirve para seleccionar un nodo en forma de CSS, cuando se encuentren muchos elementos de un mismo selector solo se tomará el primero.

/*
const encabezado = document.querySelector('#encabezado');

// Aplicar CSS
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';

encabezado.textContent = 'Los mejores cursos';

console.log(encabezado);*/

/* La diferencia entre getElementById y querySelector es que el primero solo puede seleccionar por ID mientras que querySelector por cualquier selector en CSS */

const encabezado = document.querySelector('.encabezado');

// Aplicar CSS
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';

encabezado.textContent = 'Los mejores cursos';

console.log(encabezado);


// ## Selectores Avanzados de CSS

// Seleccionar el primer hijo del id principal que sea un enlace
let enlace;
enlace = document.querySelector('#principal a:first-child');
console.log(enlace);

// Seleccionar el último hijo del id principal que sea un enlace
enlace = document.querySelector('#principal a:last-child');
console.log(enlace);

// Seleccionar un hijo n del id principal que sea un enlace
enlace = document.querySelector('#principal a:nth-child(3)');
console.log(enlace);
