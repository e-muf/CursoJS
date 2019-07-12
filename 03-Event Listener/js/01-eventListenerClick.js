// Event Listener Click al buscador

/*document.querySelector('#submit-buscador').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir la opción #
    alert('Buscando Cursos');
});*/

document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);

function ejecutarBoton(event) {
    event.preventDefault();

    console.log(event);

    console.log(event.target); // Muestra el elemento al que se le ha dado click
}

document.querySelector('#encabezado').addEventListener('click', function(event) {
    event.target.innerText = 'Nuevo encabezado';
});