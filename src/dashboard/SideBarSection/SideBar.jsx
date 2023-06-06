import React from "react";
import "./SideBar.scss";
import { IoMdSpeedometer } from "react-icons/io";
import {
  MdDeliveryDining,
  MdOutlineExploreOff,
  MdOutlinePermContactCalendar,
} from "react-icons/md";
import {
  BsTrophy,
  BsCreditCard2FrontFill,
  BsQuestionCircle,
} from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { Link } from "react-router-dom";
/*import logo from "../../Images/logo.png";*/

const Sidebar = () => {
  return (
    <div className="sidebar grid">
      <div className="logoDiv flex">
        <img src="" alt="ImageName" />
        <h2>Planti.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">Quick Menu</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <Link to="" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">Dashboard</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="" className="menuLink flex">
              <MdDeliveryDining className="icon" />
              <span className="smallText">My Orders</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="" className="menuLink flex">
              <MdOutlineExploreOff className="icon" />
              <span className="smallText">Explore</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallText">Products</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="settingDiv">
        <h3 className="divTitle">Settings</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <Link to="" className="menuLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">Charts</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="" className="menuLink flex">
              <BiTrendingUp className="icon" />
              <span className="smallText">Trends</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">Contact</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="" className="menuLink flex">
              <BsCreditCard2FrontFill className="icon" />
              <span className="smallText">Billing</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>having trouble in Planti, contact us for more questions</p>
          <button className="btn">Go to help center</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
