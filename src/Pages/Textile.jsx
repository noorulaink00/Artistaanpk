import React from "react";

import Meta from "../CommonComponents/Meta";
import NavBar from "../common/header/Header";
import Footer from "../footer/footer";
import Products from "../ProductsDisplay/products";
import CategoryBar from "../Category/CategoryBar";
import MainPage from "./MainPage/MainPage";

const Textile = () => {
  return (
    <>
      <MainPage>
        <Meta title={"Textile"} />

        <CategoryBar title="Textile" />
        <Products />
      </MainPage>
    </>
  );
};

export default Textile;
