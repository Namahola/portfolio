import React from "react";
import Slider from "./slider";
import SliderData from "./sliderData.js";

function Home() {
  return (
    <section className="home">
      <h2 className="home-heading">Freelance web developer</h2>
      <Slider slides={SliderData} />
    </section>
  );
}

export default Home;
