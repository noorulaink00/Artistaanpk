import React from "react";

import Navbar from "./Navbar/Navbar";
import Rightbar from "./Rightbar/Rightbar";
import "./home.scss";
const Userboard = () => {
  return (
    <div className="home">
      <>
        <Navbar />
        <div className="homeContainer">
          <Rightbar />
        </div>
      </>
    </div>
  );
};

export default Userboard;
