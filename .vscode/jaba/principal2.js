
function llenarTablas() {
    var tbody = document.querySelector('#tblLibros tbody');

    tbody.innerHTML = "";

    var aidi = JSON.parse(localStorage.getItem('nombre'));
    var nom =  JSON.parse(localStorage.getItem('src'));



    var ncantidadTablas = aidi.lenght;


    for(var i = 0; i <ncantidadTablas; i++ ){

        var fila = document.createElement('tr');

        var celda1 = document.createElement('td');
        var celda2 = document.createElement('td');

        var nodotxt1 = document.createTextNode(aidi [i]);
        var nodotxt2 = document.createTextNode(nom [i]);

        celdaaidi.appendChild(nodotxt);
        celdanom.appendChild(nodotxt2);
        fila.appendChild(celdaaidi);
        fila.appendChild(celdanom);

        tbody.appendChild(fila)

    }


    
}
 
