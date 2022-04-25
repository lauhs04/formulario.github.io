var operandoUno = 0;
var operandoDos = 0;
var operacionAnterior = "";
var resultados = 0;


function iniciarEventos(){
    let obtenerNumero = document.getElementsByClassName("btnNumero");
    for(let i = 0; i < obtenerNumero.length; i++){
        obtenerNumero[i].addEventListener("click",generarNumero);
    }

    let obtenerOperando = document.getElementsByClassName("btnOperacion");
    for(i=0;i<obtenerOperando.length;i++){
        obtenerOperando[i].addEventListener("click",capturarOperacion);
      //  obtenerOperando[i].addEventListener("click", generarOperador);
    }
}

function generarNumero(event){
    let numero = event.target.textContent;
    document.getElementById("resultado").value += numero;
} 

/*function generarOperador(event){
    let operador = event.target.textContent;
    document.getElementById("resultado").value += operador;
}*/

function capturarOperacion(event){
    
    let operacion = event.target.textContent;
    operandoDos= document.getElementById("resultado").value;
    if(operacion === "="){
        
        switch(operacionAnterior){
            case "*":
                resultados = parseFloat(operandoUno) * parseFloat(operandoDos);
            break;
            case "/":
                resultados = parseFloat(operandoUno) / parseFloat(operandoDos);
            break;
            case "+":
                resultados = parseFloat(operandoUno) + parseFloat(operandoDos);
            break;
            case "-":
                resultados = parseFloat(operandoUno) - parseFloat(operandoDos);
            break;
        }
        document.getElementById("resultado").value = resultados;
    } else {
        operandoUno = document.getElementById("resultado").value;
        operacionAnterior = event.target.textContent;
        document.getElementById("resultado").value = "";
    }
}