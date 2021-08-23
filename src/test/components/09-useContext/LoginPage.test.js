import React from 'react'
import { mount } from 'enzyme'
import { UserContext } from '../../../components/09-useContext/UserContext'
import { LoginPage } from '../../../components/09-useContext/LoginPage'

describe('Pruebas en el componente <LoginPage />', () => {
  
  const setUser = jest.fn()

  const wrapper = mount(
    <UserContext.Provider value={{
      setUser
    }}>
      <LoginPage/>
    </UserContext.Provider>
  )

  test('debe de mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot()
  })
  
  test('debe de ejecutar el setUser con el argumento esperado', () => {
    
    //simulamos el evento de onclick en el boton de nuestro componente
    wrapper.find('button').prop('onClick')()

    expect( setUser ).toHaveBeenCalledWith({
      id: 1242,
      name: "gabriel"
    })
  })
  
})
