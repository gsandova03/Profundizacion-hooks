import React, { useState } from 'react'

const CounterApp = () => {
  
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20
  });

  const { counter1, counter2 } = counter;

  const aumentar = () => {
    setCounter({
      ...counter,
      counter1 : counter1 + 1,
      counter2
    })
  }

  return (
    <div>
      <h1>Counter : { counter1 }</h1>
      <h1>Counter : { counter2 }</h1>
      <hr/>

      <button className="btn btn-primary" onClick={ aumentar }> Counter 1 </button>
      {/* <button className="btn btn-primary" onClick={ ()=> setCounter( counter + 1 ) }> Counter 2 </button> */}
    </div>
  )
}

export default CounterApp
