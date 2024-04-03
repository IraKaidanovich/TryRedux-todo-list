import React from 'react';
import AddTodo from './app/features/todo/components/AddTodo';
import TodoList from './app/features/todo/components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}


export default App;
