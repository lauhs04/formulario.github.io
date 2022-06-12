/*let opcion1 = "piedra";
let opcion2 = "papel";
let opcion3 = "tijera";

let resultadoJuego = function (userOpcion, cpuOpcion){
    if (userOpcion != cpuOpcion){
        if (userOpcion === opcion1 && cpuOpcion === opcion2){
            console.log(`Gana CPU con ${opcion2}`);
        } 
        else if (userOpcion === opcion1 && cpuOpcion === opcion3){
            console.log(`Gana Usuario con ${opcion1}`);
        }

        else if (userOpcion === opcion2 && cpuOpcion === opcion1){
            console.log(`Gana CPU con ${opcion3}`);
        }

        else {
            console.log(`Gana Usuario con ${opcion3}`);
        }
    } else {
        console.log("Elecciones de Usuario y CPU son iguales");
    }
}

resultadoJuego(opcion1,opcion1);*/
var numero = 10;
switch (numero) {
    case 1:
        console.log("Soy uno");
        break;
    case 10:
        console.log("soy un 10");
        break;
    default:
        console.log("no soy nada");
}