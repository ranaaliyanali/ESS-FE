import { configureStore } from '@reduxjs/toolkit';
import loginInfoReducer from '../headers/loginSlice';


export const store = configureStore({
  reducer: {
    login_info: loginInfoReducer,
  },
});