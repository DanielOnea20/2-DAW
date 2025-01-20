import React from 'react';

function boton({texto,color,onClick}){
    return(
    <button style={{backgroundColor: color}} onClick={onClick}>
        {texto}
    </button>
    
    );
}

export default boton;