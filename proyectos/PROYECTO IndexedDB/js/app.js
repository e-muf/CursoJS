let DB;

// Selectores de la interfaz
const form = document.querySelector('form'), 
      nombreMascota = document.querySelector('#mascota'),
      nombreCliente = document.querySelector('#cliente'),
      telefono = document.querySelector('#telefono'),
      fecha = document.querySelector('#fecha'),
      hora = document.querySelector('#hora'),
      sintomas = document.querySelector('#sintomas'),
      citas = document.querySelector('#citas'),
      headingAdministra = document.querySelector('#administra');

// Esperar por el DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    // Crear la base de datos
    let crearDB = window.indexedDB.open('citas', 1);

    // Si hay un error enviarlo a la consola
    crearDB.onerror = function() {
        console.log('Hubo un error');
    }

    // Si todo esta bien muestra en consola, y asignar la base de datos
    crearDB.onsuccess = function() {
        // Asignar a la base de datos
        DB = crearDB.result;
        mostrarCitas();
    }

    // Este método solo corre una vez y es ideal para crear el Schema de la base de datos
    crearDB.onupgradeneeded = function(e) {
        // El evento es la misma base de datos
        let db = e.target.result;

        // Definir el Object Store, (nombre de la base de datos, opciones)
        // keypath índice de la base de datos
        let objectStore = db.createObjectStore('citas', { keyPath: 'key', autoIncrement: true });

        // Crear los índices y los campos de la base de datos
        // createIndex (nombre, keypath, opciones)
        objectStore.createIndex('mascota', 'mascota', { unique:false });
        objectStore.createIndex('cliente', 'cliente', { unique:false });
        objectStore.createIndex('telefono', 'telefono', { unique:true });
        objectStore.createIndex('fecha', 'fecha', { unique:false });
        objectStore.createIndex('hora', 'hora', { unique:false });
        objectStore.createIndex('sintomas', 'sintomas', { unique:false });
        
        console.log('Base de Datos creada y lista!');
    }

    // Cuando el formulario se envia
    form.addEventListener('submit', agregarDatos);

    function agregarDatos(e) {
        e.preventDefault();

        const nuevaCita = {
            mascota: nombreMascota.value,
            cliente: nombreCliente.value,
            telefono: telefono.value,
            fecha: fecha.value,
            hora: hora.value,
            sintomas: sintomas.value
        }
        
        // En IndexedDB se utilizan las transacciones
        let transaction = DB.transaction(['citas'], 'readwrite');
        let objectStore = transaction.objectStore('citas');
        
        let peticion = objectStore.add(nuevaCita);

        peticion.onsuccess = () => {
            form.reset();
        }

        transaction.oncomplete = () => {
            console.log('Cita agregada');
            mostrarCitas();
        }
        transaction.onerror = () => {
            console.log('Hubo un error');
        }
    }

    function mostrarCitas() {
        // Limpiar las citas anteriores
        while(citas.firstChild) {
            citas.removeChild(citas.firstChild);
        }

        // Creamos un object Store
        let objectStore = DB.transaction('citas').objectStore('citas');

        // Retorno una petición
        objectStore.openCursor().onsuccess = function(e) {
            // El cursor se va a ubicar en el registro indicado para acceder a los datos
            let cursor = e.target.result;

            if(cursor) {
                let citaHtml = document.createElement('li');
                citaHtml.setAttribute('data-cita-id', cursor.value.key);
                citaHtml.classList.add('list-group-item');

                citaHtml.innerHTML = `
                    <p class="font-weight-bold">Mascota: <span class="font-weight-normal">${cursor.value.mascota}</span></p>
                    <p class="font-weight-bold">Cliente: <span class="font-weight-normal">${cursor.value.cliente}</span></p>
                    <p class="font-weight-bold">Teléfono: <span class="font-weight-normal">${cursor.value.telefono}</span></p>
                    <p class="font-weight-bold">Fecha: <span class="font-weight-normal">${cursor.value.fecha}</span></p>
                    <p class="font-weight-bold">Hora: <span class="font-weight-normal">${cursor.value.hora}</span></p>
                    <p class="font-weight-bold">Síntomas: <span class="font-weight-normal">${cursor.value.sintomas}</span></p>
                `;

                // Boton de borrar
                const botonBorrar = document.createElement('button');
                botonBorrar.classList.add('borrar', 'btn', 'btn-danger');
                botonBorrar.innerHTML = '<span aria-hidden="true">x</span> Borrar';
                botonBorrar.onclick = borrarCita;
                citaHtml.appendChild(botonBorrar);
                
                // Append en el padre
                citas.appendChild(citaHtml);

                // Consultar los próximos registros
                cursor.continue();
            } else {
                // Cuando no hay registros
                if(!citas.firstChild){
                    headingAdministra.textContent = 'Agrega citas para comenzar';
                    let listado = document.createElement('p');
                    listado.classList.add('text-center');
                    listado.textContent = 'No hay registros';
                    citas.appendChild(listado);
                } else {
                    headingAdministra.textContent = 'Administra tus citas';
                }
            }
        }
    }

    function borrarCita(e) {
        let citaID = Number(e.target.parentElement.getAttribute('data-cita-id'));

        let transaction = DB.transaction(['citas'], 'readwrite');
        let objectStore = transaction.objectStore('citas');
        
        let peticion = objectStore.delete(citaID);

        transaction.oncomplete= () => {
            e.target.parentElement.parentElement.removeChild(e.target.parentElement);
            console.log(`Se eliminó la cita con el ID: ${citaID}`);

            if(!citas.firstChild){
                headingAdministra.textContent = 'Agrega citas para comenzar';
                let listado = document.createElement('p');
                listado.classList.add('text-center');
                listado.textContent = 'No hay registros';
                citas.appendChild(listado);
            } else {
                headingAdministra.textContent = 'Administra tus citas';
            }
        }
    }
});
