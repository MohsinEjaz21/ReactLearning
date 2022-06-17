import { createSlice } from '@reduxjs/toolkit';

export const DataGridSlice = createSlice({
  name: 'DataGridSlice',
  initialState: {
    isFilterDialogOpen: false,
    operators: {},
    columns: [],
    filters: [],
    columnsWithAction: [],
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload
    },
    setOperators: (state, action) => {
      state.operators = action.payload
    },
    setColumns: (state, action) => {
      state.columns = action.payload
    },
    setIsFilterDialogOpen: (state, action) => {
      state.isFilterDialogOpen = action.payload
    },
    setColumnsWithAction: (state, action) => {
      state.columnsWithAction = action.payload
    },
  }
})
