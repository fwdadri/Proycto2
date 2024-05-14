const user = JSON.parse(localStorage.getItem('login')) || false

const salir = document.getElementById("salir")
///boton d salir
salir.addEventListener('click', function() {

    alert('bye');

    localStorage.removeItem('principal.html');

    window.location.href = "login.html" //devolever al login
})
/////////////////////////////////////////////////

//let usuario = JSON.parse(localStorage.getItem('usuario'))
//usuario.nombre  
//console.log(usuario.nombre) 





console.log(usuario.nombre)

////////////////////////////////////////////////////////////////////////////////////////////

let nombre = document.getElementById("nombre1");
let direc = document.getElementById("src");
let btn = document.getElementById("btnGuardar");
let Guardado = [];

btn.addEventListener('click', function () {

    if (nombre.value != "" &&  src.value != "" ) {
     usuarioLoggeado= JSON.parse(localStorage.getItem("usuario"))

      let data ={
         nombre: nombre.value,
         src: src.value,
         correo: usuarioLoggeado.gmail
      }
       
       if (portafolios == null) {
            usuarios= JSON.parse(localStorage.getItem("portafolios")) || [];//aqui se esta trayendo a la lista de usuarios y
            portafolios.push(data)//se esta agregando

            localStorage.setItem("crear",JSON.stringify(usuarios))////aqui se esta añadiendo al local storage
            alert("Añadido correctamente");
            
         }else{
            let encontrado = portafolios.find(key => key.gmail == gmail.value && key.nombre == src.nombre && key.src == src.value);

            if (encontrado) {
                Guardado = Array(localStorage.getItem("portafolios")) || [];
                Guardado.push(JSON.stringify(data));

                localStorage.setItem("portafolios", Guardado);
                alert ("Ya esta creado");  
            }         
        }
    }
alert ("campos incompletos");
 
});