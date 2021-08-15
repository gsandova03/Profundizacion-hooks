import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

  const [counter, setCounter] = useState(10);

  // const increment = () => {
  //   setCounter( counter + 1 );
  // }

  //es necesario el hook useCallback para memorizar una funcion enviada como dependencia, para evitar los renders innecesarios de la funcion en nuestro componente padre y el componente hijo
  const increment = useCallback( ( num ) => {
    setCounter( (counter) => counter + num )
  }, [ setCounter ] )

  return (
    <div>
      <h1>useCallBack Hook</h1>
      <hr/>

      <h2>Counter : { counter }</h2>

      <ShowIncrement increment={ increment }/>

    </div>
  )
}
