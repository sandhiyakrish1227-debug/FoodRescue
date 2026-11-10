import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../3.Styles/Navbar.scss";

const Navbar = () => {

  const navigate = useNavigate();

  // Re-render when the route changes
  useLocation();

  // Get logged-in user
  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser") || "null"
  );

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");

    alert("Logged out successfully!");

    navigate("/login");
  };

  return (
    <nav className="navbar">

      <div className="logo">
        <h2>FoodRescue</h2>
      </div>

      <div className="nav-links">

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/foodlist">Food List</Link>
        <Link to="/addfood">Donate Food</Link>
        {loggedInUser && (
  <>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/mydonations">My Donations</Link>
  </>
)}

        {loggedInUser ? (

          <button onClick={handleLogout}>
            Logout
          </button>

        ) : (

          <>
            <Link to="/login">Login</Link>

            <Link to="/register" className="register-btn">
              Register
            </Link>
          </>

        )}

      </div>

    </nav>
  );
};

export default Navbar;