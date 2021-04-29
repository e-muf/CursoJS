// Symbols
// Son un tipo de dato primitivo introducido en ES6. Sirven como un identificador completamente único, a diferencia de los otros datos primitivos este unicamente se puede crear con la función Symbol()

const symbol  = Symbol();
const symbol2 = Symbol();

console.log(symbol === symbol2); // No son iguales
console.log(typeof symbol); // Tipo de dato symbol

// Los Symbol reciben un parámetro que servira como descripción
const simbolo = Symbol('Descripción');
console.log(simbolo);

// Objetos 
let nombre = Symbol('Nombre de una persona');
let apellido = Symbol('Apellido de una persona');

// Crear persona, para agregar un Symbol se debe poner [] con el nombre del Symbol
let persona = {};
persona[nombre]   = 'Emanuel';
persona[apellido] = 'Flores';

let persona2 = {};
persona2[nombre]   = 'Erick';
persona2[apellido] = 'Tovar';

console.log(persona);
console.log(persona2);

// Los simbolos pueden servir como propiedades privadas ya que no se pueden accesar por medio de un for de manera directa
const saldo = Symbol('Saldo de un cliente');

let cliente = {
    nombre: 'Emanuel',
    apellidos: 'Flores',
    [saldo]: 5000,
};

for(let propiedad in cliente) {
    console.log(cliente[propiedad]);
}

// A pesar de que su mayor característica es que son únicos, se pueden asociar a una tabla Symbols global con la funcion for()

const sym1 = Symbol.for('foo');
const sym2 = Symbol.for('foo');

console.log(sym1 === sym2); // Devuelve true, ya que 'foo' esta de manera global

// Ejemplos con Symbols
// Hacer identificadores únicos
const RED = Symbol('red');
const ORANGE = Symbol('orange');
const YELLOW = Symbol('yellow');
const BLUE = Symbol('blue');
const cat = 'blue';

function getThreatLevel(color) {
    switch(color) {
        case RED:
            return 'severe';
        case ORANGE:
            return 'high';
        case YELLOW:
            return 'elevated';
        case BLUE:
            return 'low';
        default:
            console.log("I don't know that color");
    }
}

// Hacer una propiedad privada
const length = Symbol('length');

class Train {
    constructor() {
        this[length] = 0;
    }

    add(car, contents) {
        this[car] = contents;
        this[length]++;
    }
}

let freightTrain = new Train();
freightTrain.add('refrigerator car', 'cattle');
freightTrain.add('flat car', 'aircraft parts');
freightTrain.add('tank car', 'milk');
freightTrain.add('hopper car', 'coal');

for(car in freightTrain) {
    console.log(car, freightTrain[car]);
}

// Crear mensajes diferentes para el mismo tipo de componente

class AlertService {
    constructor() {
        this.alerts = {};
    }

    addAlert(symbol, alertText) {
        this.alerts[symbol] = alertText;
        this.renderAlerts();
    }

    removeAlert(symbol) {
        delete this.alerts[symbol];
    }

    renderAlerts() {}
}

const alertService = new AlertService();

class MyComponent {
    constructor(thing) {
        this.componentId = Symbol(thing);
    }

    errorHandler(msg) {
        alertService.addAlert(this.componentId, msg);
        
        setTimeout(() => {
            alertService.removeAlert(this.componentId);
            console.log('Removed alert', this.componentId);
        }, 3000);
    }
}

let list  = new MyComponent('listComponent');
let list2 = new MyComponent('listComponent');
let form  = new MyComponent('inputComponent');

list.errorHandler('Problem 1');
list2.errorHandler('Error!');