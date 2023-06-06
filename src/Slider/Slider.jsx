import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Slider.css";

import { SliderProducts } from "../data/product";
import { Navigation, Pagination } from "swiper";

import { Container, Card, Button } from "react-bootstrap";

const Slider = () => {
  return (
    <>
      {/* Starter Code
      <div className="s-container">
        <span className="tittle">Shop Collections</span>
        <div className="container d_grid">
          <hr className="border" />
        </div>
        <Swiper
          modules={[Pagination, Navigation]}
          className="myswiper"
          navigation={true}
          loopFillGroupWithBlank={true}
          slidesPerView={4}
          spaceBetween={20}
          slidesPerGroup={1}
          loop={true}
        >
          {SliderProducts.map((slide, i) => (
            <SwiperSlide>
              <div className="slide-image">
                <img src={slide.img} alt="" />
              </div>
              <button>View All</button>
              <h5 className="name">{slide.name}</h5>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}

      <div className="s-container">
        <span className="tittle">Shop Collections</span>
        <div className="container d_grid">
          <hr className="border" />
        </div>
        <Swiper
          modules={[Pagination, Navigation]}
          className="myswiper"
          navigation={true}
          loopFillGroupWithBlank={true}
          slidesPerView={4}
          spaceBetween={20}
          slidesPerGroup={1}
          loop={true}
        >
          {SliderProducts.map((slide, i) => (
            <SwiperSlide key={i}>
              <Card className="slide-card">
                <Card.Img
                  variant="top"
                  src={slide.img}
                  className="card-image"
                />
                <Card.Body>
                  <Card.Title>{slide.name}</Card.Title>
                  <Button variant="primary">View All</Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
