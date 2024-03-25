import { createSlice } from '@reduxjs/toolkit'



export const loginSlice = createSlice({
  name: 'login_info',
  initialState: {
      "status": false,
  },
  reducers: {
      setLoginInfo: (state, action) => {
          state.status = action.payload;
      },
  },
})

export const { setLoginInfo } = loginSlice.actions
export const selectLoginInfo = (state) => state.login_info;
export default loginSlice.reducer
