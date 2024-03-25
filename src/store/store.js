import { configureStore } from '@reduxjs/toolkit';
import loginInfoReducer from '../reducers/loginSlice';


export const store = configureStore({
  reducer: {
    login_info: loginInfoReducer,
  },
});