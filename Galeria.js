import React from "react";

function Galeria({fotos}){
    return(
        <div>
            {fotos.map((url, index) => (
                <img key={index} src={url} style={{border:"2px solid black", margin:"10px"}}/>

            ))}



        </div>
    )
}

export default Galeria;