import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faHeart,
  faShoppingCart,
  faHouse,
  faShop,
  faBrush,
  faPalette,
  faRecycle,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { updateCurrentUser } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthContext";

const Nav = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <nav className="nav">
        <div className="div1 display">
          <div className="logo display">
            <span>
              <a to="/">ARTISTAN</a>
            </span>
          </div>
          <div className="bar display">
            <div className="search">
              <FontAwesomeIcon icon={faSearch} size="xl" />
              <input
                type="text"
                placeholder="Search Here ..."
                className="search_input"
              />
            </div>
          </div>
          <div className="user-action">
            <div className="navbarRight">
              <img
                src={currentUser.photoURL ? currentUser.photoURL : "/assets/"}
                alt=""
                className="profileImg"
              />
            </div>
            <button className="action-btn" login-btn>
              <FontAwesomeIcon icon={faUser} />
              <span className="btn-data">SignIn</span>
            </button>

            <button className="action-btn">
              <FontAwesomeIcon icon={faHeart} />
              <span className="count">0</span>
            </button>

            <button className="action-btn">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="btn-data">Cart</span>
            </button>
          </div>
        </div>
        <div className="div2">
          <div className="menu display">
            <ul>
              <li>
                <a to="/">
                  <FontAwesomeIcon icon={faHouse} />
                  Home
                </a>
              </li>
              <li>
                <a to="/products/textile">
                  <FontAwesomeIcon icon={faShop} />
                  Textile
                </a>
              </li>
              <li>
                <a to="/products/products">
                  <FontAwesomeIcon icon={faBrush} />
                  Stationary
                </a>
              </li>
              <li>
                <a to="/products/paintings">
                  <FontAwesomeIcon icon={faPalette} />
                  Paintings
                </a>
              </li>
              <li>
                <a to="#">
                  <FontAwesomeIcon icon={faRecycle} />
                  Pre-Used
                </a>
              </li>
              <li>
                <a to="/seller">
                  <FontAwesomeIcon icon={faTag} />
                  Sell on Artistan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
