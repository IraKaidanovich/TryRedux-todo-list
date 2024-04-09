import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  status: 'idle',
  error: null
};

const baseUrl = 'http://localhost:3001/todos';

// Async Thunks
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const createTodo = createAsyncThunk('todos/createTodo', async (todo, { rejectWithValue }) => {
  try {
    const response = await axios.post(baseUrl, todo);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async ({ id, updatedFields }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, updatedFields);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`${baseUrl}/${id}`);
    return id;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const toggleTodoCompletion = createAsyncThunk('todos/toggleCompletion', async (id, { getState, rejectWithValue }) => {
  const todo = getState().todos.todos.find(todo => todo.id === id);
  if (!todo) {
    return rejectWithValue('Todo not found');
  }
  const updatedFields = { completed: !todo.completed };
  try {
    const response = await axios.patch(`${baseUrl}/${id}`, updatedFields);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});



// Todo Slice
const todosSlice = createSlice({
  name: "todos", 
  initialState, 
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex(todo => todo.id === action.payload.id);
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      })
      .addCase(toggleTodoCompletion.fulfilled, (state, action) => {
        const index = state.todos.findIndex(todo => todo.id === action.payload.id);
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      });
      
  }
});



export default todosSlice.reducer;

