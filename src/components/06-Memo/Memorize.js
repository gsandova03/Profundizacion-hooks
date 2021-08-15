import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {
  
  const { counter, increment } = useCounter( 10 );
  const [show, setShow] = useState(true);
  
  return (
    <div>
      <h1>Momorize</h1>
      <h1>Counter : <Small value={ counter }/></h1>
      <hr/>

      <button onClick={ increment } className="btn btn-primary">
        incrementar
      </button>

      <button className="btn btn-outline-primary m-3" onClick={ () => setShow( !show ) }>
        Show/Hide { JSON.stringify( show ) }
      </button>
    </div>
  )
}
