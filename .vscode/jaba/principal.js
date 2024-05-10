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
