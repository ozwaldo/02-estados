import React, { useEffect, useState } from 'react'

export const Aviso = () => {

    const [lista, setLista] = useState([]);
    const [valor, setValor] = useState("");

    useEffect(() => {
        alert("El componente aviso se ha cargado");
        return (() => {
                alert("El componente aviso se ha descargado");
        });
    }, [])

  return (
    <div className='componente'>
        <h1>Aviso</h1>
        <button onClick={()=>alert("Aviso")}>Aviso</button>
        <ul>
            
        </ul>
    </div>
  )
}
