

let username = document.getElementById("username");
let password = document.getElementById("password");
let boton = document.getElementById("botonLogin");


boton.addEventListener("click", function( ) {
    if (username.value != "" && password.value !="" ) {
        //el parse es obtener una sola parte                   
        registro = JSON.parse(localStorage.getItem("crear"))//nombre del key
        //esos dos tienen el registro
        console.log(username.value + password.value)
        console.log(registro)


        let encontrado = registro.find(key => key.gmail == username.value && key.password == password.value) 
//es un key, puede tener cualquier key como index que recorre y es el que encuentra lo que queremos
     if (encontrado) {              // el find es cmo un for que recorre una lista o array

        localStorage.setItem("usuario",JSON.stringify(encontrado))
        alert ("bienvenido");
        let nombre = document.getElementById("name");

        nombre.innerHTML = usuario.nombre;
        window.location.href = "principal.html"
           
        }else{
         alert ("contraseña o correo incorrecto");
        }
      
    }else{ // un if solo puede tener un else
        alert ("campos incompletos");
    }
})

