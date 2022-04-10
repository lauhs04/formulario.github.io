/*Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:

#
##
###
####
#####
######
#######

let numero = 7;
for(let i = 0; i<numero; i++){
    let piso = '';
    for(let j = 0; j < i +1; j++){
        piso = piso + '#';
    }
    console.log(piso);
}

for(let i = 1; i <=7; i = i + 1){
    console.log(i)
}



let numeros = 1;
while(numeros <= 7){
    console.log(numeros);
    numeros = numeros + 1;
}*/
/*let strini= 7;
for(let j = 0; j <= 7; j += "#"){
    console.log(j)

} 

for(let number = 1; number <= 100; number++){
    if(number%3 === 0 && number%5 === 0){
        console.log("FizzBuzz")
    } else if (number%5 === 0){
        console.log("Fizz")
    } else if (number%3 === 0){
        console.log("Fizz");
    } else {
        console.log(number);
    }
}

let numero =8;


for(let i=1;i<=numero;i++){
    let output = "";
    for(let j=1;j<=numero;j++){
        ((i+j)%2===0 ? output +=" " : output += "#")
    }
    output += "\n";
    console.log(output)
}

let number = 5;
for(let i=1;i<=number;i++){
    let output = "";
    for(let j=1;j<=i;j++){
        output = output + "#";
    }
    
    console.log(output)
}

function cuadrado (x){
    return x * x;
}

const hacerRuido = function (){
    console.log("PLing")
} 

function potencia(base, exponente){
    let resultado = 1;
    for(let cuenta = 0; cuenta<exponente;cuenta++){
        resultado *= base;
    }
    return resultado;
}
console.log(potencia(2,5));

hacerRuido();
console.log(cuadrado(2));

let x = 10;
if(true){
    let y = 20;
    var z = 30;
    console.log(x + y + z)
}

console.log(x + z)

const dividirEnDos = function(numero) {
    return numero / 2;
}

let numero = 10;
console.log(dividirEnDos(200))
console.log(numero);
 
const cupcakes = function(factor){
    const ingrediente = function(cantidad, unidad,nombre){
        let cantidadIngrediente = cantidad * factor;
        if(cantidadIngrediente > 1){
            unidad += "s";
        }
        console.log(`${cantidadIngrediente} ${unidad} ${nombre}`)
    };
    ingrediente(1, "taza", "aceite");
}

const humus = function(factor) {
    const ingrediente = function(cantidad, unidad, nombre) {
      let cantidadIngrediente = cantidad * factor;
      if (cantidadIngrediente > 1) {
        unidad += "s";
      }
      console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);
    };
    ingrediente(1, "lata", "garbanzos");
    ingrediente(0.25, "taza", "tahini");
    ingrediente(0.25, "taza", "jugo de limón");
    ingrediente(1, "clavo", "ajo");
    ingrediente(2, "cucharada", "aceite de oliva");
    ingrediente(0.5, "cucharadita", "comino");
    
  };
humus(2);


  const potencias = (base, exponente) => {
      let result = 1;
      for(let i = 0; i < exponente;i++){
          result = result * base;
      }
      return result;
  }

  console.log(potencias(2,5))

  const cuadraditos = (x) => {return x * x;};
  const cuadraditos2 = x => x*x;

  console.log(cuadraditos(2),cuadraditos2(3))

  function saludar(quien){
      console.log("Hola " + quien)
  }

  saludar("Harry");
  console.log("Goodbye")

  function hallarSecuencia(objetivo){
      function encontrar(actual, historia) {
          if(actual==objetivo){
              return historia;
          } else if (actual > objetivo) {
              return null;
          } else {
              return encontrar(actual + 5, `(${historia} + 5)`) || encontrar(actual + 5, `(${historia} * 3)`);
          }
      }
      return encontrar(1, "1");
  }

  console.log(hallarSecuencia(1));

  function alcocharConCeros(numero, amplitud){
      let string = String(numero);
      while(string.length < amplitud){
          string = "0" + string;
      }
      return string;
  }

  function imprimirInventarioGranja(vacas, pollos, cerdos){
      console.log(`${alcocharConCeros(vacas, 3)} vacas`)
      console.log(`${alcocharConCeros(pollos, 3)} pollos`)
      console.log(`${alcocharConCeros(cerdos, 3)} cerdos`)
  }

  imprimirInventarioGranja(3,25,56);

  function numeroMenor(numero1, numero2){
      let num1 = numero1;
      let num2 = numero2;
      if(num1 < num2){
         return console.log(`${num1} es el número menor`) 
      } else if (num2 < num1){
        return console.log(`${num2} es el número menor`) 
      } else {
        return console.log("Los números no pueden ser iguales")
      }
  }

  numeroMenor(3,3);

  function esPar(number){
      let number1 = parseInt(number);
      if(number1 % 2 === 0){
          return console.log(`el número ${number1} es par`)
      } else if (number1 % 2 !== 0){
          let numbert = number1 * -1;//buscar esta solución 
          if(numbert % 2 === 0){
              return console.log(`el numero ${numbert} es par`)
          } else {
              return console.log(`el numero ${numbert} es impar`)
          }
      } else {
          return false;
      }
  }

  esPar(-555);
  function contarFs(stringg, ch){
      let contador = 0;
      for(let i = 0; i < stringg.length; i++)
          if(stringg.charAt(i)==ch)
              contador += + 1;
        return contador;
      }


    function contarCaracteres(stringg){
        return contarFs(stringg, "A")
    }
  console.log(contarFs("LAURA", "A"))
  console.log(contarCaracteres("LAURA"))*/
function btnGuardarDatos(){
    let nombre = document.getElementById("nombres").value;
    let apellido = document.getElementById("apellidos").value;
    let fNacimiento = document.getElementsByName("fNacimiento")[0].value;//por qué no me añade la fn al array
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;

    if(nombre.length < 5) {
        alert("Nombre muy corto")
        return false;
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