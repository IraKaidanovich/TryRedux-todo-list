import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: []
};

const todoSlice = createSlice({
  mame: "todos",
  initialState, 
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.todos.push(action.payload);
      },
    togguleTodo: (state, action) => {
      const todo = state.todos.find (todo => todo.id === action.payload);
      if (todo){
        todo.completed = !todo.completed;
        }
      },
    removeTodo: (state, action) => {
      const index = state.todo.findIndex(todo => todo.id === action.payload);
      if (index !== -1){
        state.todo.splice( index, 1 );
      }
    },  
  },
},
});

export const { addTodo, togguleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;





