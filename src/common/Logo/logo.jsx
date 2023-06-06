import React from "react";
import { Link } from "react-router-dom";
import "./logo.scss";

const logo = () => {
  return (
    <div className="logo">
      <div className="logoh2">
        <Link to="/">
          <h2>ARTISTAAN</h2>
        </Link>
      </div>
    </div>
  );
};

export default logo;
