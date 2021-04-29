// Class

class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // Cualquier función que se agregue va a pertencer al prototype
    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es de ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
    }

    tipoCliente() {
        let tipo;

        if(this.saldo > 10000) {
            tipo = 'Gold';
        }
        else if(this.saldo > 5000) {
            tipo = 'Platinum';
        }
        else {
            tipo = 'Normal';
        }
        
        return tipo;
    }

    retirarSaldo(retiro) {
        this.saldo -= retiro;
    }

    // static pertenece a la clase no al objeto
    static bienvenida() {
        return `Bienvenido al cajero`
    }
}

console.log(Cliente.bienvenida());

const maria = new Cliente('Maria', 'Flores', 2000);
console.log(maria);
console.log(maria.imprimirSaldo());
maria.retirarSaldo(700);
console.log(maria.imprimirSaldo());

// Herencia 
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.tipo = tipo;
    }

    static bienvenida() {
        return super.bienvenida() + ' para empresas';
    }
}

const empresa = new Empresa('Empresa1', 10000, 123456, 'Construccion');
console.log(empresa.imprimirSaldo());
console.log(Empresa.bienvenida());