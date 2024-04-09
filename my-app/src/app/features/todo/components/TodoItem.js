import React from 'react';
import { connect } from 'react-redux';
import { toggleTodoCompletion, deleteTodo } from '../todoSlice';


const TodoItem = ({ todo, dispatch }) => {
    
    return (
        <div className="todoItem">
            <p className={`todoItemText ${todo.completed ? 'todoCompleted' : ''}`} onClick={() => dispatch(toggleTodoCompletion(todo.id))}>
                {todo.title}
            </p>
            <div className="todoItemButtons">
                <button className="todoButton toggle" onClick={() => dispatch(toggleTodoCompletion(todo.id))}>Toggle</button>
                <button className="todoButton remove" onClick={() => dispatch(deleteTodo(todo.id))}>Remove</button>
            </div>
        </div>
    );
};

export default connect()(TodoItem);
