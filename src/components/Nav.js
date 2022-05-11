import React from "react";
import { Link } from "@reach/router";
import { GiHamburgerMenu } from "react-icons/gi";
import pdf from "../CV_DANSK (2).pdf";

function Nav() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <Link to="/" className="logo-link">
            <h1 className="logo-heading">nannalaursen</h1>
          </Link>
        </div>
        <GiHamburgerMenu className="burger" />
        <nav className="nav">
          <div className="nav-box">
            <Link to="/" className="nav-box-link">
              Hjem
            </Link>
          </div>
          <div className="nav-box">
            <Link to="/work" className="nav-box-link">
              Projekter
            </Link>
          </div>
          <div className="nav-box">
            <a href={pdf} target="_blank" rel="noreferrer">
              CV
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
