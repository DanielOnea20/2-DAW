let cadenaDeTexto = "madrid";

function cambiarPrimeraLetra(cadenaDeTexto){
    let cadenaDeTexto2 = "";
    for(let i = 0; i < cadenaDeTexto.length; i++){
        if(i == 0){
            cadenaDeTexto2 += (cadenaDeTexto[i].toUpperCase());
        }else{
            cadenaDeTexto2 += (cadenaDeTexto[i]);
        }
    }
    return cadenaDeTexto2;
}
console.log(cambiarPrimeraLetra(cadenaDeTexto));

