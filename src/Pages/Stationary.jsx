import React from "react";
import StationaryProduct from "../Stationary/StationaryProduct";
import NavBar from "../common/header/Header";
import Footer from "../footer/footer";
import Products from "../ProductsDisplay/products";
import CategoryBar from "../Category/CategoryBar";
import Meta from "../CommonComponents/Meta";
import MainPage from "./MainPage/MainPage";
const Stationary = () => {
  return (
    <>
      <Meta title={"Stationary"} />
      <MainPage>
        {/* <CategoryBar title="Stationary" />*/}
        <Products />
        <StationaryProduct />
      </MainPage>
    </>
  );
};

export default Stationary;

// Retrieve seller registration data from "sellerForm" collection in admin panel
