const numero1 = "50",
      numero2 = 10,
      numero3 = 'tres';

// *** String a número ***
// Si se suma un string y un número se concatena
console.log(numero1 + numero2); // '50' + 10 = 5010

// Para convertir el string a número
console.log(Number(numero1) + numero2); // 50 + 10 = 60

// Un caso extraño de JS: string - numero 
console.log(numero1 - numero2); // '50' - 10 = 40

// Castear a número
console.log(typeof parseInt(numero1)); 

console.log(typeof Number(numero3)); // Convierte a NaN (Not a Number)

let dato;

dato = Number('20');
console.log(dato);

dato = Number('20.10931');
console.log(dato);

dato = Number(true);
console.log(dato); // true = 1, false = 0

dato = Number(false);
console.log(dato);

dato = Number(null);
console.log(dato); // 0

dato = Number(undefined);
console.log(dato); // NaN

dato = Number('Hola mundo');
console.log(dato); // NaN

dato = Number([1,2,3,4,5])
console.log(dato); // NaN

// parseFloat() y parseInt()
dato = parseInt('100');
console.log(dato); // 100

dato = parseFloat('100');
console.log(dato); // 100

dato = parseFloat('100.2030');
console.log(dato); // 100.203

dato = parseInt('100.2030');
console.log(dato); // 100

// *** Número a String ***
let cp = 854678;
cp = String(cp);
console.log(cp);
console.log(cp.length)

dato = '4' + '4'
console.log(dato) // 44

dato = true
dato = String(dato);
console.log(dato); // true
console.log(typeof dato); // string

dato = String(1, 2, 3);
console.log(dato);
console.log(dato.length)
console.log(typeof dato)

// Métoodo toString()
dato = 20;
dato = dato.toString()
console.log(dato)

