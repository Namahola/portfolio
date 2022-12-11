import React from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import pdf from "../CV_DANSK.pdf";

function Footer() {
  return (
    <div>
      <footer id="footer" className="footer">
        <ul className="footer-contact">
          <li className="footer-contact-item">Kontakt</li>
          <li className="footer-contact-item">Nanna Laursen</li>
          <li className="footer-contact-item">
            <a href="mailto:nannalaursen@gmail.com"> Send e-mail</a>
          </li>
        </ul>
        <div className="footer-social">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/nanna-maria-laursen/"
          >
            <TiSocialLinkedin />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Namahola"
          >
            <FaGithubSquare />
          </a>
        </div>
        <ul className="footer-menu">
          <li className="footer-menu-item">
            <Link to="/" className="footer-menu-item-link">
              Hjem
            </Link>
          </li>
          <li className="footer-menu-item">
            <Link to="/work" className="footer-menu-item-link">
              Projekter
            </Link>
          </li>
          <li className="footer-menu-item">
            <Link
              to={pdf}
              target="_blank"
              rel="noreferrer"
              className="footer-menu-item-link"
            >
              CV
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
