const enlaces = document.querySelectorAll('a');
const numeroDeEnlaces = enlaces.length;
console.log("Los enlaces que tiene la pagina son: " + numeroDeEnlaces);

const enlaceFinal = enlaces[enlaces.length -1].href;
console.log("El ultimo enlace es " + enlaceFinal);

const parrafoUno = document.getElementById('primerParrafo');
const numeroDeEnlacesPrimerParrafo = parrafoUno.querySelectorAll('a');
const todosLosEnlacesPrimerParrafo = numeroDeEnlacesPrimerParrafo.length;
console.log("Los enlaces que tiene el primer parrafo son: " + todosLosEnlacesPrimerParrafo);