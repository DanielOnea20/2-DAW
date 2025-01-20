import React, { useState, useEffect } from "react";

function Contador(){
    const [contador, setContador] = useState(0);
    useEffect(() => {

        const intervalSeconds = setInterval(() => {
          setContador((prevContador) => prevContador + 1);
        }, 1000);
    
        return () => clearInterval(intervalSeconds);
    });

    return(
        <p>Contador: {contador}</p>
    )
}

export default Contador;