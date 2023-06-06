import React from "react";
import Meta from "../../CommonComponents/Meta";
import SideBar from "../SideBar/SideBar";
import User from "../Users/User";
import { SideBarForUser } from "../SideBar/SideBarData";
import "./customerDashBoard.scss";
const MainCustomer = ({ children }) => {
  return (
    <>
      <Meta title="Profile" />
      <div className="Dashboard pink">
        <div className="Glass">
          <SideBar menuItem={SideBarForUser} />

          <div>
            <User />
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCustomer;
