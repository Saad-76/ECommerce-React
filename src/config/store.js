import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../pages/Auth/authSlice";
// import DashboardReducer from "../pages/Dashboard/dashboardSlice";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    // dashboard: DashboardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;