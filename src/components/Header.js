import React from "react";
import { useUserContext } from "../contexts/UserContext"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { logout } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // This will clear the user context and local storage
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <header className="app-header">
      <h1 className="app-title">MediChronicle</h1>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </header>
  );
};

export default Header;
