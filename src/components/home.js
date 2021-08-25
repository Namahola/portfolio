import React from "react";
import Footer from "./footer";
import Slider from "./slider";
import SliderData from "./sliderData.js";

function Home() {
  return (
    <div className="home">
      <div className="cover">
        <h2 className="cover-heading">Freelance web developer</h2>
        <Slider slides={SliderData} />
      </div>
      <section className="home-section1">
        <h3 className="home-section1-heading">About me</h3>
        <p className="home-section1-text">
          Freelance webdeveloper and webdeveloper student. I have experience
          with both design for web and coding. I am working with SCSS,
          Javascript, React, Indesign, Adobe XD, Photoshop etc. Since I am still
          studying, I am using the newest technologies, and I am learning how to
          design and code a modern webpage.
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
