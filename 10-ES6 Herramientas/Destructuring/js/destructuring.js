// Destructuring
// Codigo para extraer valores de un objeto o un arreglo

// ## Destructuring a objetos

const cliente = {
    nombre: 'Alejandra', 
    tipo: 'Premium'
}

// Forma anterior
/* let nombre = cliente.nombre,
    tipo = cliente.tipo;

console.log(nombre);
console.log(tipo); */

// Por destructuring
let {nombre, tipo} = cliente;
console.log(nombre);
console.log(tipo);

// Objeto dentro de un objeto

const cliente2 = {
    tipo: 'Premium',
    nombre: 'Erick',
    datos: {
        ubicacion: {
            ciudad: 'Ciudad de México',
            pais: 'México'
        },
        cuenta: {
            desde: '10-12-2012',
            saldo: 4000
        }
    }
}

let { datos: {ubicacion} } = cliente2;
console.log(ubicacion);
console.log(ubicacion.ciudad);
console.log(ubicacion.pais);

let { datos: {cuenta} } = cliente2;
console.log(cuenta);
console.log(cuenta.desde); 
console.log(cuenta.saldo); 

const cliente3 = {
    name: 'Emanuel',
    type: 'Premium',
}

let { name, type, balance = 0 } = cliente3;
console.log(name);
console.log(type);
console.log(balance); 

// ## Destructuring a arreglos
const ciudades = ['Londres', 'New York', 'Madrid', 'Paris', {
    idioma:'ingles'
}];

const [
    primeraCiudad,
    segundaCiudad
] = ciudades;

const [ , , , paris] = ciudades;

console.log(primeraCiudad);
console.log(segundaCiudad);
console.log(paris);

// Accede a Londres a que es el primer elemento del arreglo
[idioma] = ciudades;
console.log(idioma);

// Ejemplo avanzado
const user = {
    u_type: 'Premium',
    u_balance: 30000,
    u_data: {
        u_name: 'Pedro',
        u_lastName: 'Perez',
        u_residence: {
            u_city: 'México'
        }
    },
    u_movements: ['12-03-2018','12-03-2017','12-03-2016']
}

let {
    u_type,
    u_movements: [uno],
    u_data: {u_residence}
} = user;

console.log(u_type);
console.log(u_residence);
console.log(uno);

// ## Destructuring en funciones

// Forma anterior
function reservacion(completo, opciones) {
    opciones = opciones || {};

    let metodo = opciones.metodoPago,
        cantidad = opciones.cantidad,
        dias = opciones.dias;

    console.log(metodo);
    console.log(cantidad);
    console.log(dias);
}

reservacion(
    true,
    {
        metodoPago: 'tarjeta',
        cantidad: 2000,
        dias: 3
    }
);

// Con destructuring
function reservacion2(completo, opciones) {

    let {metodoPago, cantidad, dias} = opciones;

    console.log(metodoPago);
    console.log(cantidad);
    console.log(dias);
}

reservacion2(
    true,
    {
        metodoPago: 'tarjeta',
        cantidad: 2000,
        dias: 3
    }
);

// Con valores por defecto
function reservacion3(completo,
    {
        metodoPago = 'efectivo',
        cantidad = 0,
        dias = 0
    } = {}
    ) {
    
    if(completo) {
        console.log('Proceder a reservar...');
    }
    else {
        console.log('Abandonar');
    }
}

reservacion3(
    true,
    {
        metodoPago: 'tarjeta',
        cantidad: 5000,
        dias: 5 
    }
);