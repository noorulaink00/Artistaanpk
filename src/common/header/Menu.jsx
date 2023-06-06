import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faShop,
  faBrush,
  faPalette,
  faRecycle,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="menu d_flex">
        <ul>
          {/*} <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHouse} />
              Home
            </Link>
  </li>*/}
          <li>
            <Link to="/textile">
              <FontAwesomeIcon icon={faShop} />
              Textile
            </Link>
          </li>
          <li>
            <Link to="/stationary">
              <FontAwesomeIcon icon={faBrush} />
              Stationary
            </Link>
          </li>
          <li>
            <Link to="/paintings">
              <FontAwesomeIcon icon={faPalette} />
              Paintings
            </Link>
          </li>
          {/* <li>
            <Link to="preused">
              <FontAwesomeIcon icon={faRecycle} />
              Pre-Used
            </Link>
          </li>*/}
          <li>
            <Link to="/sell">
              <FontAwesomeIcon icon={faTag} />
              Sell on Artistan
            </Link>
          </li>
          {/*
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/bid"> Bid</Link>
          </li>

          <li>
            <Link to="/customerDash"> CustomerDash</Link>
          </li>
          <li>
            <Link to="/sellerDash"> sellerDash</Link>
        </li>*/}
        </ul>
      </div>
    </>
  );
};

export default Menu;
