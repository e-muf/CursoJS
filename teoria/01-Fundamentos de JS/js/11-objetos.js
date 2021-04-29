// *** Crear objeto ***

const persona = {
    nombre: 'Miguel',
    apellido: 'Flores', 
    profesion: 'Arquitecto',
    email: 'correo@correo.com',
    edad: 22,
    musica: ['Rock', 'Metal', 'Pop'],
    direccion: {
        ciudad: 'CDMX',
        calle: 'Universidad'
    },
    nacimiento: function() {
        return new Date().getFullYear() - this.edad;
    }
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.musica[2]);
console.log(persona.direccion.calle)

console.log(persona['nombre'])
console.log(persona['direccion']['ciudad'])

console.log(persona.nacimiento())

// *** Arreglo de objetos ***
const autos = [
    {modelo: 'Mustang', motor: 6.0},
    {modelo: 'Camaro', motor: 6.1},
    {modelo: 'Challenger', motor: 6.3}
];

console.log(autos[0].modelo);

for(let i = 0; i < autos.length; i++) {
    console.log(`${autos[i].modelo} ${autos[i].motor}`);
}

// Aunque la variable se de tipo const, se puede modificar si accedemos a cada uno de los valores
autos[0].modelo = 'Audi';
console.log(autos)