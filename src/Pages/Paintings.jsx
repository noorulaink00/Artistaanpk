import React from "react";
import Meta from "../CommonComponents/Meta";
import NavBar from "../common/header/Header";
import Footer from "../footer/footer";
import Products from "../ProductsDisplay/products";
import CategoryBar from "../Category/CategoryBar";

const Paintings = () => {
  return (
    <>
      <Meta title={"Painting"} />
      <NavBar />
      <CategoryBar title="Painting" />
      <Products />
      <Footer />
    </>
  );
};

export default Paintings;
