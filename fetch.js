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

        fetch(pagina)

        .then(function(repuesta){
            return repuesta.text();
        })

        .then(function(html){
            document.getElementById("mains").innerHTML = html;
        })

        .catch(function(error){
            console.log(error)
        })
    }
}