const nuevoEncabezado = document.createElement('h2');

// Agregando un ID
nuevoEncabezado.id = 'encabezado';

// Agregar nuevo texto
nuevoEncabezado.appendChild(document.createTextNode('Los Mejores Cursos'));

// Elemento que sera reemplazado
const anterior = document.querySelector('#encabezado');

// Elemento padre
const padreDeAnterior = anterior.parentElement;

// Siempre que se quiera agregar o reemplazar un elemento debe ser desde el elemento padre
padreDeAnterior.replaceChild(nuevoEncabezado, anterior);