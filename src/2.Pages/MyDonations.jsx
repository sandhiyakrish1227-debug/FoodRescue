import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "../3.Styles/MyDonations.scss";

const MyDonations = () => {

  const user = JSON.parse(
    localStorage.getItem("loggedInUser") || "null"
  );

  const [myFood, setMyFood] = useState([]);

  useEffect(() => {

    if (user) {

      const foodItems =
        JSON.parse(localStorage.getItem("foodItems")) || [];

      const filteredFood = foodItems.filter(
        (item) => item.donorEmail === user.email
      );

      setMyFood(filteredFood);
    }

  }, []);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="my-donations">

      <h1>My Donations</h1>

      <p>Food items donated by me</p>

      <div className="donation-container">

        {myFood.length > 0 ? (

          myFood.map((item) => (

            <div className="donation-card" key={item.id}>

              <img src={item.image} alt={item.name} />

              <h2>{item.name}</h2>

              <p>Category: {item.category}</p>

              <p>Quantity: {item.quantity}</p>

              <p>Location: {item.location}</p>

              <p>Status: {item.status}</p>

              <p>{item.description}</p>

            </div>

          ))

        ) : (

          <h2>You haven't donated any food yet!</h2>

        )}

      </div>

    </div>
  );
};

export default MyDonations;