import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../features/todo/todoSlice";
import emploeeReducer from "../features/employee/emloyeeSlice";
import loggerMiddleware from "../middleware/loggerMiddleware";
import error from "../middleware/errorMiddleware";


const store = configureStore({
  reducer:{
    todos:todoReducer,
    employee:emploeeReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), loggerMiddleware, error],
})
 
export default store;

