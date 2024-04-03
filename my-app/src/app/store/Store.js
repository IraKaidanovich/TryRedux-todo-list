import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../features/todo/todoSlice";
import emploeeReducer from "../features/employee/emloyeeSlice";

const store = configureStore({
  reducer:{
    todos:todoReducer,
    employee:emploeeReducer,
  }
})
 
export default store;
