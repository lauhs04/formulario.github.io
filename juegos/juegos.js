/*let numeroAleatorio = Math.floor(Math.random()*100)+1;

const intentos = document.querySelector('.intentos');
const ultimoIntento = document.querySelector('.ultimoIntento');
const lowOrHi = document.querySelector('.lowOrHi');

const campoEnviado = document.querySelector('.campoEnviado');
const campoAdivinar = document.querySelector('.campoAdivinar');

let contador = 1;
let resetButton;

function adivinar() {
    let intentoJugador = Number(campoAdivinar.value);
    if(contador===1){
        intentos.textContent = 'Intentos anteriores:'
    }
    intentos.textContent += intentoJugador + ' ';

     if (intentoJugador === numeroAleatorio) {
         ultimoIntento.textContent = "Felicidades!! ¡Lo lograste!";
         ultimoIntento.style.backgroundColor = 'green';
         lowOrHi.textContent= '';
         setGameOver();
     } else if (contador === 10){
         ultimoIntento.textContent = "se acabaron los intentos";
         setGameOver();
     } else {
         ultimoIntento.textContent = 'Incorrecto';
         ultimoIntento.style.backgroundColor = '#c42b4b';
         if(intentoJugador < numeroAleatorio){
             lowOrHi.textContent= `El número es muy bajo`;
         } else if(intentoJugador > numeroAleatorio) {
             lowOrHi.textContent = "El número es muy alto"
         }
     }

     contador++;
     campoAdivinar.value='';
     campoAdivinar.focus();
}

campoEnviado.addEventListener('click', adivinar);

function setGameOver() {
    campoAdivinar.disabled = true;
    campoEnviado.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Iniciar nuevo juego';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

function resetGame() {
    contador = 1;

    const resultados = 
    document.querySelectorAll('.resultados p');
    for (let i = 0; i < resultados.length ; i++)
    {
        resultados[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    campoAdivinar.disabled=false;
    campoEnviado.disabled=false;
    campoAdivinar.value='';
    campoAdivinar.focus();

    ultimoIntento.style.backgroundColor = 'white';
    numeroAleatorio = Math.floor(Math.random()*100)+1;
}*/

function cargarDatos(event){
    datosStorage = localStorage.getItem("datosPersonas");
    if(datosStorage){
        datosStorage = JSON.parse(datosStorage);
        datosStorage.forEach(datosPersona => {
            adicionarFilas(datosPersona)
        })
    }
}

let datosPersona = {
    "nombres": nombres.value,
    "apellidos":apellidos.value,
    "fechaNacimiento": fNacimiento.value,
    "edad":edad.value,
    "estadoCivil":estadoCivil.textContent,
    "telefono":telefono.value
};



let datosStorage = localStorage.getItem("datosPersonas")

if(!datosStorage){
    datosStorage = []
} else {
    datosStorage = JSON.parse(datosStorage);
}

datosStorage.push(datosPersona);
localStorage.setItem("datosPersonas", JSON.stringify(datosStorage));
