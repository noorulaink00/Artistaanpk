import React from "react";
import "./Top.scss";
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";

/*import admin from "../../../Images/person.webp";*/
const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Planti</h1>
          <p>Hello IsraTech, Welcome Back!</p>
        </div>
        <div className="searchBar flex">
          <input type="text" placeholder="Search DashBoard" />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src="" alt="Admin Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
