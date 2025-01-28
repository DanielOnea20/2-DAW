import React from "react";

const Tarea = ({tarea,eliminarTarea,completarTarea}) => {
    const tareaCompletada = () => {
        completarTarea(tarea.id);
    }

    const tareaEliminada = () => {
        eliminarTarea(tarea.id);
    }

    return(
        <div style={{ textDecoration: tarea.completada ? "line-through" : "none",}}>
            {tarea.texto}
            <button onClick={tareaCompletada}>Completar Tarea</button>
            <button  onClick={tareaEliminada}>Eliminar Tarea</button>
        </div>
    )
}
export default Tarea;