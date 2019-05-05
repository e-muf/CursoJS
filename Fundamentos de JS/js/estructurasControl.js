// *** if-else ***
const edad = 18;

if(edad >= 18) {
    console.log('Si puedes entrar al sitio');
}
else {
    console.log('No puedes entrar al sitio');
}

// Comprobar que una variable tiene un valor
const puntaje = 1000;

if(puntaje) {
    console.log(`El puntaje fue de ${puntaje}`);
}
else{
    console.log('No hay puntaje');
}

// Ejemplo carrito
let efectivo = 500;
let totalCarrito = 300;
if(efectivo >= totalCarrito) {
    console.log('Pago Correcto');
}
else {
    console.log('Fondos Insuficientes');
}

// *** if-else-elseif **
let hora = 25;
if(hora <= 10 && hora > 0) { 
    console.log('Buenos días');
}
else if(hora <= 18){
    console.log('Buenas tardes');
}
else if(hora <= 24){
    console.log('Buenas noches');
}
else {
    console.log('Hora incorrecta');
}

// if in-line
const logueado = true;
console.log(logueado === true ? 'Si se logueo' : 'No se logueo')

// *** switch *** 
const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'efectivo':
        console.log(`El usuario pago con ${metodoPago}`);
    break;
    default:
        console.log('Método de pago no soportado');
    break;
}

// Ejemplo Fechas
let mes;

switch(new Date().getMonth()) {
    case 0:
        mes = 'Enero'
        break;
    case 1:
        mes = 'Febrero'
        break;
    case 2:
        mes = 'Marzo'
        break;
    case 3:
        mes = 'Abril'
        break;
    case 4:
        mes = 'Mayo'
        break;
    case 5:
        mes = 'Junio'
        break;
    case 6:
        mes = 'Julio'
        break;
    case 7:
        mes = 'Agosto'
        break;
    case 8:
        mes = 'Septiembre'
        break;
    case 9:
        mes = 'Octubre'
        break;
    case 10:
        mes = 'Noviembre'
        break;
    case 11:
        mes = 'Diciembre'
        break;
}

console.log(`Este mes es ${mes}`);
