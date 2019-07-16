document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// Llamado a AJAX e imprimir resultados
function cargarNombres(event) {
    event.preventDefault();

    // Leer las variables
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;
    
    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;

    let url = ''
    url += 'https://uinames.com/api/?';

    // Si hay origen agregarlo a la url
    if(origenSeleccionado !== '') {
        url += `region=${origenSeleccionado}&`
    }

    // Si hay genero agregarlo a la url
    if(generoSeleccionado !== '') {
        url += `gender=${generoSeleccionado}&`
    }

    // Si hay una cantidad agregarlo a la url
    if(cantidad !== '') {
        url += `amount=${cantidad}`
    }

    // Conectar con AJAX

    // Inicar XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Abrir la conexion
    xhr.open('GET', url, true);

    // Datos e impresión del template
    xhr.onload = function() {
        if(this.status === 200) {
            const nombres = JSON.parse(this.responseText);

            // Generar el HTML
            let htmlNombres = '<h2 style="text-align: center">Nombres Generados</h2>';

            htmlNombres += '<ul class="lista">';

            nombres.forEach(nombre => {
                htmlNombres += `
                    <li>${nombre.name}</li>
                `;
            });

            htmlNombres += '</ul>';

            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    }

    // Enviar el Request
    xhr.send();
}