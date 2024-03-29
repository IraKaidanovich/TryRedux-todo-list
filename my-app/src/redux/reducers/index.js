import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosReducer';
import employeeReducer from '../Emloyee';

//const rootReducer = combineReducers({
    //todos: todosReducer,
    //employee: employeeReducer,
//});

const store = configureStore({reducer:{
    todos: todosReducer,
    employee: employeeReducer,  
}})

export default store;

