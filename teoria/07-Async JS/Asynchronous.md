# Código Síncrono o Synchronous

El el código síncrono, es aquel código donde cada instrucción espera a la anterior para ejecutarse, si se tiene un programa de 2 líneas, la línea 2 no puede empezar sin haber terminado la línea 1.

# Código Asíncrono o Asynchronous

Un código asíncrono no espera a las instrucciones diferidas y continúa con su ejecución. Por lo general la asincronía permite tener una mejor respuesta en las aplicaciones y reduce el tiempo de espera del cliente.

## Asyncronous en JS

La mayor parte de las veces que se escribe código asíncrono será cuando se interactue con una API o REST API.

XMLHTTPRequest y Fetch API son ejemplos de código asíncrono.

Se disponen de las siguientes funciones para crear código asíncrono:

- Callbacks
- Promises
- Async/Await

### Callbacks
Una función callback es una función de primer nivel que se pasa a otra función como variable y ésta es ejecutada en algún punto de la ejecución de la función que la recibe.

~~~
const callback = () => {
  console.log('Llamando a mi callback');
}

function otraFuncion(callback) {
  console.log('Ejecutando otra funcion');
  callback();
}

//Funcion anonima que funciona como callback
function otraFuncionAnonima(() => {
  console.log('Llamando a un callback anonimo');
});
~~~

### Callback Hell

Usar correctamente los callbacks a veces puede ser poco intuitivo y puede derivar en situaciones como las siguientes:

~~~
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})
~~~

Esto pasa cuando no se tiene buenas prácticas, pero ejemplos como estos se pueden mejorar rápidamente usando técnicas de modularización y manejo de errores. Pueden ver más sobre esto en callbackhell.com

### Promises

El objeto promesa es un proxy para un valor que no necesariamente se conoce al momento de creada la promesa. Permite asociar callbacks que se ejecutarán dependiendo del éxito o fracaso de la acción prometida. Las promesas pueden tener 3 estados definidos:

- pendiente *(pending)*: estado inicial, no cumplida o rechazada.
- cumplida *(fulfilled)*: significa que la operación se completó satisfactoriamente.
- rechazada *(rejected)*: significa que la operación falló.

Cuando creamos una promesa ésta recibe como parámetro una función con dos parámetros: el primero es una referencia a la función de éxito y el otro a una función de error.

~~~
var myPromise = new Promise((resolve, reject) => {
  
  //Instrucciones que se van a ejecutar 

 if(/* Termino correctamente */) {
   resolve('Success!');
 } else {
    reject('Failure!');
 }
});

myPromise.then(function() { 
  /* hacer algo mas cuando la promesa sea resuelta */
}).catch(function() {
  /* capturar el error */
})
~~~