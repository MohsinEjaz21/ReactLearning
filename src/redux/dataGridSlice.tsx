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
    openDeleteDialog: (state) => {
      state.isDeleteDialogOpen = true
    },
    closeDeleteDialog: (state) => {
      state.isDeleteDialogOpen = false
    },
    openAddDialog: (state) => {
      state.isAddModalOpen = true
    },
    closeAddDialog: (state) => {
      state.isAddModalOpen = false
    },
    openFilterDialog: (state) => {
      state.isFilterModalOpen = true
    },
    closeFilterDialog: (state) => {
      state.isFilterModalOpen = false
    }

  }
})

    // setIsFilterModalOpen: (state, action) => {
    //   state.isFilterModalOpen = action.payload
    // },
