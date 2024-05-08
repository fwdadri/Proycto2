const user = JSON.parse(localStorage.getItem('login')) || false
if (!user) {
    window.location.href = 'login.html'
}


const salir = document.getElementById("salir")

salir.addEventListener('click', function() {

    alert('bye')

    localStorage.removeItem('principal.html')

    window.location.href = "login.html"
})