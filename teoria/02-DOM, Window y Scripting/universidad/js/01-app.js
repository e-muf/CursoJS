// Eliminar de Local Storage
localStorage.clear();

// Nos muestra información acerca del documento HTML
let elemento = document;
console.log(elemento);

// Muestra todas los nodos en nuestro documento
elemento = document.all;
console.log(elemento);

// Acceder a los elementos de document (No es adecuada esta manera) 
elemento = document.all[1];
console.log(elemento);

// Acceder al head de nuestro documento
elemento = document.head;
console.log(elemento);

// Acceder al body del documento
elemento = document.body;
console.log(elemento);

// Miestra el dominio de la página web
elemento = document.domain;
console.log(elemento);

// Muestra el URL completo de la página web
elemento = document.URL;
console.log(elemento);

// Muestra la codificación de la página web
elemento = document.characterSet;
console.log(elemento)

// Regresa una colleción con todos los formularios creados
elemento = document.forms;
console.log(elemento);

// Accediendo al primer formulario de la página
elemento = document.forms[0];
console.log(elemento);

// Accediendo al id del primer formulario 
elemento = document.forms[0].id;
console.log(elemento);

// Accediendo a la clase del primer formulario (Regresa string con todas las clases)
elemento = document.forms[0].className;
console.log(elemento);

// Accediendo a las clases del primer formulario (Regrese colección con las clases)
elemento = document.forms[0].classList;
console.log(elemento);

// Acceder a las imagenes (Retorna una colección con las imagenes)
elemento = document.images;
console.log(elemento);

// Accediendo a los atributos de una imagen
elemento = document.images[2].getAttribute('src');
console.log(elemento);

// Saber cuáles scripts se estan ejecutando
elemento = document.scripts;
console.log(elemento);

// Convirtiendo una colección a un array
let imagenes = document.images;
let imagenesArr = Array.from(imagenes);

imagenesArr.forEach(imagen => {
    console.log(imagen);
});

console.log(imagenesArr);


