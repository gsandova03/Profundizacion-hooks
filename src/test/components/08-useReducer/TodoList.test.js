import React from 'react'
import { shallow } from 'enzyme/build'
import TodoList from "../../../components/08-useReducer/components/TodoList"
import { demoTodo } from '../../fixtures/demoTodo'



describe('Pruebas en el componente <TodoList/>', () => {

  const handleComplete = jest.fn()
  const handleDelete = jest.fn()

  const wrapper = shallow( 
    <TodoList 
      todos={ demoTodo }
      handleComplete={ handleComplete }
      handleDelete={ handleDelete }
    /> 
  )
  
  test('debe de mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot()
  })

  test('debe de tener 2 <TodoListItem/>', () => {
    expect( wrapper.find('TodoListItem').length ).toBe( demoTodo.length )
    expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) );
  })
  
})
