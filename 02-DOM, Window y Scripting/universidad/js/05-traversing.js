// Traversing
// Acceder a un nodo hijo desde el padre, acceder a un nodo padre desde el hijo

// ## Acceder desde un nodo padre a un nodo hijo
const navegacion = document.querySelector('#principal');

console.log(navegacion.nodeName);

// NodeType
/*
Tipos de nodos:
1 -> Elementos HTML
2 -> Atributos
3 -> Text Node
4 -> CDATA Section
5 -> Entity Reference node
6 -> Entity Node
7 -> Processing instruction 
8 -> Comentarios
9 -> Documentos
10 -> Doctype
11 -> Document fragment
12 -> Notation Node
*/

console.log(navegacion.nodeType);

const barra = document.querySelector('.barra');
console.log(barra.children[0].children[0].children);

const cursos = document.querySelectorAll('.card');
console.log(cursos);
console.log(cursos[0].lastElementChild);
console.log(cursos[0].childElementCount);

// ## Acceder desde un nodo hijo a un node padre
const enlaces = document.querySelectorAll('.enlace');

console.log(enlaces[0]);
console.log(enlaces[0].parentNode); // No recomendado
console.log(enlaces[0].parentElement); // Recomendado
console.log(enlaces[0].parentElement.parentElement.parentElement);

console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent = 'Hola desde Traversing');

// previousElementSibling sirve para acceder a un elemento anterior dentro de un mismo nodo padre
console.log(enlaces);
console.log(enlaces[4]);
console.log(enlaces[4].previousElementSibling);

// nextElementSibling sirve para acceder a un elemento posterior dentro de un mismo nodo padre
console.log(enlaces[0]);
console.log(enlaces[0].nextElementSibling);