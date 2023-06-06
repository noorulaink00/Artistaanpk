import React from "react";
import { faqData } from "../../../data/SellerPage/SellerPage";
import { faqData2 } from "../../../data/SellerPage/SellerPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button, Accordion } from "react-bootstrap";

const faq = () => {
  const image =
    "https://i0.wp.com/doodlewash.com/wp-content/uploads/2019/11/Day-5-Drawing-Pen-And-Ink-Watercolor-Supplies-Illustration.jpg?fit=1024%2C655&ssl=1";

  const imager =
    "data:image/png;base64,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";

  return (
    <div className="faq py-5 px-5">
      <Container className="my-8">
        <div className="pb-5">
          <h2 className="text-center mb-2">Frequently Asked Questions</h2>
          <h5 className="text-center ">
            Here are some common questions about selling on Artistaan{" "}
          </h5>
        </div>
        <Row>
          <Col className="col-lg-6 col-12">
            {faqData.map((item, index) => (
              <div>
                <h5 className="m-0 title">{item.question}</h5>
                <div className="d-flex align-items-center mb-4">
                  {/* <img
                  src={item.image}
                  alt="thisis"
                  className="mr-3 w-10 h-10 "
                />*/}
                  <p className="justify-content">{item.answer}</p>
                </div>
              </div>
            ))}
          </Col>
          <Col className="col-lg-6 col-12">
            {faqData2.map((item2, index) => (
              <div>
                <h5 className="m-0 title">{item2.question}</h5>
                <div className="d-flex align-items-center mb-4">
                  {/* <img
                  src={item.image}
                  alt="thisis"
                  className="mr-3 w-10 h-10 "
                />*/}
                  <p className="justify-content">{item2.answer}</p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default faq;
