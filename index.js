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
}*/

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


