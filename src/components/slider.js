import React, { useState } from "react";

import { SliderData } from "./sliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  console.log(current);

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="slider-arrowLeft" onClick={prevSlide} />
      <FaArrowAltCircleRight
        className="slider-arrowRight"
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => (
        <div
          className={index === current ? "slide active" : "slide "}
          key={index}
        >
          {index === current && (
            <img
              src={slide.image}
              key={slide.id}
              alt="billede"
              className="slider-img"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
