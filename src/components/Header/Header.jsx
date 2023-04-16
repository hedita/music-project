import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <Link className="main-title" to="/">
      <h1>Header</h1>
    </Link>
  );
};

export default Header;
