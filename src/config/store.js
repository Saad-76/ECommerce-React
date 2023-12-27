import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../pages/Auth/authSlice";
import ProductReducer from "../pages/Product/productSlice";
import CartReducer from "../pages/Cart/cartSlice";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    product: ProductReducer,
    cart: CartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
