// Variables 
const presupuestoUsuario = prompt('¿Cuál es tu presupuesto semanal?');
const formulario = document.getElementById('agregar-gasto');
let cantidadPresupuesto;

// Clases
// Clase de presupuesto
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }

    // Método para ir restando del presupuesto actual
    presupuestoRestante(cantidad = 0) {
            return this.restante -= Number(cantidad);
    }
}

// Clase de Interfaz relacionado con HTML
class Interfaz {
    insertarPresupuesto(cantidad) {
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        // Insertar al HTML
        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }

    imprimirMensaje(mensaje, tipo) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        }
        else {
            divMensaje.classList.add('alert-success');
        }

        divMensaje.appendChild(document.createTextNode(mensaje));

        // Insertar en el DOM
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // Quitar el alert despu'es de 3 segundos
        setTimeout(function(){
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        }, 2000);
    }

    // Inserta los gastos a la lista
    agregarGastoListado(nombre, cantidad) {
        const gastosListado = document.querySelector('#gastos ul');

        // Crear un li
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        // Insertar el gasto 
        li.innerHTML = `
            ${nombre}
            <span class="badge badge-primary badge-pill">$ ${cantidad} </span>
        `;

        // Insertar al HTML
        gastosListado.appendChild(li);
    }

    // Comprueba el presupuesto restante
    actualizarGasto(cantidad) {
        const restante = document.querySelector('span#restante');

        const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);

        restante.innerHTML = `
            ${presupuestoRestanteUsuario}
        `;

        this.comprobarPresupuesto();
    }

    // Cambia de color el presupuesto restante
    comprobarPresupuesto() {
        const presupuestoTotal = cantidadPresupuesto.presupuesto;
        const presupuestoRestante = cantidadPresupuesto.restante;

        // Comprobar el 25% del gasto
        if((presupuestoTotal / 4) > presupuestoRestante) {
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success', 'alert-warning');
            restante.classList.add('alert-danger');
        } 
        else if((presupuestoTotal / 2) > presupuestoRestante) {
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning');
        }
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    if(presupuestoUsuario === null || presupuestoUsuario ==='' || isNaN(presupuestoUsuario)) {
        window.location.reload();
    }
    else {
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);

        // Instancias la clase de interfaz
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
});

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Leer del formulario de gatos
    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;

    // Instanciar la interfaz
    const ui = new Interfaz();

    // Comprovar que los campos no esten vacios
    if(nombreGasto === '' || cantidadGasto === '') {
        // Dos parametros (mensaje, tipo)
        ui.imprimirMensaje('Completa los campos', 'error');
    }
    else {
        // Insertar en el HTML
        ui.imprimirMensaje('Gasto agregado a la lista', 'correcto');
        ui.agregarGastoListado(nombreGasto, cantidadGasto);
        ui.actualizarGasto(cantidadGasto);
    }
});