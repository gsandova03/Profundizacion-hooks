import React from 'react'
import { useCounter } from '../../hooks/useCounter';

const CounterWithCustomHook = () => {

  const { state, increment, decrement, reset } = useCounter( 20 );

  return (
    <>
      <h1>Counter with hook: { state }</h1>
      <hr/>

      <button className="btn btn-primary" onClick={ () => increment(2) }> incrementar </button>
      <button className="btn btn-danger" onClick={ () => decrement(2) }> decrementar </button>
      <button className="btn btn-info" onClick={ reset }> reset </button>
    </>
  )
}

export default CounterWithCustomHook;
