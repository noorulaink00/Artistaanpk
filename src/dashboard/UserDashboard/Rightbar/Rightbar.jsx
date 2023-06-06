import { ArrowDropDown } from "@mui/icons-material";
import React from "react";
import Widget from "../Widget/Widget";
import "./Rightbar.scss";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <Widget type="user" />
        <Widget type="popular" />
        <Widget type="editor" />
        <button className="rightButton">
          See More
          <ArrowDropDown />
        </button>
      </div>
    </div>
  );
};

export default Rightbar;
