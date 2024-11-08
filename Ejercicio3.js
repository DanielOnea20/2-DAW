let posicionInicial = null;
let posicionFinal = null;
const foto = document.getElementById('foto-vallejo');

document.addEventListener('click', function(event) {
    event.preventDefault();

    const x = event.clientX;
    const y = event.clientY;

    if (posicionInicial === null) {
        posicionInicial = { x, y };
        console.log("Primera posición:", posicionInicial);
    } else if (posicionFinal === null) {
        posicionFinal = { x, y };
        console.log("Segunda posición:", posicionFinal);
    } else {
        posicionInicial = { x, y };
        posicionFinal = null;
    }
    
    foto.addEventListener('click', function() {
        if (posicionInicial && posicionFinal) {
            movimiento(foto, posicionInicial, posicionFinal, 1000);
        }
    });
    
    function movimiento(element, inicio, fin, duration) {
        const distanciaX = fin.x - inicio.x;
        const distanciaY = fin.y - inicio.y;
        const inicioTiempo = performance.now();
    
        function mover(timestamp) {
            const tiempoTranscurrido = timestamp - inicioTiempo;
            const progreso = Math.min(tiempoTranscurrido / duration, 1);
    
            const posicionX = inicio.x + distanciaX * progreso;
            const posicionY = inicio.y + distanciaY * progreso;
    
            element.style.left = `${posicionX}px`;
            element.style.top = `${posicionY}px`;
    
            if (progreso < 1) {
                requestAnimationFrame(mover);
            }
        }
    
        requestAnimationFrame(mover);
    } 
});