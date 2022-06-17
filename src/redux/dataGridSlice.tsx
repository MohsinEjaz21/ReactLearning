import { createSlice, current } from "@reduxjs/toolkit";

export const DataGridSlice = createSlice({
  name: 'DataGrid',
  initialState: {
    name: 'Hell world',
  },
  reducers: {
    setName: (state, action) => {
      console.log(current(state), action)
      state.name = action.payload
    }
  }
})




