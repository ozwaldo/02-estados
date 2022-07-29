import React, { useState } from 'react'

export const EstadoReact = () => {

    const [variable,setVariable] = useState("Cadena");
    //const [listitem,setListItem] = useState("0");

    const click = () => {
        setVariable("Variable");
    }

    const tecla = e => {
        var  texto = e.target.value;
        setVariable(texto);
    }

    const crearListItem = e => {
        
    }
  return (
    <div className="componente">
        <h1>Hook States</h1>
        <p>La variable es <strong>{variable}</strong></p>
        <button onClick={click}>Cambiar contenido variable</button>
        <p>
            <input type="text" onChange={tecla} placeholder = "Escribe algo"></input>
        </p>
        <p>
            <button onClick={crearListItem}>Crear elemento de lista</button>
        </p>

                

    </div>
  )
}


