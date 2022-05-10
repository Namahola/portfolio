import React, { useLayoutEffect } from "react";
import Footer from "./footer";
// import Gallery from "./Gallery";
import Slider from "./slider";
import SliderData from "./sliderData.js";

function Home() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
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
        {/* <Gallery /> */}
      </section>

      <Footer />
    </div>
  );
}

export default Home;
