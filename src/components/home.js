import React from "react";
import Footer from "./footer";
import Slider from "./slider";
import SliderData from "./sliderData.js";

function Home() {
  return (
    <div className="home">
      <section className="home-section1">
        <h1 className="home-section1-heading">Webdesign og webudvikling</h1>
        <p className="home-section1-text">
          Freelance webudvikler og webudviklerstuderende. Jeg har erfaring med
          både design og kode. Jeg arbejder blandt andet med WordPress,
          JavaScript, React, SCSS og Adobe pakken.
        </p>
        <span className="home-section1-btn1">
          <a href="/work"> </a>
        </span>
        <span className="home-section1-btn2">
          <a href="/#footer"> </a>
        </span>
      </section>
      <section className="home-section2">
        <h2 className="home-section2-heading">Projekter</h2>
        <Slider slides={SliderData} />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
