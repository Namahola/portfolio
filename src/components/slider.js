import React, { useState } from "react";
import { SliderData } from "./sliderData";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useSwipeable } from "react-swipeable";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => prevSlide(),
    onSwipedRight: () => nextSlide(),
  });

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider" {...handlers}>
      <MdKeyboardArrowLeft className="slider-arrowLeft" onClick={prevSlide} />
      <MdKeyboardArrowRight className="slider-arrowRight" onClick={nextSlide} />
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
