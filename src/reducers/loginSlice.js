import { createSlice } from '@reduxjs/toolkit'



export const loginSlice = createSlice({
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
          debugger;
      },
  },
})

export const { setLoginInfo, setRegInfo } = loginSlice.actions
export const selectLoginInfo = (state) => state.login_info;
export default loginSlice.reducer
