import React, { useReducer } from 'react'

import './styles/styles.css'
import { todoReducer } from './todoReducer'

const initialState = [
  {
    id: new Date().getTime(),
    todo: 'Aprender React',
    done: false
  },
  {
    id: new Date().getTime(),
    todo: 'Aprender Node',
    done: false
  }
]

export const TodoApp = () => {

  const [ todos, dispatch ] = useReducer( todoReducer, initialState )

  const handleAddSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      todo: 'Aprender Express',
      done: false
    };

    const action = {
      type: "addTodo",
      payload : newTodo
    };

    dispatch( action );
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
          <ul className="list-group list-group-flush">
            {
              todos.map( ( todo,i ) => (
                <li key={ todo.id } className="list-group-item">
                  <p className="text-center"> { i + 1 }. { todo.todo } </p>
                  <button className="btn btn-danger"> Eliminar </button>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="col-5" onSubmit={ handleAddSubmit }>
            <h4 className="text-center">Aregar Todo</h4>
            <hr/>
            <form>
              <input 
                type="text" 
                name="description" 
                className="form-control"
                placeholder="tarea...." 
              />
              <button 
                type="submit" 
                className="btn btn-primary"
              >
                Agregar
              </button>
            </form>
        </div>
      </div>

    </div>
  )
}
