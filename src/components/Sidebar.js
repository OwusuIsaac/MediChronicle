import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"; // Ensure this is linked to the correct CSS file
import { useUserContext } from "../contexts/UserContext"; // Adjust the path as necessary

const Sidebar = () => {
  const { user } = useUserContext(); // Get the current user's role from context
  console.log("Sidebar user:", user); // Debug: what does 'user' contain?

  if (!user) {
    console.log("No user logged in");
    return null; // Or render some default not logged in sidebar
  }

  return (
    <nav className="app-sidebar">
      <ul className="nav-list">
        {/* Render common links that all users should see */}
        {user && user.role === "Patient" && (
          <>
            {/* Patient-specific links */}
            <li className="nav-item">
              <NavLink to="/home" activeClassName="active" end>
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
            <li className="nav-item">
              <NavLink to="/immunizations" activeClassName="active">
                Immunizations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/medications" activeClassName="active">
                Medications
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/consultations" activeClassName="active">
                Consultations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/account-settings" activeClassName="active">
                Account Settings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/radiology" activeClassName="active">
                Radiology
              </NavLink>
            </li>
          </>
        )}

        {user && user.role === "Doctor" && (
          <>
            {/* Doctor-specific links */}
            <li className="nav-item">
              <NavLink to="/Doctorhomepage" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/InputMedical" activeClassName="active">
                Add New Entry
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Sidebar;
