import React from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/carousal1.jpg";
import img2 from "../../assets/images/crausal21.jpeg";
import img3 from "../../assets/images/carousal3.jpg";
import "./style.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div className="img-Carousel">
          <img src={img1} alt="Slide 1" />
          {/* <div className="carousel-text">Text for Slide 1</div> */}
        </div>
        <div className="img-Carousel">
          <img src={img2} alt="Slide 2" />
        </div>
        <div className="img-Carousel">
          <img src={img3} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
