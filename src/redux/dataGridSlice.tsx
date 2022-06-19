import { createSlice } from '@reduxjs/toolkit';

export const DataGridSlice = createSlice({
  name: 'DataGridSlice',
  initialState: {
    isFilterModalOpen: false,
    isAddModalOpen: false,
    isDeleteDialogOpen: false,
    entityName: 'User',
  },
  reducers: {
    setIsFilterModalOpen: (state, action) => {
      state.isFilterModalOpen = action.payload
    },
    setIsAddDialogOpen: (state, action) => {
      state.isAddModalOpen = action.payload
    },
    setIsDeleteDialogOpen: (state, action) => {
      state.isDeleteDialogOpen = action.payload
    }
  }
})
