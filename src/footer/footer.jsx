import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer">
          <div className="About">
            <h3>About Artistan</h3>
            <ul>
              <li>
                <Link to="/mission">Our Mission</Link>
              </li>
              <li>
                <Link to="/career">Careers</Link>
              </li>
              <li>
                <Link to="about">About Artistan</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/gift">Gift cards</Link>
              </li>
            </ul>
          </div>

          <div className="service">
            <h3>Let Us Help You</h3>
            <ul>
              <li>
                <a href="#">Shipping and Returns</a>
              </li>
              <li>
                <a href="#">Store Policy</a>
              </li>
              <li>
                <a href="#">Payment Methods</a>
              </li>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Purchase History</a>
              </li>
            </ul>
          </div>

          <div className="connect">
            <h3>Lets Connect</h3>
            <ul>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>Twitter
                </a>
              </li>
            </ul>
          </div>

          <div className="newsletter">
            <h3>Sign Up To Our Newsletter</h3>
            <ul>
              <li>Email*</li>
              <li className="text">
                <input type="email" required />
              </li>
              <li className="submit">
                <input type="submit" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="connect-icon">
          <ul>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
        <p>&copy; 2022 All Right Reserved</p>
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use </a>
          </li>
          <li>
            <a href="#">CA - Do not sell my Personal Information</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default footer;
