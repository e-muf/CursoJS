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

    // Crear FETCH
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let html = `<h2 style="text-align: center">Nombres Generados</h2>`;
            html+= `<ul class="lista">`;

            data.forEach(nombre => {
                html += `
                    <li>${nombre.name}</li>
                `;
            });

            html += `</ul>`;

            document.querySelector('#resultado').innerHTML = html;
        }).catch(error => console.log(error));
}