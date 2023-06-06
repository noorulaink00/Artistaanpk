import React from "react";
import MainSeller from "../MainSeller";
import ListProducts from "./ListProducts";
const sellerDashboard = () => {
  return (
    <div>
      <MainSeller>
        <ListProducts />
      </MainSeller>
    </div>
  );
};

export default sellerDashboard;
