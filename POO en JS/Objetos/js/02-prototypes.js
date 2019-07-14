// Prototypes 
// Cuando se crea una 'clase' como una función se pueden poner sus atributos y funciones dentro de la 'clase', pero si tenemos una cantidad n de objetos igual habrá una cantidad n de funciones que serviran para lo mismo. Prototype servirá, para que todas las funciones y todos los métodos utilicen la misma localidad de memoria y unicamente se llamen para cada objeto.

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Crear un prototype
Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 1000) {
        tipo = 'Gold'
    }
    else if(this.saldo > 500) {
        tipo = 'Platinum';
    }
    else {
        tipo = 'Normal';
    }

    return tipo;
}

// Prototipo que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, tu saldo es de ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`; 
}

Cliente.prototype.retirarSaldo = function(retiro) {
    this.saldo -= retiro;
}

const cliente1 = new Cliente('Emanuel', 2000);

console.log(cliente1);
console.log(cliente1.tipoCliente());
console.log(cliente1.nombreClienteSaldo());
cliente1.retirarSaldo(500);
console.log(cliente1.nombreClienteSaldo());

// Se pueden crear varios objetos con la misma función
const cliente2 = new Cliente('Erick', 100);

console.log(cliente2);
console.log(cliente2.tipoCliente());
console.log(cliente2.nombreClienteSaldo());

// Herencia
function Empresa(nombre, saldo, telefono, tipo) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}

// Heredar prototype
Empresa.prototype = Object.create(Cliente.prototype);

const empresa = new Empresa('Proteco', 123456, 554645454254, 'Educacion');
console.log(empresa);
console.log(empresa.nombreClienteSaldo());