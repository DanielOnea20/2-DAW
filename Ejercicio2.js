class Alumno{
    constructor(nombre,apellido1,apellido2,fechaNacimiento,estudios,curso,telefono){
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.fechaNacimiento = fechaNacimiento;
        this.estudios = estudios;
        this.curso = curso;
        this.telefono = telefono;
    }

    muestra(){
        console.log("Nombre: " + this.nombre + "\n" + "Apellido 1: " + this.apellido1 + "\n" + "Apellido2: " + this.apellido2 + "\n" + "Fecha nacimiento: " + this.fechaNacimiento + "\n" + "Estudios: " + this.estudios + "\n" + "Curso: " + this.curso + "\n" + "Telefono: " + this.telefono);
    }
}

const alumno = new Alumno("Daniel", "Onea", "Dragnoiu", '12/02/2000', "ESO", 2, 123456789);

function ventanaModal() {
    const modal = document.getElementById("windowModal");
    modal.style.display = "block";

    const closeModalBtn = document.querySelector(".closeWindowModal");
    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

let nombreCorrecto = false;
let apellido1Correcto = false;
let apellido2Correcto = false;
let fechaCorrecta = false;
let telefonoCorrecto = false;

function verificarNombre() {
    const nombre = document.getElementById("name").value;
    const nombrePattern = /^[a-zA-Z]+$/;
    if (!nombrePattern.test(nombre)) {
        ventanaModal();
        nombreCorrecto = false;
    } else {
        nombreCorrecto = true;
    }
    activarBoton();
}

function verificarApellido1() {
    const apellido1 = document.getElementById("apellido1").value;
    const apellido1Pattern = /^[a-zA-Z]+$/;
    if (!apellido1Pattern.test(apellido1)) {
        ventanaModal();
        apellido1Correcto = false;
    } else{
        apellido1Correcto = true;
    }
    activarBoton();
}

function verificarApellido2() {
    const apellido2 = document.getElementById("apellido2").value;
    const apellido2Pattern = /^[a-zA-Z]+$/;  
    if (!apellido2Pattern.test(apellido2)) {
        apellido2Correcto = false;
        ventanaModal();

    } else {
        apellido2Correcto = true;
    }
    activarBoton();
}

function verificarSiEsMayorDeEdad(fecha) {
    const fechaPattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;

    if (!fechaPattern.test(fecha)) {
        ventanaModal();
        return false;
    }

    const [dia, mes, anio] = fecha.split('/').map(Number);
    const fechaDeHoy = new Date();
    const anioActual = fechaDeHoy.getFullYear();
    const mesActual = fechaDeHoy.getMonth();
    const diaActual = fechaDeHoy.getDate();

    let edad = anioActual - anio;
    if (mes > mesActual || (mes === mesActual && dia > diaActual)) {
        edad--;
    }
    return edad >= 18;
}

function verificarFecha() {
    const fecha = document.getElementById("date").value;

    if (!verificarSiEsMayorDeEdad(fecha)) {
        ventanaModal();
        fechaCorrecta = false;
    } else {
        fechaCorrecta = true;
    }
    activarBoton();
}

function verificarTelefono() {
    const telefono = document.getElementById("telefono").value;
    const telefonoPattern = /^\d{9}$/;  
    if (!telefonoPattern.test(telefono)) {
        ventanaModal();
        telefonoCorrecto = false;
    } else {
        telefonoCorrecto = true;
    }
    activarBoton();
}

const seleccionarCurso = document.getElementById("curso");
const anioActual = new Date().getFullYear();
for (let anio = 2000; anio <= anioActual; anio++) {
    const option = document.createElement("option");
    option.value = anio;   
    option.text = anio;    
    seleccionarCurso.appendChild(option); 
}

function activarBoton() {
    const button = document.getElementById("buttonForm");
    if(nombreCorrecto == true && apellido1Correcto == true && apellido2Correcto == true && fechaCorrecta == true && telefonoCorrecto == true){
        button.disabled = false;
    }
}