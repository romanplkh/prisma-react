import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <a
        href="https://github.com/romanplkh/prisma-react"
        target="_blank"
        rel="noopener"
        rel="noreferrer"
        className="link"
      >
        GitHub <i className="fa fa-github"></i>
      </a>
    </nav>
  );
};

export default Navbar;
