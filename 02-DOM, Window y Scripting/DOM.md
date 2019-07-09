# DOM (Document Object Model)

Es una interfaz de programación de aplicaciones *(API)* para documentos HTML, XHTML y XML. Define la estructura lógica de los documentos y el modo en que se accede y se manipula un documento.

El responsable del DOM es el *__World Wide Web Consortium (W3C)__*

El DOM permite el acceso dinámico a tráves de la programación para acceder, aadir y cambiar dinámicamente contenido estructurado en documentos con lenguajes como *ECMAScript*.

## DOM y JavaScript
El DOM no es un lenguaje de programación pero sin él, el lengaje JavaScript no tiene ningún modelo o noción de las páginas web, de las páginas XML ni de los elementos con los cuales es usualmente relacionado.

En el comienzo, JavaScript y el DOM estaban herméticamente enlazados, pero después se desarrollaron como entidades separadas. El contenido de la página es almacenado en DOM y el acceso y la manipulación se hace vía JavaScript, podría representarse aproximadamente así:

> API(web o página XML) = DOM + JS(Java Script)

## DOM en HTML

La columna vertebral de un documento HTML son los *tags*.

De acuerdo al DOM, todos los *HTML-tag* son un objeto, donde los tags anidados se llaman *children* del tag en el que estan contenidos.

El DOM tiene una estructura jerárquica, a cada elemento se le conoce como *nodo*, un *nodo* no es necesariamente un *tag* ya que un nodo puede ser de texto, un atrubuto, entre otros elementos, en general se puede representar de la siguiente manera:

![Doom tree](imagenes/DOMtree.png)



