let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let gmail = document.getElementById("gmail");
let password = document.getElementById("password");

let botonCrear = document.getElementById("botonCrear");

let lista =[];

function registar() {

    if (nombree.value != "" &&  password.value !="" && gmail.value != "") {

        data= {
            nombre: nombre.value,
            edad: edad.value,
            gmail: gmail.value,
            password: password.value,
        }
        usuario= JSON.parse(localStorage.getItem("usuario")) || [];
        usuario.push(data);

        localStorage.setItem("usuario",JSON.stringify(usuario))
    
        Window.location. href = "login.html"
    
    }else{

        alert ("no puede haber campos incompletos")
    }
    
}
    







