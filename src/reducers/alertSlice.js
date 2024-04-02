import { createSlice } from '@reduxjs/toolkit'



export const alertSlice = createSlice({
  name: 'login_info',
  initialState: {
      "status": false,
      "reg": false,
  },
  reducers: {
      setLoginInfo: (state, action) => {
          state.status = action.payload;
      },
      setRegInfo: (state, action) => {
          state.reg = action.payload;
      },
  },
})

export const { setLoginInfo, setRegInfo } = alertSlice.actions
export const selectLoginInfo = (state) => state.login_info;
export default alertSlice.reducer
