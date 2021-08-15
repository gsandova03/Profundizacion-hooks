import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

import './layout.css';
export const Layout = () => {

  const { counter, increment, decrement, reset } = useCounter(1);

  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { quote } = !loading && data[0];

  const parrafo = useRef();

  useLayoutEffect(() => {
    console.log( parrafo.current.getBoundingClientRect() )
  }, [quote])

  return (
    <div>
      <h1> Layout Effect</h1>
      <hr/>
        <blockquote className="m-5 blockquote text-right">
          <p ref={ parrafo }><i>{ quote }</i></p>
        </blockquote>
        {
          counter <= 1
          ?(
            <button disabled className="btn btn-primary m-1">Ant quote</button>      
          )

          :(
            <button onClick={ decrement } className="btn btn-primary m-1">Ant quote</button>
          )
        }
      <button onClick={ reset } className="btn btn-primary m-1">Reset</button>
      <button onClick={ increment } className="btn btn-primary m-1">Sig quote</button>
    </div>
  )
}
