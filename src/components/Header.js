import React from "react";
import "./Header.css"; // Make sure you have styling defined

const Header = ({ userName }) => {
  return (
    <header className="app-header">
      <h1 className="app-title">MediChronicle</h1>
      <span className="user-name">{userName}</span>
    </header>
  );
};

export default Header;
