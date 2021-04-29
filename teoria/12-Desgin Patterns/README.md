# Design Patterns

Los patrones de diseño son soluciones de código re-utilizables que se utilizan en problemas comunes en aplicaciones de Software.

Cada problema de programación es diferente por lo tanto el patrón puede ser similar pero el código siempre es diferente.

## Categorías de Patrones

### Creacionales
Facilitan la tarea de creación de nuesvos objetos, de tal forma que el proceso de creación pueda ser desacoplado de la implementación del resto del sistema. Se basan en dos conceptos:
 - Encapsular el conocimentos acerca de los tipos concretos que el sistema utiliza. 
- Ocultar cómo estas implementaciones concretas necesitan ser creadas y cómo se combinan entre sí. 

### Estructurales
Definen como se componen y relacionan los objetos entre sí. La idea es que cuando haya cambios, impacten lo menos posiible el sistema.

### De Comportamiento
Definen la interdependencia y comunicación entre objetos, en algunas ocaciones si un objeto cambia, como afecta a otros objetos que dependen de él.

### De Arquitectura
Define funcionalidad específica sobre la arquitectura de una aplicación como carpetas, nombres, que hace cada archivo y como se relacionan. Es el conjunto de las otras categorías.

## Patrones *Creacionales*

### Abstract Factory
Provee una interfaz que delega la creación de un conjunto de objetos relacionados sin necesidad de especificar en ningún momento cuáles son las implementaciones concretas.

### Factory Method
Expone un método de creación, delegando en las subclases la implementación de este método.

### Builder
Separa la creación de un objeto complejo de su estructura, de tal forma que el mismo proceso de contrucción nos puede servir para crear representaciones diferentes.

### Singleton
Limita a uno el número de instancias posibles de una clase en el programa, y proporciona un acceso global al mismo.

### Prototype
Permite la creación de objetos basado en *plantillas*. Un nuevo objeto se crea a partir de la clonación de otro objeto.

## Patrones *Estructurales*

### Adapter
Permite a dos clases con diferentes interfaces trabajar entre ellas, a través de un objetos intermedio con el que se comunican e interactúan.

### Bridge
Desacopla a una abstracción de su implementación, para que las dos puedan evolucionar de forma independiente.

### Composite
Facilita la creación de estructuras de objetos en árbol, donde todos los elementos emplean una misma interfaz. Cada uno de ellos puede a su vez contener un listado de esos objetos, o ser el último de esa rama.

### Decorator
Permite añadir funcionalidad extra a un objeto (de forma dinámica o estática) sin modificar el comportamiento del resto de objetos del mismo tipo.

### Facade
Facade (Fachada) es un objeto que crea una interfaz simplificada para tratar con otra parte del código más compleja, de tal forma que simplifica y aísla su uso. Un ejemplo podría ser crear una fachada para tratar con una clase de una librería externa.

### Flyweight 
Una gran cantidad de objetos comparte un mismo objeto con propiedades comunes con el fin de ahorrar memoria.

### Proxy
Es una case que funciona como interfaz hacia cualquier otra cosa: una conexión a internet, un archivo en disco o cualquero otro recurso que sea costoso o imposible de duplicar.

## Patrones *De Comportamiento*

### Command
Son objetos que encapsulan una acción y los parámetros que necesitan para ejecutarse.

### Chain of Responsability 
Se evita acoplar al emisor y receptor una petición dando la posibilidad a varios receptores de consumirlo. Cada receptor tiene la opción de consumir su petición o pasárselo al siguiente dentro de la cadena.

### Interpreter
Define una representación para una gramática así como el mecanismo para evaluarla. El árbol de sintaxis del lenguaje se suele modelar mediante el patrón Composite.

### Iterator
Se utiliza para poder mocernos por los elementos de un conjunto de forma secuencial sin necesidad de exponer su implementación específica.

### Mediator
Objeto que encapsula cómo otro conjunto de objetos interactuán y se comunican entre sí.

### Memento
Este patrón otorga la capacidad de restaurar un objeto a un estado anterior.

### Observer
Los objetos son capaces de suscribirse a una serie de eventos que otro objeto va a emitir, y serán avisados cuando esto ocurra.

### State
Permite modificar la forma en que un objeto se comporta en tiempo de ejecución, basándose en su estado interno.

### Strategy
Permite la selección del algoritmo que ejecuta cierta acción en tiempo de ejecución.

### Template Method
Especifíca el esqueñeto de un algoritmo, permitiendo a las subclases definir cómo se implementan el comportamiento real.

### Visitor
Permite separar el algoritmo de la estrucutura de datos que se utilizará para ejecutarlo. De esta forma se pueden añadir nuevas operaciones a estas estructuras sin necesidad de modificarlas.

## Patrones *De Arquitectura*

### MVC (Model View Controller)
Separa los datos de una aplicación, la interfaz de usuario, y la lógica de control en tres componentes distintos.
- El **Modelo** contiene una representación de los datos que maneja el sistema, su lógica de negocio, y sus mecanismos de persistencia.
- La **Vista**, o interfaz de usuario, que compone la información que se envía al cliente y los mecanismos de interacción con éste.
- El **Controlador**, que actúa como intermediario entre el Modelo y la Vista, gestionando el flujo de información entre ellos y las transformaciones para adaptar los datos a las necesidades de cada uno.

### MVP (Model View Presenter)
Es una derivación de MVC, es utilizado mayoritariamente para construir interfaces de usuario. Asume la funcionalidad del *intermediario*. En MVP, toda lógica de presentación es colocada como el presentador.

Facilita pruebas de unidad automatizada y mejora la separación de inquietudes en lógica de presentación:
- El **Modelo** es una interfaz que define los datos que se mostrará o no actuado en la interfaz de usuario.
- La **Vista** es una interfaz pasiva que exhibe los datos y órdenes de usuario de las rutas al presentador para actuar sobre los datos.
- El **Presentador** actúa sobre el Modelo y la Vista. Recupera los datos de los repositorios (el modelo), y los formatea para mostrarlos en la vista.

### MVVM (Model View View Model)
Se caracteriza por tratar de desacoplar lo máximo posible la interfaz de usuario de la lógica de la aplicación.

- El **Modelo** representa la capa de datos y/o la lógica de negocio.

- La **Vista** representa la información a través de los elementos visuales que la componen. Son activas, contienen comportamientos, eventos y enalces a datos que, en cierta manera, necesitan tener conocimineto del modelo subyacente.

- El **Modelo Vista** es un actor intermeiario entre el modelo y la vista, contiene toda la lógica de presentación y se comporta como una abstrcción de la interfaz. La comunicación entre la vista y el *view model* se realiza por mmedio de los enlaces de datos.