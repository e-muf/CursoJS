// Variables 
const carrito = document.getElementById('carrito'),
    cursos = document.getElementById('lista-cursos'),
    listaCursos = document.querySelector('#lista-carrito tbody'),
    vaciarCarritoBtn = document.getElementById('vaciar-carrito');

// listeners
cargarEventListeners();

function cargarEventListeners() {
    // Dispara cuando se presiona agregar carrito

    cursos.addEventListener('click', comprarCurso);

    // Cuando se elimina un curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    // Al cargar documento, mostrar Local Storage
    document.addEventListener('DOMContentLoaded', leerlocalStorage);
}

// Functions

// Añadir el curso al carrito
function comprarCurso(event) {
    event.preventDefault();

    // Delegation para agregar carrito
    if(event.target.classList.contains('agregar-carrito')) {
        const curso = event.target.parentElement.parentElement;

        leerDatosCurso(curso);
    }
}

// Leer los datos del curso
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoCurso);
}

// Muestra el curso seleccionado en el carrito
function insertarCarrito(curso) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td> 
            <img src="${curso.imagen}" width=100px>
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X<a>
        </td>
    `;

    listaCursos.appendChild(row);
    guardarCursoLocalStorage(curso);
}

// Eliminar el curso del carrito en el DOM  
function eliminarCurso(event) {
    event.preventDefault();

    let curso,
        cursoID;

    if(event.target.classList.contains('borrar-curso')) {
        curso = event.target.parentElement.parentElement;
        cursoID = curso.querySelector('a').getAttribute('data-id');
        curso.remove();
    }

    eliminarCursoLocalStorage(cursoID);
}

// Elimina los cursos del carrito en el DOM 
function vaciarCarrito() {
    // Forma lenta (No recomendada)
    // listaCursos.innerHTML = '';

    // Forma rápida (Recomendada)
    while(listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }

    // Para comprobar la velocidad revisar la siguiente página
    // https://jsperf.com/innerhtml-vs-removechild/418

    // Vaciar Local Storage
    vaciarLocalStorage();
}

// Almacenar cursos del carrito en Local Storage
function guardarCursoLocalStorage(curso) {
    let cursos;

    cursos = getCursosLocalStorage();

    cursos.push(curso);

    localStorage.setItem('cursos', JSON.stringify(cursos));
}

// Revisar que tenga información Local Storage
function getCursosLocalStorage() {
    let cursosLS;

    if(localStorage.getItem('cursos') === null) {
        cursosLS = [];
    }
    else {
        cursosLS = JSON.parse(localStorage.getItem('cursos'));
    }

    return cursosLS;
}

// Imprime los cursos de Local Storage en el carrito
function leerlocalStorage() {
    let cursosLS;

    cursosLS = getCursosLocalStorage();

    cursosLS.forEach(curso => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td> 
                <img src="${curso.imagen}" width=100px>
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X<a>
            </td>
        `;

        listaCursos.appendChild(row);
    });
}

// Eliminar curso por el ID en Local Storage
function eliminarCursoLocalStorage(cursoID) {
    let cursosLS;

    cursosLS = getCursosLocalStorage();

    cursosLS.forEach( (curso,index) => {
        if(curso.id === cursoID) {
            cursosLS.splice(index, 1);
        }
    });
    
    localStorage.setItem('cursos', JSON.stringify(cursosLS));
}

function vaciarLocalStorage() {
    localStorage.clear();
}