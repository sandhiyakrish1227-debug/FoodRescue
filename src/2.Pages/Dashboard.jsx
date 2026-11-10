import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import "../3.Styles/Dashboard.scss";

const Dashboard = () => {

  const navigate = useNavigate();

  // Get logged-in user
  const user = JSON.parse(
    localStorage.getItem("loggedInUser") || "null"
  );

  // Protect Dashboard
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Get registered users
  const users = JSON.parse(
    localStorage.getItem("users") || "[]"
  );

  // Get all food items
  const allFoodItems = JSON.parse(
    localStorage.getItem("foodItems") || "[]"
  );

  // Get only logged-in user's donations
  const foodItems = allFoodItems.filter(
    (item) =>
      item.donorEmail?.toLowerCase() === user.email?.toLowerCase()
  );

  // Dashboard Statistics
  const totalUsers = users.length;

  const totalFood = foodItems.length;

  const availableFood = foodItems.filter(
    (item) => item.status !== "Donated"
  ).length;

  const donatedFood = foodItems.filter(
    (item) => item.status === "Donated"
  ).length;

  // Logout
  const handleLogout = () => {

    localStorage.removeItem("loggedInUser");

    alert("Logged out successfully!");

    navigate("/login");
  };

  return (

    <div className="dashboard">

      <h1>Welcome to FoodRescue!</h1>

      <p>Hello, {user.name}</p>

      <h2>Dashboard Overview</h2>

      <div className="dashboard-cards">

        {/* Total Users */}

        <div className="card">
          <h3>Total Users</h3>
          <h1>{totalUsers}</h1>
        </div>

        {/* My Donations */}

        <div className="card">
          <h3>My Total Donations</h3>
          <h1>{totalFood}</h1>
        </div>

        {/* Available Food */}

        <div className="card">
          <h3>Available Food</h3>
          <h1>{availableFood}</h1>
        </div>

        {/* Donated Food */}

        <div className="card">
          <h3>Donated Food</h3>
          <h1>{donatedFood}</h1>
        </div>

      </div>

      <button onClick={handleLogout}>
        Logout
      </button>

    </div>

  );
};

export default Dashboard;