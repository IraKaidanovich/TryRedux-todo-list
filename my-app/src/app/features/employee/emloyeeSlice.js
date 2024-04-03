import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const initialState = {
  employee: []
};

const employeeSlice = createSlice({
  name:'employee',
  initialState, 
  reducers: {
    addEmployee: (state, action) => {
      state.employee.push ({id: ++id, name: action.payload.name, age: action.payload.age})
    }
  }
})

export const {addEmployee} = employeeSlice.actions;
export default employeeSlice.reducer;

