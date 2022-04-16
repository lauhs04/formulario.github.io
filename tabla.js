function guardarDatosPersona(event){
    let nombres = document.getElementById("nombres");
    let apellidos = document.getElementById("apellidos");
    let fNacimiento = document.getElementById("fNacimiento");
    let edad = document.getElementById("edad");
    let estadoCivil = document.querySelector("#estadoCivil option:checked");
    let telefono = document.getElementById("telefono");
    let accion = document.getElementById("accion");

    if(accion.value === "guardar"){   
    //innerHTML
    let tabla = document.querySelector("#tabla-datoss tbody");
    filas=tabla.childNodes.length + 1;
    let html = "<tr id='datos-" + filas+"'>";
    html +=          "<td>" + nombres.value + "</td>";
    html +=          "<td>" + apellidos.value + "</td>";
    html +=          "<td>" + fNacimiento.value + "</td>";
    html +=          "<td>" + edad.value + "</td>";
    html +=          "<td>" + estadoCivil.textContent + "</td>";
    html +=          "<td>" + telefono.value + "</td>";
    html +=          "<td>";
    html +=          "<button type='button' id='editar-" + filas + "' class='editar'><i class='fa-solid fa-pen-to-square'></i>Editar</button>";
    html +=          "<button type='button' id='eliminar-" + filas + "' class='eliminar'><i class='fa-solid fa-trash-can'></i>Eliminar</button>";
    html +=     "</tr>";
 
    tabla.innerHTML += html;

   /* document.getElementById("editar-"+filas).addEventListener("click", editar);
    document.getElementById("eliminar-"+filas).addEventListener("click", borrar);*/

    let botonesEditar = tabla.getElementsByClassName("editar");
    for(let i = 0; i <botonesEditar.length; i++){
        botonesEditar[i].addEventListener("click",editar);
    }

    let botonesEliminar = tabla.getElementsByClassName("eliminar");
    for(let i = 0; i < botonesEliminar.length; i++){
        botonesEliminar[i].addEventListener("click",eliminar);
    }
} else {
    let id = document.getElementById("idDatos").value;
    let fila = document.getElementById(id);
    let datos = fila.getElementsByTagName("td");
    datos[0].textContent = nombres.value;
    datos[1].textContent = apellidos.value;
    datos[2].textContent = fNacimiento.value;
    datos[3].textContent = edad.value;
    datos[4].textContent = estadoCivil.textContent;
    datos[5].textContent = telefono.value;
    accion.value = "guardar";
}

document.getElementById("btnReset").click();
}

function editar(event){
    let fila = event.target.closest("tr");
    let id = fila.id;
    let valores = fila.getElementsByTagName("td");
    let nombres = valores[0].textContent.trim();
    let apellidos = valores[1].textContent.trim();
    let fechaN = valores[2].textContent.trim();
    let edad = valores[3].textContent.trim();
    let estadocivil = valores[4].textContent.trim();
    let telefono = valores[5].textContent.trim();

    document.getElementById("nombres").value = nombres;
    document.getElementById("apellidos").value = apellidos;
    document.getElementById("fNacimiento").value = fechaN;
    document.getElementById("estadoCivil").value = estadocivil === "soltero"? "soltero" : estadocivil === "casado" ? "casado" : "unionLibre";
    document.getElementById("edad").value = edad;
    document.getElementById("telefono").value = telefono;
    document.getElementById("accion").value = "editar";
    document.getElementById("idDatos").value = id;
 }

function eliminar(event){
    (this).closest("tr").remove();
}
