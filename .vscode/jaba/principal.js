const user = JSON.parse(localStorage.getItem('login')) || false
// if (!user) { //para aque no entre si pone la direccion de la pagina en el navegador
//     window.location.href = 'login.html'
// }


const salir = document.getElementById("salir")
///boton d salir
salir.addEventListener('click', function() {

    alert('bye')

    localStorage.removeItem('principal.html')

    window.location.href = "login.html" //devolever al login
})


////////////////////////////////////////////////////////////////////////////////////////////


let nombre = document.getElementById("nombre1");

let direc = document.getElementById("src");


let btn = document.getElementById("btnGuardar");


let Guardado = [];

btn.addEventListener('click', function () {
    usuarioLoggeado= JSON.parse(localStorage.getItem("usuario"))

    let data ={
        nombre: nombre.value,
        src: src.value,
        correo: usuarioLoggeado.gmail
    }
    
    Guardado = Array(localStorage.getItem("portafolios")) || []
    Guardado.push(JSON.stringify(data))

    localStorage.setItem("portafolios", Guardado);

    get item del usuario
    get item portafolio
    crear nueva lista con los portafoios del usuario
    comparar
    la lista puede que sea un un objeto o un array 

    sabado en la mañana 10-12
    domingo despues de las 8 pm



    //localStorage.setItem("usuarios",JSON.stringify(loGuardado))

});