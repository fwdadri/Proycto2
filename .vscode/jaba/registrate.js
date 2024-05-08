let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let gmail = document.getElementById("gmail");
let password = document.getElementById("password");

let boton = document.getElementById("boton")

boton.addEventListener("click", function () {

    data = {
        nombre: nombre.value,
        edad: edad.value,
        gmail: gmail.value,
        password: password.value,
    }

    localStorage.setItem("crear", JSON.stringify(data));
   
    // crear = JSON.parse(localStorage.getItem("crear"))
    alert(crear.password)

})