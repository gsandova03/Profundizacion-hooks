import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodo } from "../../fixtures/demoTodo"


describe('pruebas en el todoReducer', () => {
  
  test('debe de retornar el estado por defecto ', () => {
    
    const state = todoReducer( demoTodo, {} )

    expect( state ).toEqual( demoTodo )
  })
  
  test('debe de agregar un nuevo TODO ', () => {
    
    const action = {
      type: "add",
      payload: {
        id: 3,
        todo: "aprender mongo",
        done: false
      }
    }

    const state = todoReducer( demoTodo, action )

    expect( state.length ).toBe( 3 )
  })

  test('debe de eliminar un TODO', () => {

    const action = {
      type: "delete",
      payload: 1
    }

    const state = todoReducer( demoTodo, action )

    expect( state ).toEqual( [{
      id: 2,
      todo: "aprender mongo",
      done: false
    }])
  })

  test('debe de hacer toggle de done en un TODO', () => {

    const action = {
      type: "toggle",
      payload: 1
    }

    const state = todoReducer( demoTodo, action )

    expect( state[0].done ).toBe( true )
    expect( state[1] ).toEqual( demoTodo[1] )
  })
  
})
