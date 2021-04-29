// Variables

const listTweets =  document.querySelector('#lista-tweets');

// Event Listeners

eventListeners();

function eventListeners() {
    // Cuando se envía el formualario
    document.querySelector('#formulario').addEventListener('submit', addTweet);

    // Borrar Tweets
    listTweets.addEventListener('click', deleteTweet);

    // Contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageLoaded);
}

// Functions

// Agregar Tweet
function addTweet(event) {
    event.preventDefault();
    
    // Leer el valor del Text Area
    const tweet = document.getElementById('tweet').value;

    // Crear botón de eliminar
    const deleteBoton = document.createElement('a');
    deleteBoton.classList = 'borrar-tweet';
    deleteBoton.innerText = 'X';

    // Crear elemento y añadir el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet.trim();

    // Añade el boton de borrar al tweet
    li.appendChild(deleteBoton);

    // Añade el tweet a la lista
    listTweets.appendChild(li);

    // Añadir a Local Storage
    addTweetToLocalStorage(tweet);
}

// Elimina el Tweet del DOM
function deleteTweet(event) {
    event.preventDefault();

    if(event.target.className === 'borrar-tweet') {
        event.target.parentElement.remove();
        deleteTweetFromLocalStorage(event.target.parentElement.innerText);
    }
}

// Mostrar datos de Local Storage en la lista
function localStorageLoaded() {
    let tweets;

    tweets = getTweetsFromLocalStorage();

    tweets.forEach(tweet => {
        const deleteBoton = document.createElement('a');
        deleteBoton.classList = 'borrar-tweet';
        deleteBoton.innerText = 'X';

        // Crear elemento y añadir el contenido a la lista
        const li = document.createElement('li');
        li.innerText = tweet.trim();

        // Añade el boton de borrar al tweet
        li.appendChild(deleteBoton);

        // Añade el tweet a la lista
        listTweets.appendChild(li);
    });
}

// Agrega Tweet a Local Storage
function addTweetToLocalStorage(tweet) {
    let tweets;
    tweets = getTweetsFromLocalStorage();

    tweets.push(tweet);

    // Convertir de String a arreglo 
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Comprobar elementos en Local Storage
function getTweetsFromLocalStorage() {
    let tweets;

    if(localStorage.getItem('tweets') === null) {
        tweets = [];
    }
    else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

function deleteTweetFromLocalStorage(tweet) {
    let tweets, tweetToDelete;

    // Elimina la X del tweet
    tweetToDelete = tweet.slice(0,-1);
    
    tweets = getTweetsFromLocalStorage();
    const index = tweets.indexOf(tweetToDelete);
    tweets.splice(index, 1);
    localStorage.setItem('tweets', JSON.stringify(tweets));
}