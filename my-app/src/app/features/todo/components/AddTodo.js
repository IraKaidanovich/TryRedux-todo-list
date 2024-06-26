import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../todoSlice';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch(); // Using the useDispatch hook

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(createTodo({ id: Date.now(), title: input, completed: false }));
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='addTodoForm'>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className='addTodoInput' />
      <button type="submit" className="addTodoButton">Add Todo</button>
    </form>
  );
};

export default AddTodo; // No need to wrap with connect()
