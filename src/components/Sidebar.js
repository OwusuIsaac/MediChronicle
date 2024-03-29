import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"; // Ensure this is linked to the correct CSS file

const Sidebar = () => {
  return (
    <nav className="app-sidebar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active" end>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/doctors" activeClassName="active">
            Doctors
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/insurance" activeClassName="active">
            Insurance
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
