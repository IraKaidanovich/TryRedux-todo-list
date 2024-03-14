import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';

const AddTodo = ({ dispatch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo({ id: Date.now(), text: input, completed: false }));
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='addTodoForm' >
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}  className='addTodoInput' />
      <button type="submit" className="addTodoButton" >Add Todo</button>
    </form>
  );
};

export default connect()(AddTodo);
