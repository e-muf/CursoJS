# Módulos en JS

Un módulo en programación va a permitir agrupar funcionalidad relacioanda en un mismo archivo, de esta forma, conforme el proyecto crezca será más fácil de mantener y estará mejor organizado.

La ventaja principal de un módulo es utilizarlo únicamente donde sea requerido, dejando el resto del programa oculto para el resto del código y también re-utilizar código.

Antes de la llegada de ES6, JavaScript no soportoba de forma nativa el uso de módulos.

## Beneficios

- Dividir el código en pequeños archivos con funcionalidad relacionada.

- Un módulo puede ser utilizado facilmente en otra aplicación.

- Dependencia y Encapsulación.

## Dependencia

Es cómun que alguno de los requerimientos de un sistema que se está desarrollando, se pueda implementar usando como base una solución ya existente.

En el instante en que se introduce un componente ya existente dentro de un nuevo proyecto, se crea una **_dependencia_** entre éste proyecto y el componente utilizado.

Dado que estas piezas necesitan trabajar en conjunto, es importante que no existan conflicto entre ellas.

## Encapsulación

Evita el conflicto con el nombre de las variables. A medida que JavaScript se usa con mayor frecuencua los *namespaces* y las dependencias se vuelven cada vez más difíciles de manejar.

La idea de crear módulos ayuda a evitar que si se tienen dos módulos con una función con el mismo nombre, no se tenga conflictos entre estos.

## Desventajas
- Cada Script es un llamado HTTP lo cual hace el sitio más lento.

- Cada Script detiene la ejecución mientras se descarga.

- El manejo de las dependencias es manual. Si una función se encuentra en un archivo B y se utiliza en un archivo A sin haberse cargado causará un conflicto.

- Tener una dependencia muy grande y utilizar solo una función de está sera poco eficiente.