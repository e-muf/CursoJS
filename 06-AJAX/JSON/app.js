const btnEmpleado = document.getElementById('boton1');

btnEmpleado.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleado.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            const persona = JSON.parse(this.responseText);

            const htmlTemplate = `
            <ul>
                <li>ID: ${persona.id}</li>
                <li>Nombre: ${persona.nombre}</li>
                <li>Empresa: ${persona.empresa}</li>
                <li>Ocupación: ${persona.trabajo}</li>
            </ul>
            `;

            document.getElementById('empleado').innerHTML = htmlTemplate;
        }
    }

    xhr.send();
});

const btnEmpleados = document.getElementById('boton2');

btnEmpleados.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleados.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            const personal = JSON.parse(this.responseText);

            let htmlTempleate = '';
            personal.forEach(persona => {
                htmlTempleate += `
                <ul>
                    <li>ID: ${persona.id}</li>
                    <li>Nombre: ${persona.nombre}</li>
                    <li>Empresa: ${persona.empresa}</li>
                    <li>Ocupación: ${persona.trabajo}</li>
                </ul>
                `;
            });
            
            document.getElementById('empleados').innerHTML = htmlTempleate;
        }
    }

    xhr.send();
});
