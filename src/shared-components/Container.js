import React from "react";
import { useNavigate } from "react-router";
import { removeFromPersistance } from "../utils/utils";
// import BasicSpinner from "../components/BasicSpinner";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./shared.css";
import Navbar from "./Navbar";

const sidebar = [
  {
    id: 1,
    name: "Dashboard",
    icon: DashboardIcon,
    route: "/dashboard",
  },
  {
    id: 2,
    name: "Category",
    icon: CategoryIcon,
    route: "/category",
  },
  {
    id: 3,
    name: "Product",
    icon: DashboardIcon,
    route: "/product",
  },
  {
    id: 4,
    name: "Settings",
    icon: AccountCircleIcon,
    route: "/setting",
  },
];

const Container = ({ children }) => {
  const navigate = useNavigate();
  // const [active, setActive] = useState(1);
  // const [loading, setLoading] = useState(false);

  const handlePage = (id, route) => {
    // setLoading(true);
    // setTimeout(setLoading(false), 10000);
    // setActive(id);
    navigate(route);
  };

  const handlelogOut = () => {
    removeFromPersistance("auth_token");
    navigate("/login");
  };

  return (
    <>
      {/* <BasicSpinner open={loading} /> */}
      <div className="col-md-12 sidebar-container">
        <div className="col-md-2">
          <div className="col-md-12 sidebar">
            <div className="col-md-4">Logo here</div>

            <div className="col-md-6">
              {sidebar &&
                sidebar.map((item) => {
                  return (
                    <div
                      onClick={() => handlePage(item.id, item.route)}
                      id={item.id}
                      className="sidebar-items"
                      // className={`${
                      //   active === item.id
                      //     ? "sidebar-items-active"
                      //     : "sidebar-items"
                      // }`}
                    >
                      <item.icon sx={{ color: "white", marginRight: "7px" }} />
                      {item.name}
                    </div>
                  );
                })}
            </div>

            <div className="col-md-2">
              <p onClick={handlelogOut}>Logout</p>
            </div>
          </div>
        </div>
        <div className="col-md-10">
          <div className="col-md-12 container-body">
            <div className="col-md-2 inner-header">
              <Navbar />
            </div>
            <div className="col-md-10 container-child"> {children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Container;
