import React, { useState } from 'react'

export const CompFormularios = () => {

    const [usuarios, setUsuarios] = useState([]);


    const obtenerDatos = e => {
        e.preventDefault();
        const datos = e.target;
        var usuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            bio: datos.bio.value
        };

        setUsuarios(usuario);

        fetch('/api/form-submit-url', {
            method: 'POST',
            body: datos,
          });
    }


  return (
    <div>
        <h1>Formularios</h1>
        <div className='info'>
            <span>{usuarios.nombre} {usuarios.apellido} {usuarios.genero} {usuarios.bio}</span>
        </div>

        <form onSubmit={obtenerDatos}>
            <input name='nombre' type="text" placeholder='Nombre'></input>
            <input name='apellido' type="text" placeholder='Apellidos'></input>
            
                <select name='genero'>
                    <option value="m">M</option>
                    <option value="h">H</option>
                </select>
            
            <textarea name='bio' placeholder='Bio'/>
            <input type="submit" value='enviar'></input>
        </form>
    </div>
  )
}
