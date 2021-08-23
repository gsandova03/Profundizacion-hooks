import React, { useContext } from 'react'
import { useForm } from '../../hooks/useForm'
import { UserContext } from './UserContext'

export const LoginPage = () => {

  const { setUser } = useContext( UserContext )
  return (
    <div>
      <h4>Login Page</h4>
      <hr/>
      <button 
        type="submit" 
        className="btn btn-primary"
        onClick={ ()=> setUser({
          id: 1242,
          name: "gabriel"
        })}
      > 
        Login 
      </button>
    </div>
  )
}
