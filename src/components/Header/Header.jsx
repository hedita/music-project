import React from "react";
import "./Header.scss";
import "../../pages/Home/Home";

const Header = ({ title }) => {
  return <h1 className="main-title">{title}</h1>;
};

export default Header;
