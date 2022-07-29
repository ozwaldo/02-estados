import React, { useEffect, useState } from 'react'
import { Aviso } from './Aviso';

export const Efectos = () => {
    const [count,setCount] = useState(0);

    useEffect(() => {
        document.title = count + ' Clicks';
    }, [count]);

  return (
    <div className="componente">
        <p>{count} Clicks</p>
        <button onClick={() => setCount(count+1)}>
            Click me
        </button>
        <div className='aviso'>
          {count === 5 && <Aviso></Aviso>} 
        </div>
    </div>
  )
}
