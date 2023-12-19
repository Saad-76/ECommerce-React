import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Auth/login";
import Forget from "../pages/Auth/forget";
import Signup from "../pages/Auth/signup";
import PublicRoutes from "./publicRoutes";
import PrivateRoutes from "./privateRoutes";
import Dashboard from "../pages/Dashboard/dashboard";
import Product from "../pages/Product/product";

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
    </Routes>
  );
};
export default Router;
