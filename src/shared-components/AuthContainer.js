import React from "react";

import "../components/style.css";

const AuthContainer = ({ title, description, children }) => {
  return (
    <div className="col-md-12 outer-container">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <div className="search-container col-md-12">
          <div className="search-inner-container">
            <h3 className="search-title">{title}</h3>
            <p className="search-description">{description}</p>
            {children}
          </div>
        </div>
      </div>
      <div className="col-md-3"></div>
    </div>
  );
};
export default AuthContainer;
