let getById = (id) => {return document.getElementById(id)};

function btnGuardarDatos(){
    
    let nombre = getById("nombres").value;
    let apellido = document.getElementById("apellidos").value;
    let fNacimiento = document.getElementsByName("fNacimiento")[0].value;//por qué no me añade la fn al array
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    //let estadoCivil = document.querySelector("input[name='estadoCivil']:checked").value;
    //let hobbies = document.querySelectorAll("input[type='checkbox']:checked");
    //let ciudad = document.querySelector("#ciudades option:checked").value;




    

    //validaciones de inputs
    let expresiones = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    if(nombre.length <= 3) {
        let mensajeError = document.createElement("span");
        mensajeError.id = "mensaje-error-nombres";
        mensajeError.textContent = "Por favor digite un nombre más largo";
        mensajeError.style.border="2px white solid";
        mensajeError.style.backgroundColor="white";
        mensajeError.classList.add("container-nombres", "otraClase");
        document.getElementById("container-nombres").appendChild(mensajeError);
        return false;
    } 
    if(expresiones.test(nombre)){
        console.log("nombre bien")
    } else {
        alert("caracteres no permitidos")
    }

    if(apellido.length <= 3) {
        let mensajeError = document.createElement("span");
        mensajeError.id = "mensaje-error-apellidos";
        mensajeError.textContent = "Por favor digite un apellido más largo";
        mensajeError.style.border="2px black solid";
        mensajeError.style.backgroundColor="white";
        document.getElementById("container-apellidos").appendChild(mensajeError);
        return false;
    } 
    if(expresiones.test(apellido)){
        console.log("apellido bien")
    } else {
        alert("caracteres no permitidos")
    }

    getById("apellidos").disabled = false;

    // capturando datos
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



