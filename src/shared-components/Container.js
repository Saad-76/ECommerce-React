import React from "react";
import { useNavigate } from "react-router";
import { removeFromPersistance } from "../utils/utils";

import "./Container.css";

const Container = ({ children }) => {
  const navigate = useNavigate();

  const sidebar = [
    {
      id: 1,
      name: "Dashboard",
      route: "/dashboard",
    },
    {
      id: 2,
      name: "Product",
      route: "/product",
    },
    {
      id: 3,
      name: "Upload",
      route: "/login",
    },
  ];

  const handlePage = (route) => {
    navigate(route);
  };

  const handlelogOut = () => {
    removeFromPersistance("auth_token");
    navigate("/login");
  };

  return (
    <div className="col-md-12 sidebar-container">
      <div className="col-md-2">
        <div className="col-md-12 sidebar">
          <div className="col-md-4">
            <p>logo here</p>
          </div>

          <div className="col-md-6">
            {sidebar &&
              sidebar.map((item) => {
                return (
                  <div onClick={() => handlePage(item.route)} id={item.id}>
                    {item.name}
                  </div>
                );
              })}
          </div>

          <div className="colms-2">
            <p onClick={handlelogOut}>Logout</p>
          </div>
        </div>
      </div>
      <div className="col-md-10">
        <div className="col-md-12 container-body">
          <div className="col-md-2 inner-header">header here</div>
          <div className="col-md-10"> {children}</div>
        </div>
      </div>
    </div>
  );
};
export default Container;
