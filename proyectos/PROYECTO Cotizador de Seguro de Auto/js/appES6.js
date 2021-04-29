// Cotizador Construct
class Seguro {
    constructor(marca, anio, tipo){
        this.marca = marca;
        this.anio = anio;
        this.tipo = tipo;
    }

    cotizarSeguro() {
        /*
            1 = Americano 1.15
            2 = Asiatico 1.05
            3 = Europeo 1.35
        */
       
        let cantidad;
        const base = 2000;
    
        switch(this.marca) {
            case '1':
                cantidad = base * 1.15;
            break;
            case '2':
                cantidad = base * 1.05;
            break;
            case '3':
                cantidad = base * 1.35;
            break;
        }
    
        // Leer anio
        const diferencia = new Date().getFullYear() - this.anio;
    
        // Cada año de diferencia hay que reducir 3% el valo del seguro
        cantidad -= ((diferencia * 3) * cantidad) / 100;
    
        /*
            Si el seguro es básico se multiplica por 30% más
            Si el seguro es completo se multiplica por 50% más.
        */
        if(this.tipo === 'basico') {
            cantidad *= 1.30;
        }
        else {
            cantidad *= 1.50;
        }
    
        return cantidad;
    }
}

// Lo que ve el usuario
class Interfaz {

    mostrarMensaje(mensaje, tipo) {
        const div = document.createElement('div');
    
        if(tipo === 'error') {
            div.classList.add('mensaje', 'error');
        }
        else {
            div.classList.add('mensaje', 'exito');
        }
    
        div.innerHTML = `${mensaje}`;
        formulario.insertBefore(div, document.querySelector('.form-group'));
    
        setTimeout(function() {
            document.querySelector('.mensaje').remove();
        }, 3000);
    }

    mostrarResultado(seguro, total) {
        const resultado = document.getElementById('resultado');
        
        let marca;
        switch(seguro.marca) {
            case '1':
                marca = 'Americano'
            break;
            case '2':
                marca = 'Asiatico';
            break;
            case '3':
                marca = 'Europeo';
            break;
        }
    
        // Crear un div
        const div = document.createElement('div');
        div.innerHTML = `
            <p class="header">Resumen:</p>
            <p>Marca: ${marca}</p>
            <p>Año: ${seguro.anio}</p>
            <p style="text-transform: capitalize">Tipo: ${seguro.tipo}</p>
            <p>Total: ${total}</p>
        `;
    
        const spinner = document.querySelector('#cargando img');
        spinner.style.display = 'block';
    
        setTimeout(function() {
            spinner.style.display = 'none';
            resultado.appendChild(div);
        }, 3000);
    }
}

// Event Listener
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    // Leer la marca seleccionada del Select
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    // Leer el año seleccionado del select
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;

    // Leer el valor del radio button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;


    // Crear instancia de interfaz
    const interfaz = new Interfaz();

    // Revisamos que los campos no esten vacios
    if(marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '') {
        interfaz.mostrarMensaje('Debes seleccionar todos los campos', 'error');
    }
    else {
        // Limpiar resultados anteriores
        const resultados = document.querySelector('#resultado div');

        if(resultados != null) {
            resultados.remove();
        }

        // Instanciar seguro
        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);

        // Cotizar el seguro
        const cantidad = seguro.cotizarSeguro();

        // Mostrar el resultado
        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostrarMensaje('Cotizando...', 'exito');
    }
});

const max = new Date().getFullYear(),
    min = max - 20;

const selectAnios = document.getElementById('anio');

for(let anio = max; anio > min; anio--) {
    let option = document.createElement('option');
    option.value = anio;
    option.innerHTML = anio;
    selectAnios.appendChild(option);
}
