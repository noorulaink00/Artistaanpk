import React from "react";
import { category } from "../data/category";
import { useState } from "react";
import "./StationaryProduct.css";
import ReactStars from "react-stars";

const StationaryProduct = () => {
  const [Products, setProductType] = useState(category);
  const filter = (category) => {
    setProductType(
      category.filter((products) => products.category === category)
    );
  };
  return (
    <div className="product-page">
      {" "}
      <div className="products">
        <ul className="menu-product">
          <li onClick={() => setProductType(category)}>All</li>
          <li onClick={() => filter("textile")}>Textile</li>
          <li onClick={() => filter("Stationary")}> Stationary</li>
          <li onClick={() => filter("sell")}>PreUsed</li>
        </ul>
        <div className="list">
          {Products.map((products, i) => (
            <div className="product">
              <div className="product-image">
                <img src={products.image} alt="" />
              </div>
              <div className="details">
                <span className="vendor">{products.vendor}</span>
                <h5 className="name">{products.name}</h5>
                <ReactStars
                  count={5}
                  size={24}
                  edit={false}
                  value={products.rating}
                  activeColor="#ffd700"
                />
                <h5 className="price">Rs {products.price}</h5>
                <a href="#" className="product-cart">
                  <i class="fa-solid fa-cart-shopping"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StationaryProduct;
