import React from "react";
import Logo from "../../common/Logo/logo";
import Menu from "../../common/Menu/Menu";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";
import "./SideBar.scss";

import { Link } from "react-router-dom";
import { SideBarForAdmin } from "./SideBarData";
import { FaBars } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
const SideBar = (props) => {
  return (
    <div className="AdminSideBar">
      <div className="SideBar-top">
        <Logo />
      </div>

      <div className="SideBar-menu">
        <Menu menuItem={props.menuItem} />
      </div>
    </div>
  );
};

export default SideBar;
