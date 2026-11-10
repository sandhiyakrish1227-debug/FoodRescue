
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../3.Styles/AddFood.scss";

const AddFood = () => {

  const navigate = useNavigate();

  const [food, setFood] = useState({
    name: "",
    category: "",
    quantity: "",
    location: "",
    image: "",
    description: ""
  });

  // Handle input changes
  function handleChange(e) {
    setFood({
      ...food,
      [e.target.name]: e.target.value
    });
  }

  // Handle food donation
  function handleSubmit(e) {
    e.preventDefault();

    // Get logged-in user
    const user = JSON.parse(
      localStorage.getItem("loggedInUser") || "null"
    );

    // Check login
    if (!user) {
      alert("Please login before donating food!");
      navigate("/login");
      return;
    }

    // Get existing food items
    const oldFood = JSON.parse(
      localStorage.getItem("foodItems") || "[]"
    );

    // Create new food object
    const newFood = {
      ...food,
      id: Date.now(),

      donorName: user.name,
      donorEmail: user.email,
      donorPhone: user.phone,

      status: "Available"
    };

    // Save food details in localStorage
    localStorage.setItem(
      "foodItems",
      JSON.stringify([...oldFood, newFood])
    );

    alert("Food donated successfully!");

    // Navigate to Food List
    navigate("/foodlist");
  }

  return (
    <div className="addfood">

      <h1>Donate Food</h1>

      <p>Share your extra food with people in need.</p>

      <form onSubmit={handleSubmit}>

        {/* Food Name */}
        <input
          type="text"
          name="name"
          placeholder="Food Name"
          value={food.name}
          onChange={handleChange}
          required
        />

        {/* Category */}
        <select
          name="category"
          value={food.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Non-Vegetarian">Non-Vegetarian</option>
          <option value="Fruits">Fruits</option>
          <option value="Bakery">Bakery</option>
        </select>

        {/* Quantity */}
        <input
          type="text"
          name="quantity"
          placeholder="Quantity"
          value={food.quantity}
          onChange={handleChange}
          required
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={food.location}
          onChange={handleChange}
          required
        />

        {/* Image URL */}
        <input
          type="url"
          name="image"
          placeholder="Food Image URL"
          value={food.image}
          onChange={handleChange}
          required
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Food Description"
          value={food.description}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Donate Food
        </button>

      </form>

    </div>
  );
};

export default AddFood;
