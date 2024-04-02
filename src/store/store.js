import { configureStore } from '@reduxjs/toolkit';
import loginInfoReducer from '../reducers/alertSlice';


export const store = configureStore({
  reducer: {
    login_info: loginInfoReducer,
  },
});