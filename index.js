
function btnGuardarDatos(){
    let nombre = document.getElementById("nombres").value;
    let apellido = document.getElementById("apellidos").value;
    let fNacimiento = document.getElementsByName("fNacimiento")[0].value;//por qué no me añade la fn al array
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let expresiones = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    if(nombre.length < 5) {
        let mensajeError = document.createElement("span");
        mensajeError.id = "mensaje-error-nombres";
        mensajeError.textContent = "Por favor digite un nombre más largo";
        document.getElementById("container-nombres").appendChild(mensajeError);
        return false;
    } 
    if(expresiones.test(nombre)){
        alert ("esta bien")
    } else {
        alert("caracteres no permitidos")
    }
    
    
    let datosPersona = {
        "datosPersonales":{
            "nombres": nombre,
            "apellidos": apellido,
            "fechaNacimiento": fNacimiento
        },

        "datosContacto" :{
            "direccion": direccion,
            "telefono": telefono
        }
    }

    console.log(datosPersona);

   

    document.getElementById("nombres").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("fNacimiento").value = "";

}



