import { Navigate } from "react-router-dom";
import { getFromPersistance } from "../utils/utils";

const PrivateRoutes = ({ Component }) => {
  let isAuthenticated = getFromPersistance("auth_token");
  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};
export default PrivateRoutes;
