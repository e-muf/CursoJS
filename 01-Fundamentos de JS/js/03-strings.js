let aprendiendo = 'Aprendiendo,', 
    tecnologia = 'JavaScript';

console.log(tecnologia.length); // length nos dice de que tamaño es la cadena

console.log(tecnologia.concat(' Es genial')); // concat() sirve para concatenar cadenas, casi no se usa

console.log(tecnologia.toUpperCase()); // toUpperCase() transforma la cadena a mayúsculas

console.log(tecnologia.toLowerCase()); // toLowerCase() transforma la cadena a mínuscula

let mensaje = 'Aprendiendo JavaScript, CSS, HTML para hacer Frontend';

console.log(mensaje.indexOf('JavaScript')); // indexOf() busca la palabra dentro de la cadena y devuelve la posición de la primera letra

console.log(mensaje.substring(0, 11)); // substring() Corta la cadena desde una posición inicial hasta una posición final

console.log(mensaje.slice(-1)); // Hace lo mismo que substring pero tambíen acepta números negativos que serán el final de la cadena

console.log(mensaje.split(' ')); // split(<separador>) Separa la cadena de acuerdo al <separador> que le digamos, y las tranforma en un arreglo

console.log(mensaje.replace('CSS', 'PHP')); // replace(original, cambio) Cambia una palabra por otra

console.log(mensaje.includes('CSS')); // Regresa un booleano si una palabra se encuentra dentro de la cadena

console.log(tecnologia.concat(' ').repeat(10)); // repeat() Repite la palabra 'n' cantidad de veces

