import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({tareas,eliminarTarea,completarTarea}) => {
    return(
        <ul style={{listStyleType: 'none'}}>
            {tareas.map((tarea) => (
                <li key={tarea.id}><Tarea tarea={tarea} eliminarTarea={eliminarTarea} completarTarea={completarTarea}/></li>
            ))}
        </ul>
    )
}
export default ListaTareas;