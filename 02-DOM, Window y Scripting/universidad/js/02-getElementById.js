// Función getElementById 
// Seleccionamos un nodo por su ID

let encabezado;
encabezado = document.getElementById('encabezado');
console.log(encabezado);

// Acceder al texto del encabezado
let textoEncabezado = encabezado.textContent;
console.log(textoEncabezado);

// o también 
textoEncabezado = encabezado.innerText;
console.log(textoEncabezado);

// Modificar CSS con JS
encabezado.style.background = '#333';
encabezado.style.color = "#FFF"
encabezado.style.padding = '20px';

// Cambiar el texto 
encabezado.textContent = 'Los mejores cursos'

