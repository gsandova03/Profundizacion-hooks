import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = ({ handleComplete, handleDelete, todos }) => {
  return (
    <>
     <ul className="list-group list-group-flush">
        {
          todos.map( ( todo,i ) => (
            <TodoListItem 
              key={ todo.id } 
              id={ todo.id } 
              index={ i } 
              todo={ todo } 
              handleComplete={ handleComplete } 
              handleDelete={ handleDelete } 
            />
          ))
        }
      </ul> 
    </>
  )
}

TodoList.propTypes = {
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  todos: PropTypes.array
}

export default TodoList;
