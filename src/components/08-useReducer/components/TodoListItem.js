import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ id, index, todo, handleComplete, handleDelete }) => {
  return (
    <li className="list-group-item">
      <p 
        className={ `${ todo.done && 'completed' }` } 
        onClick={ () => handleComplete( id ) }
      > 
        { index + 1 }. { todo.todo } 
      </p>
      <button 
        className="btn btn-danger" 
        onClick={ () => handleDelete( id ) }
      > Eliminar </button>
    </li>
  )
}

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  todo: PropTypes.object.isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default TodoListItem;
