import React from "react";

import SideBar from "../SideBar/SideBar";
import User from "../Users/User";
import "../dashboard.css";
import Meta from "../../CommonComponents/Meta";
import { SideBarForAdmin } from "../SideBar/SideBarData";

const MainAdmin = ({ children }) => {
  return (
    <>
      <Meta title="Admin" />
      <div className="Dashboard teal">
        <div className="Glass">
          <SideBar menuItem={SideBarForAdmin} />
          <div>
            <User />

            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainAdmin;
