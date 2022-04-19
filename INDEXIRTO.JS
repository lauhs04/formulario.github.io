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

console.log(Math.round(promedio(SCRIPTS.filter(codigo => codigo.living).map(codigo => codigo.year))));*/

let caballoZapato = "🐴👟";
console.log(caballoZapato.codePointAt(0));