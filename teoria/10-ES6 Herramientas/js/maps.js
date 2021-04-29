// Maps
let cliente = new Map();

// Agregar elementos al map (CLAVE, VALOR)
cliente.set('nombre', 'Emanuel');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

console.log(cliente);

// Acceder a los valores
console.log(`Nombre: ${cliente.get('nombre')}`);
console.log(`Saldo: ${cliente.get('saldo')}`);
console.log(`Tipo: ${cliente.get('tipo')}`);

// Métodos para los Maps
// Tamaño del Map
console.log(cliente.size);

// Comprobar que un valor existe
console.log(cliente.has('tipo')); // True
console.log(cliente.has('apellido')); // False

// Borrar un elemento del Map
cliente.delete('nombre');
console.log(cliente);

// Limpiar el Map
cliente.clear()
console.log(cliente);

// Crear un Map con valores por defecto

const paciente = new Map(
    [['nombre', 'paciente'],
    ['habitacion', null]]
);

paciente.set('nombre', 'Emanuel');
paciente.set('habitacion', 2807);

console.log(paciente);

// Recorrer un Map con un foreach
paciente.forEach((datos, index) => {
    console.log(`${index}: ${datos}`);
})
