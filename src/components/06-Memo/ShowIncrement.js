import React, { memo } from 'react'

//Es necesario el uso del memo, para memorizar el componente si no cambian las dependencias
export const ShowIncrement = memo(({ increment }) => {

  console.log("Me volvi a generar :(")
  return (
    <button className="btn btn-primary" onClick={ () => increment( 5 ) }>
      incrementar
    </button>
  )
})
