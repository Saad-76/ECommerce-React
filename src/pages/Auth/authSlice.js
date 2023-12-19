import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import API from "../../config/ApiConfig/ApiConfig";
import { ApiPostRequest } from "../../config/ApiConfig/ApiRequest";

const initialValues = {};

export const LoginRequest = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    const response = await ApiPostRequest(API.Auth.Login, data);
    return response;
  }
);

export const SignUpRequest = createAsyncThunk(
  "auth/signUp",
  async (data, { rejectWithValue }) => {
    const response = await ApiPostRequest(API.Auth.SignUp, data);
    return response;
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialValues,
  extraReducers: (builder) => {
    builder.addCase(LoginRequest.fulfilled, (state, action) => {
      // state.listingData = action.payload.data.result;
    });
  },
});
export default AuthSlice.reducer;
