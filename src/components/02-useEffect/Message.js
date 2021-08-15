import React, { useEffect, useState } from 'react'

export const Message = () => {

  const [coords, setCoords] = useState({ x:0, y:0 })

  const { x, y } = coords;

  useEffect(() => {

    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords( coords )
    }

    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
      console.log("Componente desmontado")
    }
  }, [])

  return (
    <>
      <h1>Hola master</h1>
      <pre>
        x: {x}
        y: {y}
      </pre>
    </>
  )
}
