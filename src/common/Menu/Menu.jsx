import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Menu.scss";

const Menu = ({ menuItem }) => {
  const navigate = useNavigate;

  return (
    <div className="Menu">
      <ul>
        {menuItem.map((menuItem, index) => (
          <li>
            <Link
              to={menuItem.link}
              key={index}
              activeclassName="active"
              defaultSelectedKey={[window.location.pathname]}
            >
              <span className="icon">{menuItem.icon}</span>
              <span className="title">{menuItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
