import React from "react";
import { slide as Menu } from "react-burger-menu";
import pdf from "../CV_DANSK (2).pdf";

const Burger = (props) => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Hjem
      </a>

      <a className="menu-item" href="/work">
        Projekter
      </a>

      <a className="menu-item" href={pdf} target="_blank" rel="noreferrer">
        CV
      </a>

      <a className="menu-item" href="/#footer">
        Kontakt
      </a>
    </Menu>
  );
};

export default Burger;
