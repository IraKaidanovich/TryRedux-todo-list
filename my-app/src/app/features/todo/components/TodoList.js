import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <ul className='todoList' >
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps)(TodoList);

