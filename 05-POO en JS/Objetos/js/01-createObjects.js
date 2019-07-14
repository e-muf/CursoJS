// Object Literal
const cliente = {
    nombre: 'Emanuel',
    saldo: 6000,
    tipoCliente: function() {
        let tipo;

        if(this.saldo > 1000) {
            tipo = 'Gold';
        } else if(this.saldo > 500) {
            tipo = 'Platinum';
        } 
        else {
            tipo = 'Normal';
        }
        return tipo;
    }
}

console.log(cliente.tipoCliente());

// Método alternativo
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;

    this.tipoCliente = function() {
        let tipo;

        if(this.saldo > 1000) {
            tipo = 'Gold';
        } else if(this.saldo > 500) {
            tipo = 'Platinum';
        } 
        else {
            tipo = 'Normal';
        }
        return tipo;
    }
}


// new -> Siempre creara un objeto
const persona = new Cliente('Erick', 200);
console.log(persona);

// String como objeto
const nombre1 = 'Emanuel';
const nombre2 = new String('Emanuel');

console.log(nombre1);
console.log(nombre2);

// Pero esto no quiere decir que sean iguales, uno es de tipo string y otro es de tipo objeto

console.log(typeof nombre1);
console.log(typeof nombre2);

// Igual los numeros se pueden crear como objeto
const numero1 = 20;
const numero2 = new Number(20);

console.log(numero1);
console.log(numero2);

// Booleanos
const boolean1 = true;
const boolean2 = new Boolean(true);

console.log(boolean1);
console.log(boolean2);

// Funciones
const funcion1 = function(a, b) {
    return a + b;
}

const funcion2 = new Function('a', 'b', 'return a + b');

console.log(funcion1(2,3));
console.log(funcion2(3,3));

// Objetos
const persona1 = {
    nombre: 'Emanuel'
}

const persona2 = new Object({nombre: 'Emanuel'});

console.log(persona1);
console.log(persona2);

// Los valores primitivos, funciones, objetos, ..., se pueden generar como objeto con la palabra reservado new, sin embargo esto no es nada recomendable para la rapidez de la página. 