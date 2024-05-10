var nombreTa = [],
    srcTa = [],

    if (localStorage.getItem('nombre') != null) {
        nombre = JSON.parse(localStorage.getItem('nombre'));
        src = JSON.parse(localStorage.getItem('src'));
    }

var elementoBtnRegistrar = document.querySelector('#btnGuardar');

elementoBtnRegistrar.addEventListener('click', registrarLibros);

function registarLibros() {

    let  name = document.querySelector('#nombre').value,
    let url =document.querySelector('#src').value,


    
    nombre.push(name);
    src.push(url);

    localStorage.setItem('nombre', JSON.stringify(nombreTa));
    localStorage.setItem('src', JSON.stringify(srcTa));
}