import React from "react";
import Footer from "./footer";
import Slider from "./slider";
import SliderData from "./sliderData.js";

function Home() {
  return (
    <div className="home">
      <section className="home-section1">
        <h3 className="home-section1-heading">Om mig</h3>
        <p className="home-section1-text">
          Freelance webudvikler og webudviklerstuderende. Jeg har erfaring med
          både design og kode. Jeg arbejder blandt andet med WordPress,
          Javascript, React, SCSS og Adobe pakken.
        </p>
      </section>
      <div className="cover">
        <h2 className="cover-heading">Mit arbejde</h2>
        <Slider slides={SliderData} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
