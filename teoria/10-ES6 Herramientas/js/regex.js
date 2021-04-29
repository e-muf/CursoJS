// Expresiones Regulares

// Crear expresiones regulares
const exp1 = new RegExp('/abc/');
const exp2 = /abc/;

console.log(exp1);
console.log(exp2);

// Probar expresiones regulares
let valor, regex;

regex = /[0-9]/;
valor = 1992;

console.log('Digito: ' + regex.test(valor));

// Buscar una fecha dd-mm-aaaa
regex = /(\d{2}-){2}\d{4}/;
valor = '27-08-2018';

console.log('Fecha: ' + regex.test(valor));

// Hora hh:mm AM/PM
regex = /\d{2}:\d{2} [AP]M/;
valor = '10:30 PM';

console.log('Hora: ' + regex.test(valor));

// Negar una expresion
regex = /[^0-9]/;
valor = '123465';

console.log('Negado: ' + regex.test(valor));

// Mayusculas
regex = /[A-Z]+/
valor = 'HOLA MUNDO';

console.log('Mayusculas: ' + regex.test(valor));