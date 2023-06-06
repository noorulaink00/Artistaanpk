import React from "react";
import Header from "../../common/header/Header";
import Footer from "../../footer/footer";
import Meta from "../../CommonComponents/Meta";
const MainPage = ({ children }) => {
  return (
    <div className="main">
      <Header />
      <div className="children">
        <div>{children}</div>
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
