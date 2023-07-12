import React from "react";
import logo from "../assets/images/logo.png";
import { FiMenu } from "react-icons/fi";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="menu-container">
        <FiMenu className="menu-icon" />
      </div>
    </div>
  );
};

export default Header;
