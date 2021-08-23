import React from 'react'
import { shallow, mount } from "enzyme"
import { TodoApp } from '../../../components/08-useReducer/TodoApp'
import { demoTodo } from '../../fixtures/demoTodo'
import { act } from '@testing-library/react'

describe('Pruebas en el componente <TodoApp />', () => {
  
  const wrapper = shallow( <TodoApp/> )
  //Para hacer validaciones del llamdo al localStorage jest nos permite utilizar la funcion Storage
  Storage.prototype.setItem = jest.fn()
  
  test('debe de mostrarse correctamente', () => {  
    expect( wrapper ).toMatchSnapshot()
  });
  
  test('debe de agregar un Todo', () => {
    
    //obtenemos mas informacion del componente y de sus hijos con el mount, ademas del contexto donde esta corriendo
    const wrapper = mount( <TodoApp/> )

    act(()=>{
      wrapper.find('TodoAdd').prop('addTodo')( demoTodo[0] );
      wrapper.find('TodoAdd').prop('addTodo')( demoTodo[1] );
    })

    expect( wrapper.find('h1').text().trim() ).toBe( 'Tareas sin completar: ( 2 )' );
    //Evaluacion del llamdo al localStorage
    expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
  })
  
  test('debe de eliminar un todo', () => {
    
    wrapper.find('TodoAdd').prop('addTodo')( demoTodo[0] );
    wrapper.find('TodoList').prop('handleDelete')( demoTodo[0].id );

    expect( wrapper.find('h1').text().trim() ).toBe( 'Tareas sin completar: ( 0 )' );
  })
  
})
