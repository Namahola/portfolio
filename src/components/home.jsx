import React, { useLayoutEffect } from "react";
import Footer from "./footer";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";

function Home() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="home">
      <Nav />
      <section className="home-section1">
        <h1 className="home-section1-heading">Webdesign og webudvikling</h1>
        <p className="home-section1-text">
          Uddannet webudvikler. Jeg har erfaring med både design og kode. Jeg
          arbejder blandt andet med WordPress, JavaScript, React, SCSS og Adobe
          pakken. Se nogle af mine projekter herunder.
        </p>
        <span className="home-section1-btn1">
          <Link to="/work"> </Link>
        </span>
        <span className="home-section1-btn2">
          <a href="/#footer"> </a>
        </span>
      </section>
      <section className="home-section2">
        <h2 className="home-section2-heading">Projekter</h2>
        <Gallery />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
