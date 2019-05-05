const numero1 = 20,
      numero2 = 50,
      numero3 = '20';

// Mayor que
console.log(numero1 > numero2); // false

// Menor que
console.log(numero1 < numero2); // true

// Igual que
// == Solo revisa el valor
console.log(20 == '20'); // true

console.log('hola' == ' hola'); // false

// Revisa el valor y le tipo de dato
console.log(20 === '20'); // false

console.log(numero1 === numero3) // false

// Diferente
console.log(numero1 != numero2); // true

console.log(numero1 != numero3); // false

// Caso especial
console.log(null == undefined); // true

console.log(null === undefined); // false