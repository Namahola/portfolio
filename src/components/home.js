import React from "react";
import { Link } from "@reach/router";
import Leonardo1 from "../img/Leonardo.PNG";
import Verdensende from "../img/Udklip.PNG";
import Vikingfood from "../img/vikingfood.PNG";

function Home() {
  return (
    <section className="home">
      <h2 className="home-heading">Freelance web developer</h2>
      <div className="home-wrapper">
        <div className="home-wrapper-box">
          <Link to="/home" className="home-wrapper-link">
            <img
              className="home-wrapper-img"
              src={Leonardo1}
              alt="Billede af projekt"
            />
          </Link>
        </div>
        <div className="home-wrapper-box">
          <Link to="/home" className="home-wrapper-link">
            <img
              className="home-wrapper-img"
              src={Verdensende}
              alt="Billede af projekt"
            />
          </Link>
        </div>
        <div className="home-wrapper-box">
          <Link to="/home" className="home-wrapper-link">
            <img
              className="home-wrapper-img"
              src={Vikingfood}
              alt="Billede af projekt"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
