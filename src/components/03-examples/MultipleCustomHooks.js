import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

  const { counter, increment, decrement, reset } = useCounter(1);

  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !loading && data[0];

  return (
    <div>
      <h1>Customs Hooks</h1>
      <hr/>
        { loading 
          ? 
            (
              <div className=' alert alert-info text-center'>
                Loading ...
              </div> 
            )
          :
            (
              <blockquote className="m-5 blockquote text-right">
                <p><i className="quote">{ quote }</i></p>
                <p><i className="author">{ author }</i></p>
              </blockquote>
            )
        }
        {/* {
          counter <= 1
          ?(
            <button disabled className="btn btn-primary m-1">Ant quote</button>      
          )

          :(
            <button onClick={ decrement } className="btn btn-primary m-1">Ant quote</button>
          )
        } */}
      {/* <button onClick={ reset } className="btn btn-primary m-1">Reset</button> */}
      <button onClick={ increment } className="btn btn-primary m-1">Sig quote</button>
    </div>
  )
}
