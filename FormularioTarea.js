import React,{ useState } from "react";

function FormularioTarea({agregarTarea}){
    const [textoTarea,setTarea] = useState('');

    function aniadirTarea(event){
        event.preventDefault();
        agregarTarea(textoTarea);
    }

    return(
        <form onSubmit={aniadirTarea}>
            <label htmlFor="tarea">Introduce la tarea: </label>
            <input type="text" id="tarea" value={textoTarea} onChange={(event) => setTarea(event.target.value)}/>

            <button type="submit" value={"Enviar tarea"}>Enviar Tarea</button>
        </form>
    )
}
export default FormularioTarea;