var pantalla = window.addEventListener('load', esperar)

function esperar() {

    if (pantalla != true) {
        const cuerpo = document.getElementById('cuerpo');
        cuerpo.style.visibility = 'hidden';
    } else {

    }
}