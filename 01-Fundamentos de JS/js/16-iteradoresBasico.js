// *** for ***

// empieza; termina; incremento/decremento
for(let i = 0; i < 10; i++) {
    console.log(`Número: ${i}`);
}

for(let i = 0; i < 10; i++) {
    if(i == 5) {
        console.log('Voy en el 5');
        continue; // Pasa a la siguiente iteración sin hacer lo demás del código
    }
    console.log(i);
}

// Iterar sobre un arreglo
const arregloProductos = ['Camisa', 'Leche', 'Guitarra', 'Disco'];

for(let i = 0; i < arregloProductos.length; i++){
    console.log(`Producto: ${arregloProductos[i]}`);
}

// *** while ***
let i = 100;

// Repite de acuerdo a alguna condicion
while(i < 10){
    console.log(i++);
}

// *** do-while ***
i = 100;

do {
    console.log(i);
    i++;
} while (i < 10);

