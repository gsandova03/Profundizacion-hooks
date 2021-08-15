import React, { memo } from 'react'

/*
  La funcion memo es utilizada para evitar la renderizacion innecesaria de un componente,
  con esta podemos memorizar una accion y solo volverla a ejecutar si las props de este cambian
*/
export const Small = memo(({ value }) => {

  console.log("Me volvi a llamar :( ")
  return (
    <small>
      { value }
    </small>
  )
})
