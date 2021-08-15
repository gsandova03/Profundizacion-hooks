import React, { useMemo, useState } from 'react'
import { porcesoPesado } from '../../helpers/ProcesoPesado';
import { useCounter } from '../../hooks/useCounter'

export const MemoHook = () => {
  
  const { counter, increment } = useCounter( 1000 );
  const [show, setShow] = useState(true);
  const memoProcesoPesado = useMemo(() => porcesoPesado( counter ), [ counter ])
  
  return (
    <div>
      <h1>Momorize Hook</h1>
      <h1>Counter : { counter }</h1>
      <hr/>

      <p>{ memoProcesoPesado }</p>

      <button onClick={ increment } className="btn btn-primary">
        incrementar
      </button>

      <button className="btn btn-outline-primary m-3" onClick={ () => setShow( !show ) }>
        Show/Hide { JSON.stringify( show ) }
      </button>
    </div>
  )
}
