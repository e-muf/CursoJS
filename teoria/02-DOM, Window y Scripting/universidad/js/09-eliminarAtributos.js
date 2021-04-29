const primerLi = document.querySelector('.enlace');

let elemento;

// Obtener una clase de CSS
elemento = primerLi.classList;
console.log(elemento);

// Agregar una clase
primerLi.classList.add('nueva-clase');
elemento = primerLi.classList;
console.log(elemento);

// Quitar una clase
primerLi.classList.remove('nueva-clase');
elemento = primerLi.classList;
console.log(elemento);

// Leer atributos
elemento = primerLi.getAttribute('href');
console.log(elemento);

// Modificar atributos
primerLi.setAttribute('href', 'https://www.facebook.com');
elemento = primerLi.getAttribute('href');
console.log(elemento);

// Atributos creados por nosotros mismos
primerLi.setAttribute('data-id', 20);
console.log(primerLi);

// Saber si un elemento tiene un atributo
console.log(primerLi.hasAttribute('data-id'));

// Eliminar un atributo
primerLi.removeAttribute('data-id');
console.log(primerLi);