let observer = {
    obtenerOfertas: function(callback) {
        if(typeof callback === 'function') {
            this.subscribers[this.subscribers.length] = callback;
        }
    },

    cancelarOfertas: function(callback) {
        for(let i = 0; i < this.subscribers.length; i++) {
            if(this.subscribers[i] === callback) {
                delete this.subscribers[i];
            }
        }
    },

    publicarOferta: function(oferta) {
        for(let i = 0; i < this.subscribers.length; i++) {
            if(typeof this.subscribers[i] === 'function') {
                this.subscribers[i](oferta);
            }
        }
    },

    crear: function(objeto) {
        for( let i in this ) {
            if( this.hasOwnProperty(i) ) {
                objeto[i] = this[i];
                objeto.subscribers = [];
            }
        }
    }
}

// Vendedores
const proteco = {
    nuevoCurso: function() {
        const curso = 'Un nuevo curso de JavaScript!'
        this.publicarOferta(curso);
    }
}

const tienda = {
    nuevoAnuncio: function() {
        const oferta = 'Compra un celular';
        this.publicarOferta(oferta);
    }
}

// Crear los publicadores
observer.crear(proteco);
observer.crear(tienda);

const emanuel = {
    compartir: function(oferta) {
        console.log('Emanuel dice: Me interesa la oferta de ' + oferta);
    }
}

const sam = {
    interesa: function(oferta) {
        console.log('Sam dice: Excelente oferta de ' + oferta);
    }
}

proteco.obtenerOfertas(emanuel.compartir);
proteco.obtenerOfertas(sam.interesa);
proteco.nuevoCurso();
proteco.cancelarOfertas(sam.interesa);
proteco.nuevoCurso();

tienda.obtenerOfertas(sam.interesa);
tienda.nuevoAnuncio();