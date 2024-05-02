import React from "react";

function Futbol(){
    const anotacion=(valor,evento)=>{
        alert(valor+evento.type);
    };
    return(
        <button onClick={(evento)=>anotacion("Gool!!",evento)}>Dispara</button>
    )
}

export default Futbol;