import React from "react";
import { Link } from "@reach/router";
// import Home from "./home";
// import About from "./about";

function Nav() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <Link to="/home" className="logo-link">
            <h1 className="logo-heading">nannalaursen</h1>
          </Link>
        </div>
        <nav className="nav">
          <div className="nav-box">
            <Link to="/" className="nav-box-link">
              Home
            </Link>
          </div>
          <div className="nav-box">
            <Link to="/work" className="nav-box-link">
              Work
            </Link>
          </div>
          <div className="nav-box">
            <Link to="/about" className="nav-box-link">
              About
            </Link>
          </div>
          <div className="nav-box">
            <Link to="/about" className="nav-box-link">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
