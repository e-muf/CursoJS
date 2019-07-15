document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos() {

    // Por convención un XMLHttpRequest cuando se instancia se llama xhr
    const xhr = new  XMLHttpRequest();

    // Abrir una conexión
    // Parámetros (método, url|archivo, arincróno)
    xhr.open('GET', 'datos.txt', true);

    // Una vez que carga la página (versión nueva)
    /*xhr.onload = function() {
        /* 
        200: Correcto
        403: Prohibido
        404: No encontrado
        
        if(this.status === 200) {
            document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
        }

    }*/

    // Ready Status (versión antigua)
    /*
    0 -> No inicializado
    1 -> Conexion establecida
    2 -> Recibido
    3 -> Procesando
    4 -> Respuesta lista
    */
    xhr.onreadystatechange = function() {

        console.log(`Estado: ${this.readyState}`);

        if(this.readyState === 4 && this.status === 200) {
            // console.log(this.responseText);
        }
    }

    // Enviar el request
    xhr.send();
}