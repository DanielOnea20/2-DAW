function formularioCorrecto() {
    const dni = document.getElementById("dni").value;
    const email = document.getElementById("email").value;
    const dniPattern = /^\d{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

    if(!dni){
        alert("Completa el campo DNI");
        return false;
    }

    if(!dniPattern.test(dni)){
        alert("Teclea un DNI");
        return false;
    }
    
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    const numeroDni = dni.slice(0, 8);
    const resto = numeroDni % 23;
    const letra = letras[resto];

    if(dni[8] !== letra) {
        alert("La letra del NIF es incorrecta.");
        return false;
    } else {
        alert("DNI correcto");
    }
    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailPattern.test(email)) {
        alert("El correo electrónico es válido");
        return true;
    } else {
        alert("El correo electrónico no es válido");
        return false;
    }
}