async function leerTodos() {
    // Esperar la respuesta
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');
    
    // Procede cuando la respuesta esta hecha
    const datos = respuesta.json();

    return datos;
}

leerTodos()
    .then(datos => console.log(datos))
    .catch(error => console.log(error));

