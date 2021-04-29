// Promises

const esperando = new Promise(function(resolve, reject) {

    setTimeout(function() {
        resolve('Se ejecuto');
    }, 5000);

});

esperando.then(function(mensaje) {
    console.log(mensaje);
});

const aplicarDescuento = new Promise(function(resolve, reject) {
    const descuento = false;

    if(descuento) {
        resolve('Descuento aplicado');
    }
    else {
        reject('No se pudo aplicar el descuento');
    }
});

aplicarDescuento.then(function(resultado) {
    console.log(resultado);
}).catch(function(error) {
    console.log(error);
});