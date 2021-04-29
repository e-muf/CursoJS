const Vendedor = function(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

const Comprador = function(nombre) {
    this.nombre = nombre;
}

Vendedor.prototype = {
    oferta: function(articulo, precio) {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos en ${precio}`);
    },

    vendido: function(comprador) {
        console.log(`Vendido a ${comprador} (Sonido de mazo)`);
    }
}

Comprador.prototype = {
    oferta: function(mensaje, comprador) {
        console.log(`${comprador.nombre} : ${mensaje}`);
    }
}

const Subasta = function() {
    let compradores = {};

    return {
        registrar: function(usuario) {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

// Instanaciar las clases 
const emanuel = new Comprador('Emanuel');
const sarahi = new Comprador('Sarahi');
const monica = new Comprador('Monica');

const vendedor = new Vendedor('Vendedor');

const subasta = new Subasta();
subasta.registrar(emanuel);
subasta.registrar(sarahi);
subasta.registrar(monica);


vendedor.oferta('Mustang', 3000);
emanuel.oferta(3500, emanuel);
sarahi.oferta(4000, sarahi);
monica.oferta(10000, monica);
vendedor.vendido(monica.nombre)
