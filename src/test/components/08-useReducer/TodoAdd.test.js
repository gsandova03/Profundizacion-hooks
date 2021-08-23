import React from 'react'
import { shallow } from 'enzyme'
import TodoAdd from '../../../components/08-useReducer/components/TodoAdd'


describe('Pruebas en el componente <TodoAdd />', () => {
  
  const addTodo = jest.fn()
  const wrapper = shallow( <TodoAdd addTodo={ addTodo }/> )

  test('debe de mostrarse correctamente ', () => {


    expect( wrapper ).toMatchSnapshot();
  })

  test('No debe de llamar addTodo', () => {
    
    const formSubmit = wrapper.find('form').prop('onSubmit')
    
    formSubmit({ preventDefault(){} })
    expect( addTodo ).toHaveBeenCalledTimes(0)

  })
  
  test('debe de llamar la funcion addTodo', () => {
    
    const value = 'aprender React'
    //Simulamos el cambio de la informacion del input
    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description'
      }
    })

    //crear la referencia a nuesto formulario y la prop onSubmit
    const formSubmit = wrapper.find('form').prop('onSubmit')
    
    //Ejecutamos el submit para el 
    formSubmit({ preventDefault(){} })
    //evaluar el llamado de la funcion
    expect( addTodo ).toHaveBeenCalledTimes(1)
    expect( addTodo ).toHaveBeenCalledWith( expect.any(Object) )
    expect( addTodo ).toHaveBeenCalledWith({
      //Para este caso el id no es tenido en cuenta, lo unico importante es que sea de tipo number
      id: expect.any(Number),
      todo: value,
      done: false
    })

    //Al ejecutar el submit del formulario evualuamos que la funcion reset establesca nuestro valor por defecto, en este caso un '' string vacio
    expect( wrapper.find('input').prop('value') ).toBe('')

  })
  
})
