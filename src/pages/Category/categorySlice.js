import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import API from "../../config/ApiConfig/ApiConfig";
import {
  ApiGetRequest,
  ApiPostRequest,
} from "../../config/ApiConfig/ApiRequest";

const initialValues = {
  allCategories: "",
};

export const createCategory = createAsyncThunk(
  "category/create",
  async (data, { rejectWithValue }) => {
    const response = await ApiPostRequest(API.Category.Create, data);
    return response;
  }
);

export const GetCategories = createAsyncThunk(
  "product/GetCategories",
  async (data, { rejectWithValue }) => {
    const response = await ApiGetRequest(API.Category.Categories);
    return response;
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState: initialValues,
  extraReducers: (builder) => {
    builder.addCase(GetCategories.fulfilled, (state, action) => {
      state.allCategories = action.payload.data.data;
    });
  },
});
export default ProductSlice.reducer;
