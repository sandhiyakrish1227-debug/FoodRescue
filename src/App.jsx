import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./1.Components/Navbar";
import About from "./2.Pages/About";
import Home from "./2.Pages/Home";
import Contact from "./2.Pages/Contact";
import FoodList from "./2.Pages/Foodlist";
import AddFood from "./2.Pages/AddFood";
import Login from "./2.Pages/Login";
import Register from "./2.Pages/Register";
import Dashboard from "./2.Pages/Dashboard";
import MyDonations from "./2.Pages/MyDonations";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/foodlist" element={<FoodList />} />
        <Route path="/addfood" element={<AddFood />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mydonations" element={<MyDonations />} />
      </Routes>
    </>
  );
};

export default App;