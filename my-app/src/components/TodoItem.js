import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/actions/todoActions';
import '../App.css'; 

const TodoItem = ({ todo, dispatch }) => {
    return (
        <div className="todoItem">
            <p className={`todoItemText ${todo.completed ? 'todoCompleted' : ''}`} onClick={() => dispatch(toggleTodo(todo.id))}>
                {todo.text}
            </p>
            <div className="todoItemButtons">
                <button className="todoButton toggleButton" onClick={() => dispatch(toggleTodo(todo.id))}>Toggle</button>
                <button className="todoButton removeButton" onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
            </div>
        </div>
    );
};

export default connect()(TodoItem);
