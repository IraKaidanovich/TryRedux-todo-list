import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../todoSlice';


const TodoItem = ({ todo, dispatch }) => {
    
    return (
        <div className="todoItem">
            <p className={`todoItemText ${todo.completed ? 'todoCompleted' : ''}`} onClick={() => dispatch(toggleTodo(todo.id))}>
                {todo.text}
            </p>
            <div className="todoItemButtons">
                <button className="todoButton toggle" onClick={() => dispatch(toggleTodo(todo.id))}>Toggle</button>
                <button className="todoButton remove" onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
            </div>
        </div>
    );
};

export default connect()(TodoItem);
