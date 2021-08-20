import React, { useEffect, useReducer } from 'react'

import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import { todoReducer } from './todoReducer'

import './styles/styles.css'

const initialState = []

const init = () => {
  // return [
  //   {
  //     id: new Date().getTime(),
  //     todo: 'Aprender React',
  //     done: false
  //   },
  //   {
  //     id: new Date().getTime(),
  //     todo: 'Aprender Node',
  //     done: false
  //   }
  // ]

  //Extraer los todos del localstorage si existen, si no retorna un array vacio
  //El local storage almacena string, por eso es necesario usar el metodo JSON.parse para transformalo a un objeto
  return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
}

export const TodoApp = () => {

  //Función init sirve para cargarle a nuestro estodo lo que quiera que retorne esta función
  const [ todos, dispatch ] = useReducer( todoReducer, initialState, init )

  useEffect(() => {
    localStorage.setItem( "todos", JSON.stringify( todos ) )
  }, [ todos ])

  const handleDelete = ( id ) => {
    const deleteTodo = {
      type: 'delete',
      payload: id
    }

    dispatch( deleteTodo )
  }

  const handleComplete = ( todoId ) => {
    dispatch({
      type: 'toggle',
      payload: todoId
    })
  }

  const addTodo = ( newTodo ) => {
    dispatch({
      type: 'add',
      payload: newTodo
    })
  }
  
  return (
    <div>
      <h1>Tareas sin completar: ( { todos.length } ) </h1>
      {/* <h1>Tareas terminadas: ( { todos.length } ) </h1> */}
      <hr/>

      <div className="row">
        <div className="col-7">
          <h4 className="text-center">Todos</h4>
          <hr/>
          <TodoList handleComplete={ handleComplete } handleDelete={ handleDelete } todos={ todos } />
        </div>

        <div className="col-5" >
            <TodoAdd addTodo={ addTodo }/>
        </div>
      </div>

    </div>
  )
}
