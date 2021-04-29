function sumar(a, b) {
    // Suma 2 números
    return a + b;
}

// Muestra el código de la función
console.log(sumar.toString());

function Automovil(modelo, color) {
    this.modelo = modelo;
    this.color = color;
}

Automovil.prototype.toString = function autoString() {
    return `Auto: ${this.modelo}, Color: ${this.color}`
}

const auto = new Automovil('Camaro', 'Negro');
console.log(auto.toString());
