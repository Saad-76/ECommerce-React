import React from "react";
import { getFromPersistance } from "../utils/utils";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ Component }) => {
  let isAuthenticated = getFromPersistance("auth_token");
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Component />;
};
export default PublicRoutes;
