import { mount, shallow } from 'enzyme'
import React from 'react'
import { HomePage } from '../../../components/09-useContext/HomePage'
import { UserContext } from '../../../components/09-useContext/UserContext'

describe('Pruebas en el componente <HomePage/>', () => {

  const user = {
    name:"gabriel",
    email:"gabriel@email.com"
  }
  //asignar el contex a nuestro componente

  //el mount es muy util cuando se quiere renderizar el componente completo y no solo el high order component
  const wrapper = mount(
    <UserContext.Provider value={{
      user
    }}>
      <HomePage/>
    </UserContext.Provider>
  )

  test('debe de mostrarse correctamente', () => {
    
    expect( wrapper ).toMatchSnapshot();

  })
  
})