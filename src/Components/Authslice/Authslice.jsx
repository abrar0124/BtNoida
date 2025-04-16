import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "mor_2314",
  password: "83r5^_",
  token: null,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    login: (state, action) => {
      state.token = action.payload.token;
      state.message = "✅ Login Successful!";
    },
    logout: (state) => {
      state.token = null;
      state.username = "";
      state.password = "";
      state.message = "Log out successfully!";
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    restoreSession: (state, action) => {
      state.token = action.payload.token;
      state.message = "✅ Logged in from previous session!";
    },
  },
});

export const {
  setUsername,
  setPassword,
  login,
  logout,
  setMessage,
  restoreSession,
} = authSlice.actions;

export default authSlice.reducer;
