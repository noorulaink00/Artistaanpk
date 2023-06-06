import React from "react";
import "./FeaturedProducts.css";
import { TrendingItems } from "../data/product";
import { useState } from "react";
import ReactStars from "react-stars";

import { Container, Row, Col } from "react-bootstrap";

const FeaturedProducts = () => {
  const [Products, setProductType] = useState(TrendingItems);
  const filter = (type) => {
    setProductType(TrendingItems.filter((product) => product.type === type));
  };
  return (
    <>
      {/*  Starter Code
      <div className="color">
        <div className="container2 product-container">
          <h5 className="tittle">Featured Products</h5>

          <div className="border1"></div>
          <div className="products">
            <ul className="menu-product">
              <li onClick={() => setProductType(TrendingItems)}>All</li>
              <li onClick={() => filter("textile")}>Textile</li>
              <li onClick={() => filter("stationary")}> Stationary</li>
              <li onClick={() => filter("sell")}>PreUsed</li>
            </ul>
            <div className="list">
              {Products.map((product, i) => (
                <div className="product">
                  <div className="product-image">
                    <img src={product.img} alt="" />
                  </div>
                  <div className="details">
                    <span className="vendor">{product.vendor}</span>
                    <h5 className="name">{product.name}</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      edit={false}
                      value={product.rating}
                      activeColor="#ffd700"
                    />
                    <h5 className="price">Rs {product.Price}</h5>

                    <a href="#" className="product-cart">
                      <i class="fa-solid fa-cart-shopping"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
              */}

      <div className="color">
        <Container fluid className="container2">
          <h5 className="tittle">Featured Products</h5>
          <hr className="border1" />
          <Row className="products">
            <div className="product-menu col-md-3 col-lg-2 col-sm-12">
              <ul>
                <li onClick={() => setProductType(TrendingItems)}>All</li>
                <li onClick={() => filter("textile")}>Textile</li>
                <li onClick={() => filter("stationary")}>Stationary</li>
                <li onClick={() => filter("sell")}>PreUsed</li>
              </ul>
            </div>
            <div className="list col-md-8 col-lg-9 col-sm-12">
              {Products.map((product, i) => (
                <div className="product" key={i}>
                  <div className="product-image">
                    <img src={product.img} alt="" />
                  </div>
                  <div className="details">
                    <span className="vendor">{product.vendor}</span>
                    <h5 className="name">{product.name}</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      edit={false}
                      value={product.rating}
                      activeColor="#ffd700"
                    />
                    <h5 className="price">Rs {product.Price}</h5>
                    <a href="#" className="product-cart">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FeaturedProducts;
