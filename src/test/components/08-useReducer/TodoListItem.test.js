import React from 'react'
import { shallow } from "enzyme"
import { demoTodo } from '../../fixtures/demoTodo'
import TodoListItem from '../../../components/08-useReducer/components/TodoListItem'


describe('Pruebas en el componente <TodoListItem/>', () => {
  
  //jest.fn() permite hacer referenica a las funciones que pasamos como argumento a nuestro componente
  const handleComplete = jest.fn()
  const handleDelete = jest.fn()

  let wrapper = shallow( 
    <TodoListItem
      id={ 1 }
      todo={ demoTodo[0] }
      index={ 0 }
      handleComplete={ handleComplete }
      handleDelete={ handleDelete }
    /> 
  )

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow( 
      <TodoListItem
        id={ 1 }
        todo={ demoTodo[0] }
        index={ 0 }
        handleComplete={ handleComplete }
        handleDelete={ handleDelete }
      /> 
    )
  })

  test('debe de renderizarce correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  })

  test('debe de llamar la funcion handleDelete', () => {
    wrapper.find('button').simulate('click')
    expect( handleDelete ).toHaveBeenCalledWith( demoTodo[0].id )
    expect( handleDelete ).toHaveBeenCalledTimes(1)
    
  })

  test('debe de llamar la funcion handleToggle', () => {
    wrapper.find('p').simulate('click')
    expect( handleComplete ).toHaveBeenCalledWith( demoTodo[0].id )
  })

  test('debe de mostrar el texto correctamente ', () => {
    const texto = wrapper.find('p')
    expect( texto.text().trim() ).toBe( `1. ${ demoTodo[0].todo }` )
  })

  test('debe de tener la clase "completed" si el todo done es == true ', () => {
    
    const todo = demoTodo[0]
    todo.done = true

    wrapper = shallow( 
      <TodoListItem
        id={ 1 }
        todo={ todo }
        index={ 0 }
        handleComplete={ handleComplete }
        handleDelete={ handleDelete }
      /> 
    )

    expect( wrapper.find('p').hasClass('completed') ).toBe( true )

  })
  
})
