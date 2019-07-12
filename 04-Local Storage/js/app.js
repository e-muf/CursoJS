// Local Storage

// Agregar o Modificar valor en Local Storage
localStorage.setItem('nombre', 'Emanuel');

// Session Storage
sessionStorage.setItem('nombre', 'Emanuel');

// Aunque se comenten o se borren las lineas anteriores, si se actualiza la página los valores persistiran, si cerramos y abrimos el navegador Local Storage mantendrá el valor mientras Session Storage no.

// Acceder a valor de Local Storage
const nombre = localStorage.getItem('nombre');
console.log(nombre);

// Eliminar de Local Storage
localStorage.removeItem('nombre');

// Limpiar todo el Local Storage
localStorage.clear();
