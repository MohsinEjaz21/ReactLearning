import { bindActionCreators, configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { AuthSlice } from './authSlice';
import { DataGridSlice } from './dataGridSlice';

type RootState = ReturnType<typeof reduxStore.getState>
export const reduxStore = configureStore({
  reducer: {
    AuthSlice: AuthSlice.reducer,
    DataGridSlice: DataGridSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})

export const Redux = {
  AuthSlice: {
    actions: bindActionCreators(AuthSlice.actions, reduxStore.dispatch),
    state: () => useSelector((state: RootState) => state.AuthSlice)
  },
  DataGridSlice: {
    actions: bindActionCreators(DataGridSlice.actions, reduxStore.dispatch),
    state: () => useSelector((state: RootState) => state.DataGridSlice)
  }
}



// For ----------- Store.tsx  ----------- 
// export const AuthSliceAction = bindActionCreators(AuthSlice.actions, reduxStore.dispatch)
// export const AuthSliceState = reduxStore.getState().AuthSlice;

// type RootState = ReturnType<typeof reduxStore.getState>
// export const { state: AuthSliceState, actions: AuthSliceAction } = NewSlice2<
//   RootState["AuthSlice"], typeof AuthSlice.actions>(AuthSlice);




