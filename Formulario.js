import React, {useState} from "react";

function Formulario(){
    const [nombre, setNombre] = useState('');
    const [mensaje, setMensaje] = useState('');

    function mostrarFormulario(e){
        e.preventDefault();
        window.alert(`Hola ${nombre}, este es tu mensaje: ${mensaje}`)
    }
    return(
        <form onSubmit={mostrarFormulario}>
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>

            <label for="mensaje">Mensaje</label>
            <textarea id="mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)}/>

            <input type="submit" value={"Enviar Formulario"}/>
        </form>
    )
}

export default Formulario;