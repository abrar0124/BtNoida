import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async login function

export const loginUsers = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }) => {
    const response = await axios.post("https://fakestoreapi.com/auth/login", {
      username,
      password,
    });

    const loginData = {
      token: response.data.token,
      username,
      password,
    };
    localStorage.setItem("loginData", JSON.stringify(loginData));
    return loginData;
  }
);

const initialState = {
  username: "",
  password: "",
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
    logout: (state) => {
      state.username = "";
      state.password = "";
      state.token = null;
      state.message = "Logged out successfully!";
      // localStorage.removeItem("loginData");
    },
    restoreSession: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.token = action.payload.token;
      state.message = "✅ Logged in from saved session.";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUsers.fulfilled, (state, action) => {
        state.username = action.payload.username;
        state.password = action.payload.password;
        state.token = action.payload.token;
        state.message = "✅ Login successful!";
        console.log("Api Response after user login:", state.token);
      })
      .addCase(loginUsers.rejected, (state, action) => {
        state.message = action.payload;
      });
  },
});

export const { setUsername, setPassword, logout, restoreSession } =
  authSlice.actions;
export default authSlice.reducer;
