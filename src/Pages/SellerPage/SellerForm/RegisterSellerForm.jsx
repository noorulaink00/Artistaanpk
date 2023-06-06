import React from "react";
import "./RegisterSellerForm.css";
import Logo from "../../../common/Logo/logo";
const RegisterSellerForm = ({ image, children, color }) => {
  return (
    <>
      <div className="logo-row">
        <div className="logo">
          <Logo />
        </div>
      </div>
      <div className="seller-page">
        <div className="welcome-image">
          <img src={image} alt="Welcome" />
        </div>
        <div className="welcome-text text-left">
          <div className="scrollable-text">{children}</div>
        </div>
      </div>
      <div className="logo-row">
        <div className="logo">Footer</div>
      </div>

      {/* 
      <div className="logo-row">
        <div className="logo">
          <Logo />
        </div>
      </div>
      <div className="welcome-page">
        <div className="welcome-image">
          <img src={image} alt="Welcome" />
        </div>
        <div className="welcome-text centered-text">
          <h1>Welcome On Board!</h1>
          <p>Enjoy your journey with us.</p>
        </div>
      </div>*/}
    </>
  );
};

export default RegisterSellerForm;
{
  /*


<div className="welcome-page">
        <div className="logo-row">
          <div className="logo">
            <Logo />
          </div>
        </div>
          <div className="logo-overlay">
          <img src="path/to/your/logo.png" alt="Logo" />
        </div>
        <div className="content">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 image-column">
              <img src={image} alt="Artwork" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-column">
              <div className="centered-text">
                <h3>Welcome On Board</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      */
}
