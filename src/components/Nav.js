import React from "react";
import { Link } from "@reach/router";

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
              Hjem
            </Link>
          </div>
          <div className="nav-box">
            <Link to="/work" className="nav-box-link">
              Projekter
            </Link>
          </div>
          <div className="nav-box">
            <Link to="/about" className="nav-box-link">
              Om
            </Link>
          </div>
          <div className="nav-box">
            <Link to="/about" className="nav-box-link">
              Kontakt
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
