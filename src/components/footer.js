import React from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from "@reach/router";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <ul className="footer-contact">
          <li className="footer-contact-item">Contact</li>
          <li className="footer-contact-item">Nanna Laursen</li>
          <li className="footer-contact-item">
            E-mail: nannalaursen@gmail.com
          </li>
          <li className="footer-contact-item">Phone: +4528515736</li>
        </ul>
        <div className="footer-social">
          <a
            target="_blank\"
            href="https://www.linkedin.com/in/nanna-maria-laursen/"
          >
            <TiSocialLinkedin />
          </a>
        </div>
        <ul className="footer-menu">
          <li className="footer-menu-item">
            <Link to="/" className="footer-menu-item-link">
              Home
            </Link>
          </li>
          <li className="footer-menu-item">
            <Link to="/work" className="footer-menu-item-link">
              Work
            </Link>
          </li>
          <li className="footer-menu-item">
            <Link to="/about" className="footer-menu-item-link">
              About
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
