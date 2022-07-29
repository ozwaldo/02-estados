import React, { useState } from 'react'

import PropTypes from 'prop-types'

export const Ejercicio = ({year}) => {

    const [year_new,setYear] = useState(year);

    const anterior = () => {
        if(isNaN(year_new)) {
            setYear("Año no valido");
        } else {
            setYear(parseInt(year_new)-1);
        }
    }

    const siguiente = () => {
        if(isNaN(year_new)) {
            setYear("Año no valido");
        } else {
            setYear(parseInt(year_new)+1);
        }
    }

    const cambiar = e => {
        
        var year = e.target.value.replace(/[^0-9]/g, '');

        if(isNaN(year) || year === "") {
            setYear("Año no valido");
        } else {
            setYear(parseInt(year));
        
        }

    }

  return (
    <div className="componente">
        <h1>Ejercicio 1</h1>
        <p>
            <button className='year' onClick={anterior}>Anterior</button>
            <span className='anio'>{year_new}</span>
            <button className='year' onClick={siguiente}>Siguiente</button>
        </p>
        <div>
            <input type="number" min="1" pattern="^[0-9]+" onKeyUp={cambiar} className="textYear" placeholder={year} ></input>
        </div>
    </div>
  )
}

Ejercicio.propTypes = {
    year:PropTypes.number.isRequired
}