import React from "react";
import { slide as Menu } from "react-burger-menu";
import pdf from "../CV_DANSK (2).pdf";
import { Link } from "react-router-dom";

const Burger = (props) => {
  return (
    <Menu {...props}>
      <Link className="menu-item" to="/">
        Hjem
      </Link>

      <Link className="menu-item" to="/work">
        Projekter
      </Link>

      <Link className="menu-item" to={pdf} target="_blank" rel="noreferrer">
        CV
      </Link>

      <Link className="menu-item" to="/#footer">
        Kontakt
      </Link>
    </Menu>
  );
};

export default Burger;
