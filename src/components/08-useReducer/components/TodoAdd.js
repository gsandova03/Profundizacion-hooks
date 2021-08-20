import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../../../hooks/useForm';

const TodoAdd = ({ addTodo }) => {

  const [ { description }, handleInputChange, reset ] = useForm({
    description: ''
  })

  const handleAddSubmit = (e) => {
    e.preventDefault();
    console.log( description )
    if( description.trim().length <= 1 ){
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      todo: description,
      done: false
    };

    addTodo( newTodo );
    reset();
  }

  return (
    <>
      <h4 className="text-center">Aregar Todo</h4>
      <hr/>
      <form onSubmit={ handleAddSubmit }>
        <input 
          type="text" 
          name="description" 
          className="form-control"
          placeholder="tarea...."
          value={ description }
          onChange={ handleInputChange }
        />
        <button 
          type="submit" 
          className="btn btn-primary"
        >
          Agregar
        </button>
      </form>
    </>
  )
}

TodoAdd.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default TodoAdd
