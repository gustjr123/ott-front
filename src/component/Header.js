import React from "react";
import { FiMenu } from "react-icons/fi";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="menu-container">
        <FiMenu className="menu-icon" />
      </div>
    </div>
  );
};

export default Header;
