let arrayJugadores = [];
let nombreCorrecto = false;
let apellidosCorrecto = false;
let apodoCorrecto = false;
let mejorHabilidadCorrecto = false;
let peorHabilidadCorrecto = false;

class Jugador{
    constructor(nombre,apellidos,apodo,posicion,mejorHabilidad,peorHabilidad,mediaJugador){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.apodo = apodo;
        this.posicion = posicion;
        this.mejorHabilidad = mejorHabilidad;
        this.peorHabilidad = peorHabilidad;
        this.mediaJugador = mediaJugador;

        switch(posicion){
            case 'Portero':
                this.defensa = Math.floor(Math.random() * (99 - 70 + 1) + 70);
                this.pase = Math.floor(Math.random() * (70 - 40 + 1) + 40);
                this.regate = Math.floor(Math.random() * (40 - 20 + 1) + 20);
                this.tiro = Math.floor(Math.random() * (50 - 20 + 1) + 20);
                break;
            case 'Defensa':
                this.defensa = Math.floor(Math.random() * (99 - 80 + 1) + 80);
                this.pase = Math.floor(Math.random() * (80 - 60 + 1) + 60);
                this.regate = Math.floor(Math.random() * (50 - 30 + 1) + 30);
                this.tiro = Math.floor(Math.random() * (60 - 20 + 1) + 20);
                break;
            case 'Centrocampista':
                this.defensa = Math.floor(Math.random() * (90 - 70 + 1) + 70);
                this.pase = Math.floor(Math.random() * (99 - 80 + 1) + 80);
                this.regate = Math.floor(Math.random() * (99 - 70 + 1) + 70);
                this.tiro = Math.floor(Math.random() * (90 - 60 + 1) + 60);
                break;
            case 'Delantero':
                this.defensa = Math.floor(Math.random() * (60 - 20 + 1) + 20);
                this.pase = Math.floor(Math.random() * (80 - 70 + 1) + 70);
                this.regate = Math.floor(Math.random() * (90 - 70 + 1) + 70);
                this.tiro = Math.floor(Math.random() * (99 - 90 + 1) + 90);
                break;
            default:
                break;
        }
    }
}

class GestorJugadores{
    constructor(arrayJugadores){
        this.arrayJugadores = arrayJugadores;
    }

    crearJugador(jugador){
        if(nombreCorrecto == true && apellidosCorrecto == true && apodoCorrecto == true && mejorHabilidadCorrecto == true && peorHabilidadCorrecto == true){
            this.arrayJugadores.push(jugador);
        }

    }

    eliminarJugador(posicion){
        this.arrayJugadores.splice(posicion,1);
    }
}

let nuevoGestorJugadores = new GestorJugadores([]);

function validarNombre(){
    const nombre = document.getElementById('nombre').value;
    const nombrePattern = /^[a-zA-Z]+$/;
    const errorNombre = document.getElementById('errorNombre');

    if(!nombrePattern.test(nombre)){
        errorNombre.innerHTML = "El nombre que se ha introducido es incorrecto";
        nombreCorrecto = false;
    } else{
        nombreCorrecto = true;
    }
    habilitarBoton();
}

function validarApellidos(){
    const apellidos = document.getElementById('apellidos').value;
    const apellidosPattern = /^[a-zA-Z]+$/;
    const errorApellidos = document.getElementById('errorApellidos');

    if(!apellidosPattern.test(apellidos)){
        errorApellidos.innerHTML = "Los apellidos que se han introducido son incorrectos";
        apellidosCorrecto = false;
    } else{
        apellidosCorrecto = true;
    }
    habilitarBoton();
}

function validarApodo(){
    const apodo = document.getElementById('apodo').value;
    const apodoPattern = /^[a-zA-Z]+$/;
    const errorApodo = document.getElementById('errorApodo');

    if(!apodoPattern.test(apodo)){
        errorApodo.innerHTML = "El apodo que se ha introducido es incorrecto";
        apodoCorrecto = false;
    } else{
        apodoCorrecto= true;
    }
    habilitarBoton();
}

function validarMejorHabilidad(){
    const mejorHabilidad = document.getElementById('mejorHabilidad').value;
    const mejorHabilidadPattern = /^[a-zA-Z]+$/;
    const errorMejorHabilidad = document.getElementById('errorMejorHabilidad');

    if(!mejorHabilidadPattern.test(mejorHabilidad)){
        errorMejorHabilidad.innerHTML = "La mejor habilidad que se ha introducido es incorrecta";
        mejorHabilidadCorrecto = false;
    } else{
        mejorHabilidadCorrecto = true;
    }
    habilitarBoton();
}

function validarPeorHabilidad(){
    const peorHabilidad = document.getElementById('peorHabilidad').value;
    const peorHabilidadPattern = /^[a-zA-Z]+$/;
    const errorPeorHabilidad = document.getElementById('errorPeorHabilidad');

    if(!peorHabilidadPattern.test(peorHabilidad)){
        errorPeorHabilidad.innerHTML = "La peor habilidad que se ha introducido es incorrecta";
        peorHabilidadCorrecto = false;
    } else{
        peorHabilidadCorrecto = true;
    }
    habilitarBoton();
}

function habilitarBoton(){
    const boton = document.getElementById('boton');

    if(nombreCorrecto == true && apellidosCorrecto == true && apodoCorrecto == true && mejorHabilidadCorrecto == true && peorHabilidadCorrecto == true){
        boton.disabled = false;
    }
}

function crearJugador(){
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const apodo = document.getElementById('apodo').value;
    const posicion = document.getElementById('posicion').value;
    const mejorHabilidad = document.getElementById('mejorHabilidad').value;
    const peorHabilidad = document.getElementById('peorHabilidad').value;
    const mensaje = document.getElementById('mensajeNuevoJugador');

    let nuevoJugador = new Jugador(nombre,apellidos,apodo,posicion,mejorHabilidad,peorHabilidad);
    mensaje.innerHTML = "El jugador " + nuevoJugador.nombre + " ha sido añadido";
    nuevoGestorJugadores.crearJugador(nuevoJugador);
    mostrarJugadores();
}

function eliminarJugador(posicion){
    nuevoGestorJugadores.eliminarJugador(posicion,1);
    mostrarJugadores();
}

function mostrarJugadores(){
    const listaJugadores = document.getElementById('listaJugadores');
    listaJugadores.innerHTML = '';
    
    nuevoGestorJugadores.arrayJugadores.forEach((nuevoJugador,posicion) => {
        let mediaJugador = Math.floor((nuevoJugador.defensa + nuevoJugador.pase + nuevoJugador.regate + nuevoJugador.tiro) / 4);

        const nuevaLista = document.createElement('div');
        nuevaLista.textContent = '';
        
        nuevaLista.innerHTML += "Nombre del jugador : " + nuevoJugador.nombre + ", Apellidos del jugador: " + nuevoJugador.apellidos + ", Apodo de " + nuevoJugador.nombre + " " + nuevoJugador.apellidos + " : " + nuevoJugador.apodo + ", Posicion de " + nuevoJugador.apodo + " : "  + nuevoJugador.posicion + "<br> Estadisticas de " + nuevoJugador.apodo + " : " + " Defensa: " + nuevoJugador.defensa + ", Pase: " + nuevoJugador.pase + ", Regate: " + nuevoJugador.regate + " y Tiro: " + nuevoJugador.tiro + ", Mejor Habilidad de " + nuevoJugador.apodo + " : " + nuevoJugador.mejorHabilidad + ", Peor Habilidad de " + nuevoJugador.apodo + " : " + nuevoJugador.peorHabilidad + " y media de " + nuevoJugador.apodo + " : " + mediaJugador;

        const botonEliminarJugador = document.createElement('button');
        botonEliminarJugador.textContent = 'Eliminar Jugador';
        botonEliminarJugador.onclick = function(){
            eliminarJugador(posicion);
        }

        nuevaLista.appendChild(botonEliminarJugador);
        listaJugadores.appendChild(nuevaLista);
    });
}