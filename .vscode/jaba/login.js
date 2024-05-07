let username = document.getElementById("username");
let password = document.getElementById("password");

let boton = document.getElementById("boton");

boton.addEventListener("click", function() {

    data = {
        username: username.value,
        password: password.value
    }
    localStorage.setItem("login", JSON.stringify(data));
   
    const registro = Array(JSON.parse(localStorage.getItem("crear"))) || [];

    // const valiUser = login.find(data => data.username == username)
    const vali = registro.find(data => data.gmail == username.value && data.password == password.value);

    if (vali) { 
        // alert ("bienvenido" + vali.username)
        window.location.href = "principal.html"
        // alert(login.password)
     }else{
      

        alert ('contraseña o user incorrecto')
        return alert ('usuario o contraseña incorrecta')
     }
       

})

