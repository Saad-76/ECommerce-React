import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import API from "../../config/ApiConfig/ApiConfig";
import { ApiGetRequest } from "../../config/ApiConfig/ApiRequest";

const initialValues = {
  allProducts: "",
};
export const GetProducts = createAsyncThunk(
  "product/allProducts",
  async (data, { rejectWithValue }) => {
    const response = await ApiGetRequest(API.Product.Products);
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
    builder.addCase(GetProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload.data.data;
    });
  },
});
export default ProductSlice.reducer;
