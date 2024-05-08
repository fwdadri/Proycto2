

let username = document.getElementById("username");
let password = document.getElementById("password");

let boton = document.getElementById("botonLogin");


function boton() {

    if (username.value != "" && password.value !="" ) {
    
      registro = JSON.parse(localStorage.getItem("usuario"))
    
      console.log(usuario)

      let encontrado = registro.find(usuario => usuario.correo == username.value && usuario.password == password.value)
        if (encontrado) {
            localStorage.setItem("usuario",JSON.stringify(encontrado))
            alert ("registro encontrado")
            window.location.href= "principal.html"
        
        }else{
                alert ("no pude entrar")
        }


    }else{
        alert ("campos incompletros")
    }
   
           
}  


