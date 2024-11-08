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
alumno.muestra();