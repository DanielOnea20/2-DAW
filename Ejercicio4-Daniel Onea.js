function calcularOperacion(numero, numero2) {
    let numeroMasGrande = Math.max(numero, numero2);
    let mcm = numeroMasGrande;
    
    while (true) {
        if (mcm % numero == 0 && mcm % numero2 == 0) {
            return mcm;
        }
        mcm += numeroMasGrande; 
    }
    }

function calcularMCM(...numeros) {
let resultado = numeros[0]; 

for (let i = 1; i < numeros.length; i++) {
    resultado = calcularOperacion(resultado, numeros[i]); 
}

return resultado;
}
console.log(calcularMCM(5,6,7));

