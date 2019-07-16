document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBtn').addEventListener('click', cargarREST);

function cargarTXT() {
    fetch('datos.txt')
        .then(response => response.text())
        .then(empleados => document.getElementById('resultado').innerHTML = empleados)
        .catch(error => console.log(error));
}

function cargarJSON() {
    fetch('empleados.json')
        .then(response => response.json() )
        .then(data => {
            let html = ''
            data.forEach(empleado => {
                html += `
                    <li>${empleado.nombre} ${empleado.puesto}</li>
                `;
            });

            document.getElementById('resultado').innerHTML = html;
        })
        .catch(error => console.log(error));
}

function cargarREST() {
    fetch('https://picsum.photos/list')
        .then(response => response.json())
        .then(imagenes => {
            let html = '';

            imagenes.forEach(imagen => {
                html += `
                    <li>
                        <a target="_blank" href="${imagen.post_url}">Ver imagen</a>
                        ${imagen.author}
                    </li>
                `;
            });
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(error => console.log(error));
}