function guardarDatosPersona(event){
    let nombres = document.getElementById("nombres");
    let apellidos = document.getElementById("apellidos");
    let fNacimiento = document.getElementById("fNacimiento");
    let edad = document.getElementById("edad");
    let estadoCivil = document.querySelector("#estadoCivil option:checked");
    let telefono = document.getElementById("telefono");

    //innerHTML
    let tabla = document.querySelector("#tabla-datoss tbody");
    filas=tabla.childNodes.length + 1;
    let html = "<tr id='" + filas+"'>";
    html +=          "<td>" + nombres.value + "</td>";
    html +=          "<td>" + apellidos.value + "</td>";
    html +=          "<td>" + fNacimiento.value + "</td>";
    html +=          "<td>" + edad.value + "</td>";
    html +=          "<td>" + estadoCivil.textContent + "</td>";
    html +=          "<td>" + telefono.value + "</td>";
    html +=          "<td>";
    html +=          "<button type='button' id='editar-" + filas + "'><i class='fa-solid fa-pen-to-square'></i>Editar</button>";
    html +=          "<button type='button' id='eliminar-" + filas + "'><i class='fa-solid fa-trash-can'></i>Eliminar</button>";
    html +=     "</tr>";
 
    tabla.innerHTML += html;

    document.getElementById("editar-"+filas).addEventListener("click", editar);
    document.getElementById("eliminar-"+filas).addEventListener("click", eliminar);
}

function editar(event){
    alert("hola")
}

function eliminar(event){
    alert("hola")
}