# Fetch API 

Fetch ofrece una definición genérica de los objetos Request y Response (y otras cosas relacionadas con las solicitudes de red). Esto permitirá su uso donde sea necesario en un futuro, ya sea para operadores de servicios, API caché y otras cosas similares que manipulen o modifiquen las solicitudes y respuestas, o cualquier otro tipo de caso de uso que pudiera requerirle la generación de sus propias respuestas mediante programación.

También proporciona una definición para conceptos relacionados, como *CORS* y la semántica de encabezado *HTTP* origen, suplantando sus definiciones separadas en otros lugares.

Para hacer una solicitud y recuperar un recurso, utilice el método `GlobalFetch.fetch`. Se implementa en múltiples interfaces, específicamente **Window** y **WorkerGlobalScope**. Esto hace que esté disponible en casi cualquier contexto donde quiera buscar recursos.

El método `fetch()` toma un argumento obligatorio, la ruta de acceso al recurso que desea recuperar. Devuelve una *Promise* que resuelve en *Response* a esa petición, sea o no correcta. También puede pasar opcionalmente un objeto de opciones init como segundo argumento.

Una vez que *Response* es recuperada, hay varios métodos disponibles para definir cuál es el contenido del cuerpo y como se debe manejar.

Puede crear una solicitud y respuesta directamente a con los constructores `Request()` y `Response()`, pero no es recomendable hacerlo directamente. En su lugar, es preferible que sean creados como resultado de otras acciones de la API (por ejemplo, FetchEvent.respondWith desde los operadores de servicios).
