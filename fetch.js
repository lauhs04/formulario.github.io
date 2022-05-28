/* Carga todo un evento en la  ventana window */
window.onload = function () {
    iniciarEvent();
}

/*Busca a todos los elementos a los que se les debe aplicar un evento e inicia ese evento*/ 

function iniciarEvent () {
    let obtenerDatos =document.getElementsByClassName("btnCarga");

    for(let i=0; i < obtenerDatos.length; i++){
        obtenerDatos[i].addEventListener("click", cargarHTML)
    }

    function cargarHTML(event) {
        //del evento generado se csptura el evento que lo disparó

        let elemento = event.target;
        //se obtiene el atributo value del elemento
        let pagina = elemento.value;
        let js = elemento.getAttribute("data-js");
// con FETCH cargamos dinámicamente la página solicitada
        fetch(pagina)

        .then(function(repuesta){
            return repuesta.text();
        })//esto devuelve otra promesa

            .then(function(html){
            //buscamos el elemento html donde se va a cargar la pagina
                document.getElementById("mains").innerHTML = html;
                if (js !== "NO"){
                    getScript("calculadora/" + js)
                        .then(function(){
                         iniciarEvent();
                        })
                        .catch(function(error){
                        console.log(error);
                })
            }
        })

        .catch(function(error){
            console.log(error)
        })
    }
}

function getScript(url){
    return new Promise(function(resolve, reject){
        const script= document.createElement("script");
        script.src = url;
        script.async= true;

        script.onerror = reject;
        script.onload = resolve;

        document.head.appendChild(script);
    })
}