import React, { useEffect, useState } from 'react'
import { Info } from './Info';
import { Message } from './Message';

export const SimpleForm = () => {

  const [form, setForm] = useState({
    name: '',
    email: ''
  })

  const [hover, setHover] = useState(true);

  const { name, email } = form;

  useEffect(()=>{
    console.log('Holas')

  }, [])

  const handleInputChange = ({ target }) => {
    setForm({
      ...form,
      [ target.name ]: target.value
    })

  }

  const handleHover = () => {
    setHover( true )
  }

  const handleUnHover = () => {
    setHover( false )
  }

  return (
    <>
      <h1>UseEffect</h1>
      <hr/>


      <div onPointerEnter={ handleHover } onPointerOut={ handleUnHover } className="form-group p-5">
      { hover && <Info/> }
        <input 
          type='text'
          name='name'
          className='form-control'
          placeholder='name ...'
          autoComplete='off'
          value={ name }
          onChange={ handleInputChange }
        />
        <input 
          type='email'
          name='email'
          className='form-control'
          placeholder='email ...'
          autoComplete='off'
          value={ email }
          onChange={ handleInputChange }
        />
      </div>

      { ( name === '123' ) && <Message />}
    </>
  )
}
