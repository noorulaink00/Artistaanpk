import React from "react";
import MainPage from "./MainPage/MainPage";
import ImageBox from "../common/ImageBox";

import SellWhat from "./SellerPage/Cards/SellWhat";
import Faq from "./SellerPage/FAQ/faq";
import "../css/Sell.css";
import { Link } from "react-router-dom";
import Meta from "../CommonComponents/Meta";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Services from "../common/Services";
import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from "react";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import * as RB from "react-bootstrap";
const servicesDataSellerPage = [
  {
    id: 1,
    icon: "https://img.freepik.com/premium-vector/set-art-supplies-artistic-materials-collection_783634-12.jpg",
    title: "Sell Your Artwork",
    description:
      "Showcase and sell your artwork to a global audience of art enthusiasts and collectors.",
  },
  {
    id: 2,
    icon: "images/Services/promote-artwork.png",
    title: "Promote Your Artwork",
    description:
      "Leverage our marketing tools and strategies to increase the visibility and reach of your artwork.",
  },
  {
    id: 3,
    icon: "images/Services/secure.jpg",
    title: "Secure Transactions",
    description:
      "Enjoy secure transactions and prompt payments through our trusted payment system.",
  },
  {
    id: 4,
    icon: "images/Services/global-reach.png",
    title: "Global Reach",
    description:
      "Reach art lovers from around the world and expand your customer base.",
  },
  {
    id: 5,
    icon: "images/Services/expert-guidance.png",
    title: "Expert Guidance",
    description:
      "Get personalized advice and guidance from our experienced team to enhance your selling experience.",
  },
  {
    id: 6,
    icon: "images/Services/secure.jpg",
    title: "Dedicated Support",
    description:
      "Receive dedicated support and assistance throughout your selling journey.",
  },
];

const Sell = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <MainPage>
      <Meta title="Sell on Artistaan" />
      <ImageBox imgSource="https://i.etsystatic.com/site-assets/sell-page/Header+background+collage-min.png"></ImageBox>

      <div className="content">
        <div className="text d_flex">
          <h1>Art enthusiasts can't wait to see what you have in store</h1>
          {isLoggedIn ? (
            <Link to="/multistep">Get Started</Link>
          ) : (
            <Link to="/login">Get Started</Link>
          )}
        </div>
      </div>
      <div className="Sell">
        <h2>
          Join the creative marketplace for shoppers to purchase from creative
          entreprenuers like you
        </h2>
        <div className="start-selling">
          <div className="artshop-icon">
            <img src="images/artshop-icon.png" alt="" />
          </div>

          <div className="selling-today">
            <h4>Start selling today</h4>
            <button
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Click this button to create your shop on Artistaan"
            >
              Open Your Shop
            </button>
          </div>
        </div>
      </div>

      <SellWhat />

      <Services servicesData={servicesDataSellerPage} />

      <Faq />

      {/*Right Code   
      <h1 className="text-align-center">This is auto code </h1>
      <div className="container my-5">
        <div className="row">
          {faqData.map((item, index) => (
            <div className="col-md-6" key={index}>
              <h5 className="m-0 ">{item.question}</h5>
              <div className="d-flex align-items-center mb-4">
                <img src={image} alt="placeholder" className="mr-3 w-50 h-50" />
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    */}

      <Card>
        <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.{" "}
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </MainPage>
  );
};

export default Sell;
