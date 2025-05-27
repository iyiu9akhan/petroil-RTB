// import React from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Container from "../layout/Container";
// import { initFlowbite } from "flowbite";
import slider_one from "../../assets/slider/slider_one.png";
import slider_two from "../../assets/slider/slider_two.png";
import slider_three from "../../assets/slider/slider_three.png";
import slider_four from "../../assets/slider/slider_four.png";
import slider_five from "../../assets/slider/slider_two.png";

function SliderImg() {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="overflow-hidden mb-[28px]">
      <Slider {...settings}>
        <div className="px-[10px]">
          <img src={slider_one} alt="#" />
        </div>
        <div className="px-[10px]"> 
          <img src={slider_two} alt="#" />
        </div>
        <div className="px-[10px]">
          <img src={slider_three} alt="#" />
        </div>
        <div className="px-[10px]">
          <img src={slider_four} alt="#" />
        </div>
        <div className="px-[10px]">
          <img src={slider_one} alt="#" />
        </div>
        <div className="px-[10px]">
          <img src={slider_five} alt="#" />
        </div>
        <div className="px-[10px]">
          <img src={slider_three} alt="#" />
        </div>
      </Slider>
    </div>
  );
}

export default SliderImg;
