import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import * as RB from "react-bootstrap";

const Services = () => {
  const image =
    " https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  const email =
    "https://i.etsystatic.com/site-assets/sell-page/Sell_Page_Icon_Email2.svg";
  return (
    <div className="hello">
      <RB.Container className=" pt-5 pb-5">
        <div className="help-container">
          <h2 className="text-center mb-4">Get Help Whenever you need</h2>
          <Row>
            <Col md={8} className="order-md-2">
              <img src={image} alt="Helpful image" className="img-fluid" />
            </Col>
            <Col md={4} className="order-md-1">
              <p>Heading Para</p>
            </Col>
          </Row>
          <Row className="mt-5 hello-row">
            <Col md={6} className="text-center d-flex">
              <img src={email} alt="Helpful image" className="img-fluid mb-3" />
              <p className="mt-2 m-4">Hello 123</p>
            </Col>
            <Col md={6} className="text-center d-flex">
              <img src={image} alt="Helpful image" className="img-fluid mb-3" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non
                semper massa.
              </p>
            </Col>
          </Row>
        </div>
      </RB.Container>
    </div>
  );
};

export default Services;
