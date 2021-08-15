import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

export const FromWithCustomHook = () => {

  const { values, handleInputChange } = useForm({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = values;

  useEffect(() => {
    console.log('Email Cambio')
  }, [email])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( values )
  }

  return (
    <form onSubmit={ handleSubmit }>
      <h1> FromWithCustomHook </h1>
      <hr/>

      <div className="form-group">
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
          type='text'
          name='email'
          className='form-control'
          placeholder='email ...'
          autoComplete='off'
          value={ email }
          onChange={ handleInputChange }
        />
      </div>

      <div className="form-group">
        <input 
          type='password'
          name='password'
          className='form-control'
          placeholder='password ...'
          value={ password }
          onChange={ handleInputChange }
        />
      </div>

      <button type='submit' className='btn btn-primary'>Guardar</button>

    </form>
  )
}
