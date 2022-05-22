window.onload = function () {
    iniciarEventos();
}

function iniciarEventos () {
    let obtenerDatos =document.getElementsByClassName("btnCarga");

    for(i=0; i < obtenerDatos.length; i++){
        obtenerDatos[i].addEventListener("click", cargarHtml)
    }

    function cargarHtml(event) {
        let element = event.target;
        let pagina = element.value;
        let js = element.getAttribute("data-js");

        fetch(pagina)

        .then(function(repuesta){
            return repuesta.text();
        })

        .then(function(html){
            document.getElementById("mains").innerHTML = html;
            if (js != "NO"){
                getScript("./juegos/" + js)
                    .then(function(){
                        iniciarEventos();
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
    new Promise(function(resolve, reject){
        const script= document.createElement("script");
        script.src = url;
        script.async= true;

        script.onerror = reject;
        script.onload = resolve;

        document.head.appendChild(script);
    })
}