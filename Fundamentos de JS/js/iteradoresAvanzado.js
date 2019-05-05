// *** forEach ***
const pendientes = ['Tarea', 'Comer', 'Proyecto'];

pendientes.forEach(function(pendiente, index) {
    console.log(`${index}: ${pendiente}`);
});

// *** map ***
const carrito = [
    {id: 1, producto: 'Libro'},
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Guitarra'},
    {id: 4, producto: 'Disco'}
];

const nombreProducto = carrito.map(function(carrito) {
    return carrito.producto;
});
console.log(nombreProducto)

// *** Palabra in ***
const automovil = {
    modelo: 'Camaro',
    motor: 6.1,
    anio: 1969,
    marca: 'Chevrolet'
}

for(let auto in automovil){
    console.log(`${auto}: ${automovil[auto]}`);
}

// Array (Arreglo)
const ciudades = ['Londres', 'New York', 'Paris', 'Madrid'];

// Set (Conjunto)
const ordenes = new Set([123,231,131,102]);

// Map (Mapeo/Diccionario)
const datos = new Map();
datos.set('nombre', 'Emanuel');
datos.set('profesion', 'Estudiante de Ingeniería');

console.log(ciudades);
console.log(ordenes);
console.log(datos);

// *** Entries iterator ***
// entries() devuelve un iterador de arreglo, con su llave y el valor
for(let entrada of ciudades.entries()) {
    console.log(entrada); 
}

for(let entradas of ordenes.entries()){
    console.log(entradas);
}

for(let entrada of datos.entries()) {
    console.log(entrada);
}

// *** Values iterator ***
// Solo itera sobre el valor
for(let entrada of ciudades.values()){
    console.log(entrada);
}

for(let entrada of ordenes.values()){
    console.log(entrada);
}

for(let entrada of datos.values()) {
    console.log(entrada);
}

// *** Key iterator ***
// Itera sobre las llaves
for(let entrada of ciudades.keys()) {
    console.log(entrada);
}

for(let entrada of ordenes.keys()){
    console.log(entrada);
}

for(let entrada of datos.keys()) {
    console.log(entrada);
}

// *** Default iterator ***
for(let entrada of ciudades) {
    console.log(entrada);
}

for(let entrada of ordenes){
    console.log(entrada);
}

for(let entrada of datos) {
    console.log(entrada);
}

// *** Iterar sobre strings ***
const mensaje = 'Aprendiendo JavaScript'

for(let i = 0; i < mensaje.length; i++){
    console.log(mensaje[i]);
}

for(let letra of mensaje) {
    console.log(letra);
}

// *** Iterar sobre elementos HTML ***
const enlaces = document.getElementsByTagName('a');

for (let enlace of enlaces) {
    console.log(enlace.href);
}
