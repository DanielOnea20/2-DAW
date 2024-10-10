let num1 = 1;
let num2 = 1;
let num3 = 1;

let primerosNumeros = [num1,num2,num3];

function sucesionPadovan(primerosNumeros){
for(i = 3; i < 100; i++){
    primerosNumeros[i] = primerosNumeros[i - 2] + primerosNumeros[i - 1]; 
}
return primerosNumeros;
}
sucesionPadovan(primerosNumeros);
console.log(primerosNumeros);