let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let gmail = document.getElementById("gmail");
let password = document.getElementById("password");

let botonCrear = document.getElementById("botonCrear");

let lista =[]

botonCrear.addEventListener("click", function () {

    data = {
        nombre: nombre.value,
        edad: edad.value,
        gmail: gmail.value,
        password: password.value,
    }

    console.log(lista)
    localStorage.setItem("usuario",JSON.stringify(lista))

    let usuario= localStorage.getItem("usuario")

    console.log(usuario)

});







