// En JavaScript existe un objeto llamado Date
const diaHoy = new Date();
console.log(diaHoy);

// Fecha en específico Año, Mes, Día
let navidad2017 = new Date('2017-12-25');
console.log(navidad2017);

console.log(diaHoy.getMonth()); // Regresa el mes [0-11]
console.log(diaHoy.getDay()); // Día de la semana [0-6] Inicia en Domingo
console.log(diaHoy.getDate()); // Día del mes
console.log(diaHoy.getFullYear()); // Acceder al año
console.log(diaHoy.getMinutes()); // Minutos de la hora en la que estamos
console.log(diaHoy.getHours()); // Acceder a las horas
console.log(diaHoy.getTime()); // Regresa todos los milisegundos que se han registrado desde el año 1970
// Modificar una fecha
valor = diaHoy.setFullYear(2016);
console.log(valor);
console.log(diaHoy.getFullYear());