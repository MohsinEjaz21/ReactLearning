import { IFilterForm } from '@interfaces/IFilterForm';
import { IUserEntity } from '@interfaces/IUserEntity';
import { createSlice } from '@reduxjs/toolkit';
import { FormInstance } from 'antd';

export const DataGridSlice = createSlice({
  name: 'DataGridSlice',
  initialState: {
    isFilterModalOpen: false,
    isAddModalOpen: false,
    isDeleteDialogOpen: false,
    entityState: {
      entityName: 'User',
      filterFormRef: {} as FormInstance<any>,
      addFormRef: {} as FormInstance<any>,
      users: [] as IUserEntity[],
      deleteUser: {} as IUserEntity,
      tags: [] as IFilterForm[],
    }
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
    },
    setEntityState: (state, action) => {
      state.entityState = action.payload
    }

  }
})

    // setIsFilterModalOpen: (state, action) => {
    //   state.isFilterModalOpen = action.payload
    // },
