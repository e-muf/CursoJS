// Números en JavaScript

const numero1 = 30,
      numero2 = 20,
      numero3 = 20.20,
      numero4 = 0.1020,
      numero5 = -3;

let resultado;

// Suma
resultado = numero1 + numero2;
console.log(resultado);

//Resta
resultado = numero1 - numero2;
console.log(resultado);

// Multiplicar
resultado = numero1 * 2;
console.log(resultado);

// División
resultado = numero1 / numero2;
console.log(resultado);

// Módulo
resultado = numero1 % numero2;
console.log(resultado);

// Número PI
resultado = Math.PI;
console.log(resultado);

// Redondear
resultado = Math.round(numero3);
console.log(resultado);

// Redondear para arriba
resultado = Math.ceil(2.1);
console.log(resultado);

// Redondeo para abajo
resultado = Math.floor(2.99);
console.log(resultado);

// Raíz cuadrada
resultado = Math.sqrt(144);
console.log(resultado);

// Valor absoluto
resultado = Math.abs(numero5);
console.log(resultado);

// Potencia
resultado = Math.pow(8, 30);
console.log(resultado);

// Mínimo
resultado = Math.min(3, 6, 5, 1, 9, 7, 8);
console.log(resultado);

// Máximo
resultado = Math.max(3, 6, 5, 1, 9, 7, 8);
console.log(resultado);

// Aleatorio
resultado = Math.random();
console.log(resultado);

// Post incremento
let puntaje = 10;
console.log(puntaje++); // Aquí va a aparecer 10
console.log(puntaje); // Aquí va a aparecer 11

// Pre incremento
puntaje = 10;
console.log(++puntaje); // Aquí va aparecer 11

// Post decremento
puntaje = 10;
console.log(puntaje--) // Aquí va a aparecer 10
console.log(puntaje); // Aquí va a aparecer 9

// Pre decremento
puntaje = 10;
console.log(--puntaje); // Aquí va a aparecer 9

// Incremento
puntaje = 20;
console.log(puntaje += 3); // Suma una cantidad a nuestra variable

// Decremento
puntaje = 20;
console.log(puntaje -= 5) // Resta cualquier valor a nuestra variable

// toFix() Solo aplica a números (Truncamiento)
let dato = 1532151561;
console.log(dato.toFixed())

dato = 1532151561.15151;
console.log(dato.toFixed())
console.log(dato.toFixed(4))

