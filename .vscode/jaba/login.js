

let username = document.getElementById("username");
let password = document.getElementById("password");

let boton = document.getElementById("botonLogin");


boton.addEventListener("click", function( ) {
    if (username.value != "" && password.value !="" ) {
        //obtener una sola parte                   //nombre del key
         registro = JSON.parse(localStorage.getItem("usuario"))
 
        //esos dos tienen el registro
   
        // el find es cmo un for que recorre una lista o array
          let encontrado = registro.find(key => key.gmail == username.value && key.password == password.value)
                                      //es un key, puede tener cualquier key como index que recorre y es el que encuentra lo que queremos
           if (encontrado) {
               localStorage.setItem("usuario",JSON.stringify(encontrado))
               alert ("registro encontrado")
               window.location.href= "principal.html"
           
           }else{
                   alert ("no puede entrar");
           }
   
   
       }else{
           alert ("campos incompletros")
       }
}) 

