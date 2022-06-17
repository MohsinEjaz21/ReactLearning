import { createSlice, current } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState: {
    isLogined: false,
  },
  reducers: {
    setIsLogined: (state, action) => {
      console.log(current(state))
      console.log(action);
      state.isLogined = action.payload
    }
  }
})




