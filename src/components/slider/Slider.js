import React from "react";
import Slider from "react-slick";
import { SliderImages } from "../images/Images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";

const HeaderSlider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <div className="container">
        <div className="slider-content overflow-x-hidden">
          <Slider {...settings}>
            <div className="slider-item">
              <img src={SliderImages[0]} alt="slider" />
            </div>
            <div className="slider-item">
              <img src={SliderImages[1]} alt="slider" />
            </div>
            <div className="slider-item">
              <img src={SliderImages[2]} alt="slider" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeaderSlider;
