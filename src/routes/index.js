import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Auth/login";
import Forget from "../pages/Auth/forget";
import Signup from "../pages/Auth/signup";
import PublicRoutes from "./publicRoutes";
import PrivateRoutes from "./privateRoutes";
import Setting from "../pages/Setting/setting";
import Product from "../pages/Product/product";
import Category from "../pages/Category/category";
import Dashboard from "../pages/Dashboard/dashboard";
// import PaymentForm from "../pages/Cart/payment";

const Router = () => {
  return (
    <Routes>
      {/* --public routes--- */}
      <Route path="/" element={<PublicRoutes Component={Login} />} />
      <Route path="/login" element={<PublicRoutes Component={Login} />} />
      <Route path="/signup" element={<PublicRoutes Component={Signup} />} />
      <Route path="/forget" element={<PublicRoutes Component={Forget} />} />
      {/* --private routes--- */}
      <Route
        path="/dashboard"
        element={<PrivateRoutes Component={Dashboard} />}
      />
      <Route path="/product" element={<PrivateRoutes Component={Product} />} />
      <Route
        path="/category"
        element={<PrivateRoutes Component={Category} />}
      />
      <Route path="/setting" element={<PrivateRoutes Component={Setting} />} />
      {/* <Route
        path="/payment-form"
        element={<PrivateRoutes Component={PaymentForm} />}
      /> */}
    </Routes>
  );
};
export default Router;
