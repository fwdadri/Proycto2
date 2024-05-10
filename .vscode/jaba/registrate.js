let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let gmail = document.getElementById("gmail");
let password = document.getElementById("password");

let botonCrear = document.getElementById("crear");


let usuarios =[];
botonCrear.addEventListener('click', function () {
   
   
    if (nombre.value != "" &&  password.value != "" && gmail.value != "") {

        let data= {
            nombre: nombre.value,
            edad: edad.value,
            gmail: gmail.value,
            password: password.value,
        }

        usuarios= JSON.parse(localStorage.getItem("crear")) || [];
        usuarios.push(data)

        localStorage.setItem("crear",JSON.stringify(usuarios))
    
    }
});
    







