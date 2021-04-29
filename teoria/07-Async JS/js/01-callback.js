// Callback en foreach
const ciudades = ['Londres', 'New York', 'Madrid', 'Paris', 'Viena'];

// Inline callback (Recomendada)
ciudades.forEach(function(ciudad) {
    console.log(ciudad);
});

// Función definida
/*
function callback(ciudad) {
    console.log(ciudad);
}

ciudades.forEach(callback);
*/

// Listado de paises
const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra', 'Irlanda'];

// Se agraga un nuevo pais despues de dos segundos
function nuevoPais(pais, callback) {
    setTimeout(function() {
        paises.push(pais);
        callback();
    }, 2000);
}

// Los paises se muestran despues de un segundo
function mostrarPaises() {
    setTimeout(function() {
        let html = '';

        paises.forEach(function(pais) {
            html += `<li>${pais}</li>`;
        });

        document.getElementById('app').innerHTML = html;
    }, 1000);
}

// Agregar Nuevo pais
nuevoPais('Alemania', mostrarPaises);

// Mostrar los paises
mostrarPaises(paises);