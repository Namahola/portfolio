import React, { useState } from "react";
import { SliderData } from "./sliderData";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

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
      <FaArrowCircleLeft className="slider-arrowLeft" onClick={prevSlide} />
      <FaArrowCircleRight className="slider-arrowRight" onClick={nextSlide} />
      {SliderData.map((slide, index) => (
        <a
          href="/work"
          className={index === current ? "slide active" : "slide "}
          key={index}
        >
          {index === current && (
            <img
              src={slide.src}
              key={slide.id}
              alt="billede"
              className="slider-img"
            />
          )}
        </a>
      ))}
    </div>
  );
};

export default Slider;
