let nombre = document.getElementById("nombre");
let gmail = document.getElementById("gmail");
let password = document.getElementById("password");

let botonCrear = document.getElementById("crear");


let usuarios =[];
botonCrear.addEventListener('click', function () {

    //Me trae todos los usuario del localStorage
    //parse para traer objetos del localStorage
   let usuarios = JSON.parse(localStorage.getItem("crear"));

    if (nombre.value != "" &&  password.value != "" && gmail.value != "") {

        let data= {
            nombre: nombre.value,
            gmail: gmail.value,
            password: password.value,
        }//creamos una variable con un find para ver si por medio del correo la persona ya existe en el local

        if (usuarios == null) {
            usuarios= JSON.parse(localStorage.getItem("crear")) || [];//aqui se esta trayendo a la lista de usuarios y
            usuarios.push(data)//se esta agregando

            localStorage.setItem("crear",JSON.stringify(usuarios))////aqui se esta añadiendo al local storage
            alert("Añadido correctamente");
        }else{
            let encontrado = usuarios.find(key => key.gmail == gmail.value);//validamos si la encontro

            if (encontrado) {//si la encontro envia una alerta que si fue encontrado
                alert ("Usted ya se encuentra regitrado");
    
            } else {//pero si no, lo añade al localStorage.
                
                usuarios= JSON.parse(localStorage.getItem("crear")) || [];//aqui se esta trayendo a la lista de usuarios y
                usuarios.push(data)//se esta agregando
    
                localStorage.setItem("crear",JSON.stringify(usuarios))////aqui se esta añadiendo al local storage
                alert("Añadido correctamente");
            }
        }
}else{ // un if solo puede tener un else
        alert ("campos incompletos");
    }
});
    







