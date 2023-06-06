import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faHeart,
  faShoppingCart,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../Logo/logo";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../../css/Header.css";

const Head = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    // Assuming you have the necessary code to get the username
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.displayName);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    // Handle logout logic here
    // Assuming you have the necessary code to logout the user
    const auth = getAuth();
    signOut(auth);
  };
  const handleLogin = () => {
    navigate("/login");
  };

  const handleRedirect = () => {
    navigate("/customerDash");
  };

  const [cartCount, setCartCount] = useState(0);

  // Function to handle adding items to the cart
  const handleAddToCart = () => {
    // Perform logic to add items to the cart
    // Update the cart count state accordingly
    setCartCount(cartCount + 1);
  };
  return (
    <>
      <header className="head">
        <div className="bar d_flex py-2">
          <p className="m-0">Free shipping on all orders above 2500</p>
        </div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-white container"
          style={{ height: "10vh" }}
        >
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav ">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="search">
                  <FontAwesomeIcon icon={faSearch} />
                  <input
                    type="text"
                    placeholder="Search Here ..."
                    className="search_input"
                  />
                </div>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0 d_flex">
              {isLoggedIn ? (
                // Your JSX code
                <li className="nav-item">
                  <Link to="/customerDash" className="nav-link">
                    <button className="name ms-2" onClick={handleRedirect}>
                      <FontAwesomeIcon icon={faUser} />
                      <span className=" ms-2">{username}</span>
                    </button>
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <button className="btn me-2" onClick={handleLogin}>
                    <FontAwesomeIcon icon={faUser} />
                    <span className=" ms-2">Log In</span>
                  </button>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <button
                    className="btn  btn-hover-color me-2"
                    onClick={handleLogout}
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span className=" ms-2">Logout</span>
                  </button>
                </li>
              )}
              <li className="nav-item">
                <Link to="/mycart" className="nav-link">
                  <button className="btn  me-2" onClick={handleAddToCart}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className="cart-icon-css ms-2">{cartCount}</span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/*<div className="container bg-white overall">
        <div className="container-lg d-flex align-items-center justify-content-between">
          <div className="col-lg-2 blue">
            <div className="logo">
              <Logo />
            </div>
          </div>

          <div className="col-lg-6 red">
            <div className="search-bar">
              <div className="input-group">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
                <input
                  type="text"
                  placeholder="Search Here ..."
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-4 purple">
            <div className="user-action d-flex justify-content-end">
              {isLoggedIn ? (
                <>
                  <h3 className="name-span me-3">{username}</h3>
                  <button className="btn btn-primary" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span className="ms-2">Logout</span>
                  </button>
                </>
              ) : (
                <Link to="/login" className="btn btn-primary">
                  <FontAwesomeIcon icon={faUser} />
                  <span className="ms-2">Login</span>
                </Link>
              )}

              <Link to="/cart" className="count btn btn-primary ms-3">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className=" cart-icon-css">0</span>
              </Link>
            </div>
          </div>
        </div>
      </div>*/}

      {/*<header className="head fixed-top">
        <div className="bar d-flex py-2">
          <p>Free shipping on all orders above 2500</p>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white container">
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="search">
                  <FontAwesomeIcon icon={faSearch} />
                  <input
                    type="text"
                    placeholder="Search Here ..."
                    className="search_input"
                  />
                </div>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              {isLoggedIn ? (
                <li className="nav-item">
                  <Link
                    to="/customerDash"
                    className="nav-link"
                    onClick={handleRedirect}
                  >
                    <FontAwesomeIcon icon={faUser} />
                    <span className="name-span ms-2">{username}</span>
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link btn btn-link" to="/login">
                    <FontAwesomeIcon icon={faUser} />
                    <span className="name-span ms-2">Log In</span>
                  </Link>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={handleLogout}
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span className="name-span ms-2">Logout</span>
                  </button>
                </li>
              )}
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  <button className="btn btn-outline-secondary me-2">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className="cart-icon-css ms-2">0</span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>*/}
    </>
  );
};

export default Head;

{
  /*import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../Logo/logo";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Head = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUserName] = useState();

  useEffect(() => {
    setIsLoggedIn(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <div className="bar d_flex">
        <p>Free shipping on all orders above 2500 </p>
      </div>

      <div className="container1 d_flex">
        <Logo />
        <div className="searchbar ">
          <div className="search mr-sm-2">
            <FontAwesomeIcon icon={faSearch} size="2sm" />
            <input
              type="text"
              placeholder="Search Here ..."
              class="search_input "
            />
          </div>
        </div>
        <div className="user-action d_flex">
          <Link className="action-btn" to={isLoggedIn ? "/profile" : "/login"}>
            <button>
              <FontAwesomeIcon icon={faUser} />
              <span className="name-span">
                {isLoggedIn ? { username } : "Log In"}
              </span>
            </button>
          </Link>

          {/* <Link to="/wishlist" className="count">
              <button className="action-btn">
                <FontAwesomeIcon icon={faHeart} />0
              </button>
            </Link>//

          <Link to="/cart" className="count action-btn">
            <button>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="cart-icon-css"> 0</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Head;*/
}
