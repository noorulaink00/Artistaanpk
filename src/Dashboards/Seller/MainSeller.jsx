import React from "react";
import Meta from "../../CommonComponents/Meta";
import SideBar from "../SideBar/SideBar";
import User from "../Users/User";
import { SideBarForSeller } from "../SideBar/SideBarData";
const MainSeller = ({ children }) => {
  return (
    <div>
      <>
        <Meta title="Seller Dashboard" />
        <div className="Dashboard pink">
          <div className="Glass">
            <SideBar menuItem={SideBarForSeller} />

            <div>
              <User />
              <div>{children}</div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MainSeller;
