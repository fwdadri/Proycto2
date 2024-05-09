const user = JSON.parse(localStorage.getItem('login')) || false
if (!user) { //para aque no entre si pone la direccion de la pagina en el navegador
    window.location.href = 'login.html'
}


const salir = document.getElementById("salir")
///boton d salir
salir.addEventListener('click', function() {

    alert('bye')

    localStorage.removeItem('principal.html')

    window.location.href = "login.html" //devolever al login
})

//////////////////////////////////////////////////////////////////////////////

var nombre = [],
    src = [],

    if (localStorage.getItem('cat') != null) {
        nombre = JSON.parse(localStorage.getItem('cat'));
        src = JSON.parse(localStorage.getItem('dog'));
    }

var elementoBtnRegistrar = document.querySelector('#btnGuardar');

elementoBtnRegistrar.addEventListener('click, registrarLibros');

function registarLibros() {

    let  name = document.querySelector('#nombre').value,
    let direccion = document.querySelector('#src').value,


    nombre.push('name');
    src.push('direccion');


    localStorage.setItem('cat', JSON.stringify(nombre));
    localStorage.setItem('dog', JSON.stringify(src));



    
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function llenarTablas() {
    var tbody = document.querySelector('#tblLibros tbody');

    tbody.innerHTML = "";

    var aid = JSON.parse(localStorage.getItem('cat'));
    var nom =  JSON.parse(localStorage.getItem('dog'));



    var cantidadTablas = aid.length;


    for(var i = 0; i < cantidadTablas; i++ ){

        var fila = document.createElement('tr');

        var celda1 = document.createElement('td');
        var celda2 = document.createElement('td');

        var nodotxt1 = document.createTextNode(aid [i]);
        var nodotxt2 = document.createTextNode(nom [i]);

        celda.appendChild(nodotxt1);
        celda.appendChild(nodotxt2);
        
        fila.appendChild(celdaaid.appendChild(nodotxt));
        fila.appendChild(celdaaid.appendChild(nodotxt2));

        tbody.appendChild(fila)

    }


    
}

