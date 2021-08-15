export const initialState = [{
  id: 1,
  todo: 'Comprar Pan',
  done: false
}]

const todoReducer = ( state = initialState , action ) => {

  switch (action?.type) {
    case "addTodo":
      return [ ...state, action.payload ]
  
    default:
      return state
  }
}

let todos = todoReducer();

let newTodo = {
  id: 2,
  todo: 'Sacar al perro',
  done: true
}

const action = {
  type: 'addTodo',
  payload: newTodo
}

todos = todoReducer( todos, action )

console.log( todos )