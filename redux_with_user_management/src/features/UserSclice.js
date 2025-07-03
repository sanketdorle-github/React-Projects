import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: null,
  isAuthenticated: false,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;

      state.isAuthenticated = true;
            localStorage.setItem('user', JSON.stringify(action.payload.user)); // Only non-sensitive data
            localStorage.setItem('token', action.payload.token); // Only non-sensitive data
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
       localStorage.removeItem('user');
       localStorage.removeItem('token');
      // Server should also invalidate the refresh token
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
