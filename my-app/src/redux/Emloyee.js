import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const initialState = {
  employee: []
};

const slice = createSlice({
  name:'EMPLOYEE',
  initialState, 
  reducers: {
    employeeReducer: (state, action) => {
      state.employee.push ({id: ++id, name: action.payload.name, age: action.payload.age})
    }
  }
})

export const {employeeReducer} = slice.actions;
export default slice.reducer