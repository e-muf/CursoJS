# Local Storage

Es un tipo de *almacenamiento web* que permite a los sitios web y aplicaciones de JavaScript almacenar y acceder a los datos directamente en el navegador sin fecha de vencimiento. Esto significa que los datos almacenados en el navegador persistirán incluso después de que se haya cerrado la ventana del navegador.

# Session Storage 

Almacena los datos de una sesión y éstos se eliminan cuando el navegador se cierra. La sesión de la página perdura mientras el navegador se encuentra abierto, y se mantiene por sobre las recargas y reaperturas de la página. Abrir una página en una nueva pestaña o ventana iniciará una nueva sesión, lo que difiere en la forma en que trabajan las cookies de sesión.

## Características de *Local Storage* y *Session Storage*

- Permiten almacenar entre 5MB y 10MB de información; incluyendo texto y multimedia.

- La información está almacenada en la computadora del cliente y NO es enviada en cada petición del servidor, a diferencia de las cookies.

- Utilizan un número mínimo de peticiones al servidor para reducir el tráfico de la red.

- Previenen pérdidas de información cuando se desconecta de la red.

- La información es guardada por domino web (incluye todas las páginas del dominio).

## ¿Dónde veo Local Storage?

Para poder ver los datos almacenados en *Local Storage* se debe hacer lo siguiente:

1. Dentro de la página web dar click derecho.
2. Seleccionar la opción *_Inspeccionar_*.
3. En la venta que se abrió encontrar una pestaña llamada *_Application_* o *_Storage_*, el nombre varía dependiendo del navagor.
4. Seleccionar *_Local Storage_*.