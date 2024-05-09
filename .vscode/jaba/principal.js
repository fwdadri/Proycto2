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




let guardar = document.getElementById("btnGuardar");


guardar.addEventListener('click', function() {
    alert("holi")
    let nombre = document.getElementById("nombre")
    let src = document.getElementById("src")
    
   //trtando de generar filas
    document.getElementById("cantidad").insertRow(-1).innerHTML = '<td></td><td></td><td></td><td></td><td></td><td></td>';

    document.getElementById("nombreAr").innerHTML = nombre.value

    document.getElementById("nombreSrc").innerHTML = src.value
})


