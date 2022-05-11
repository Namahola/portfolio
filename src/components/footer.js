import React from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from "@reach/router";
import pdf from "../CV_DANSK (2).pdf";

function Footer() {
  return (
    <div>
      <footer id="footer" className="footer">
        <ul className="footer-contact">
          <li className="footer-contact-item">Kontakt</li>
          <li className="footer-contact-item">Nanna Laursen</li>
          <li className="footer-contact-item">
            E-mail:
            <a href="mailto:nannalaursen@gmail.com"> nannalaursen@gmail.com</a>
          </li>
          <li className="footer-contact-item">Telefon: 28515736</li>
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
              Hjem
            </Link>
          </li>
          <li className="footer-menu-item">
            <Link to="/work" className="footer-menu-item-link">
              Projekter
            </Link>
          </li>
          <li className="footer-menu-item">
            <a
              href={pdf}
              target="_blank"
              rel="noreferrer"
              className="footer-menu-item-link"
            >
              CV
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
