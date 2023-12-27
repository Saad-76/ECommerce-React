import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// import API from "../../config/ApiConfig/ApiConfig";
// import { ApiGetRequest } from "../../config/ApiConfig/ApiRequest";

const initialValues = {
  cartItems: [],
};

export const ItemsAddedInCart = createAsyncThunk(
  "cartItmes",
  (data, { rejectWithValue }) => {
    return data;
  }
);

const CartSlice = createSlice({
  name: "cart",
  initialState: initialValues,
  extraReducers: (builder) => {
    builder.addCase(ItemsAddedInCart.fulfilled, (state, action) => {
      state.cartItems = action.payload;
    });
  },
});
export default CartSlice.reducer;
