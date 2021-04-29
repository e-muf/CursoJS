// Variables
const email = document.getElementById('email'),
    asunto = document.getElementById('asunto'),
    mensaje = document.getElementById('mensaje'),
    btnEnviar = document.getElementById('enviar'),
    formularioEnviar = document.getElementById('enviar-mail'),
    btnReset = document.getElementById('resetBtn');

// Event Listeners
eventListeners();

function eventListeners() {
    // Inicio de la aplicación y deshabilitar submits
    document.addEventListener('DOMContentLoaded', inicioApp);

    // Validar el formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    // Boton de enviar en el submit
    formularioEnviar.addEventListener('submit', enviarEmail);

    // Boton de reset
    btnReset.addEventListener('click', resetFormulario);
}

// Functions

function inicioApp() {

    // Deshabilitar el envío
    btnEnviar.disabled = true;
}

// Valida que el campo tenga algo escrito
function validarCampo() {
    
    // Se valida la longitud del texto y que no este vacio
    validarLongitud(this);

    // Validar email
    if(this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if(errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }
}

// Resetear el formulario
function resetFormulario(event) {
    formularioEnviar.reset();
    
    event.preventDefault();
}

// Enviar el correo
function enviarEmail(event) {
    // Spinner al presionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    // Gif que envia email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';  

    // Ocultar Spinner y mostrar gif de enviado
    setTimeout(function() {
        spinnerGif.style.display = 'none';

        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(function() {
            enviado.remove();
            formularioEnviar.reset();
        }, 5000);
    }, 3000);

    event.preventDefault();

    
}

// Verifica la longitud del texto en los campos
function validarLongitud(campo) {
    if(campo.value.length > 0) {
        campo.style.borderBottomColor = 'green'
        campo.classList.remove('error');
    }
    else {
        campo.style.borderBottomColor = 'red'
        campo.classList.add('error');
    }
}

function validarEmail(campo) {
    const mensaje = campo.value;
    
    if(mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green'
        campo.classList.remove('error');
    }
    else {
        campo.style.borderBottomColor = 'red'
        campo.classList.add('error');
    }
}
