import { bindActionCreators, configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { DataGridSlice } from './dataGridSlice';

type RootState = ReturnType<typeof reduxStore.getState>
export const reduxStore = configureStore({
  reducer: {
    DataGridSlice: DataGridSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})

export const Redux = {
  DataGridSlice: {
    actions: bindActionCreators(DataGridSlice.actions, reduxStore.dispatch),
    state: () => useSelector((state: RootState) => state.DataGridSlice)
  }
}

