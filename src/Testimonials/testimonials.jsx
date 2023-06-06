import React from "react";
import "./testimonials.css";
import { TestimonialData } from "../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Navigation, Pagination } from "swiper";

const testimonials = () => {
  return (
    <div className="testimonials">
      <div className="tittle">Testimonials</div>
      <hr className="border" />
      <div className="wrapper"></div>

      <div className="carousel">
        <Swiper
          modules={[Pagination, Navigation]}
          className="t-carousel"
          pagination={true}
          loopFillGroupWithBlank={true}
          slidesPerView={3}
          spaceBetween={20}
          slidesPerGroup={1}
          loop={true}
        >
          {TestimonialData.map((testimonial, i) => (
            <SwiperSlide>
              <div className="testimonial">
                <img src={testimonial.image} alt="" />
                <span>{testimonial.content}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default testimonials;
