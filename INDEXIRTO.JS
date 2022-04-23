let total = 0, cuenta = 1;
while(cuenta<=10){
    total += cuenta;
    cuenta += 1;
}/*

1 + 0= 1
2 + 1= 3
3 + 3= 6
4 + 6= 10
5 + 10=15
6 + 15=21
7 + 21=28
8 + 28=36
9 + 36=45
10 +45=55;

console.log(total);

function repetir(n, accion) {
    for(let i = 0; i < n; i++){
        accion(i);
    }
}

repetir(3, console.log);

let etiquetas = [];
repetir(5, i => etiquetas.push(`Unidad ${i + 1}`));
console.log(etiquetas);

function mayorQue(n) {
    return m => m > n;
}

let mayorQue10 = mayorQue(10);
console.log(mayorQue10(11));

function ruidosa(funcion){
    return(...argumentos) => {
        console.log("llamando con", argumentos);
        let resultado = funcion(...argumentos);
        console.log("llamada con", argumentos, ", retorno", resultado)
        return resultado;
    }
}

ruidosa(Math.min)(3,2,1);

function aMenosQue(prueba, entonces){
    if (!prueba) entonces();
}

repetir(3, n => {
    aMenosQue(n % 2 === 1, () => {
        console.log(n, "es par");
    });
});

function promedio(array){
    return array.reduce((a,b) => a + b) / array.length;
}

console.log(Math.round(promedio(SCRIPTS.filter(codigo => codigo.living).map(codigo => codigo.year))));

let caballoZapato = "🐴👟";
console.log(caballoZapato.codePointAt(0));

let conejo = {};
conejo.hablar = function(linea) {
    console.log(`El conejo dice '${linea}'`)
};

conejo.hablar("I'm live.")

function hablar(linea) {
    console.log(`the bunny ${this.tipo} say ${linea}`);
}

let whiteBunny = {tipo: "white", hablar};
let hungryBunny = {tipo: "hungry", hablar};

whiteBunny.hablar("Oh my ears and whiskers, " + "how late is it getting!")
hungryBunny.hablar("I am very hungry")

function normalizar() {
    console.log(this.coordenadas.map(n => n / this.length));
}
normalizar.call({coordenadas: [0,2,3], length: 5});

let vacio = {};
console.log(vacio.toString);console.log(vacio.toString());

const studentA = {
    name: "Laura hoyos",
    age: 25
}

const studentB = {
    name: "jose jose",
    age:20
}

if (studentA == studentB){
    console.log(true);
} else{

    console.log(false);
}

function caisse(cash){
    var two =0,five=0,ten =0;
    if(cash==1||cash==3){
    return null;
    }else {
    if(cash>9) {ten=(cash-cash%10)/10;
    cash=cash%10;};
    switch (cash){
    case 1 :ten-=1;five=1;two=3;
    break;
    case 2 : two=1;
    break;
    case 3 : ten-=1;five=1;two=4;
    break;
    case 4 :two=2;
    break;
    case 5: five=1;
    break;
    case 6: two=3;
    break;
    case 7: five=1;two=3;
    break;
    case 8: two=4;
    break;
    case 9: five=1; two=2;
     };
    return{
     two:two,
     five:five,
    ten:ten,
    };
      }
    }
    console.log(caisse(111))*/

    class Conejo {
        constructor(tipo) {
          this.tipo = tipo;
        }
        hablar(linea) {
          console.log(`El conejo ${this.tipo} dice '${linea}'`);
        }
      }
      
      let conejoAsesino = new Conejo("asesino");
      let conejoNegro = new Conejo("negro");

      let objeto = new class { obtenerPalabra() { return "hola"; } };
console.log(objeto.obtenerPalabra());
// → hola