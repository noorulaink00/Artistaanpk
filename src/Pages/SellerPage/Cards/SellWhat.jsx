import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SellWhatData } from "../../../data/SellerPage/SellerPage";

function SellWhat() {
  return (
    <div>
      <Container className="my-5 mx-auto text-center what-can-you-sell">
        <h2 className="text-center mb-4">What can you sell on Artistaan ? </h2>
        <Row className="mb-4">
          {SellWhatData.map((item, id) => (
            <Col xs={6} sm={6} md={3} lg={3} key={id}>
              <Card className="w-100 h-100">
                <Card.Img
                  className="w-100 h-100"
                  variant="top"
                  src={item.image}
                />

                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Container className="my-4 text-center ">
          <h5
            className="mx-lg-6 my-5 "
            style={{ maxWidth: "calc(100% - 250px)", margin: "0 auto" }}
          >
            Artistaan is a marketplace where vendors and shoppers connect, sell
            and buy uniques art supplies. You can sell art related products and
            supplies and customized paintings on Artistaan.
          </h5>
        </Container>
      </Container>
    </div>
  );
}

export default SellWhat;
