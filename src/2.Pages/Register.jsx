
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../3.Styles/Register.scss";

const Register = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  // Handle input changes
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  // Handle registration
  function handleSubmit(e) {
    e.preventDefault();

    // Check password
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Get existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check duplicate email
    const existingUser = users.find(
      (user) => user.email === form.email
    );

    if (existingUser) {
      alert("Email already registered!");
      return;
    }

    // Create new user
    const newUser = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password
    };

    // Add user to array
    users.push(newUser);

    // Save users in LocalStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");

    // Clear form
    setForm({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: ""
    });
  }

  return (
    <div className="register">

      <div className="register-box">

        <h1>Create Account</h1>

        <p>Join the FoodRescue Community</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            title="Enter a valid 10-digit phone number"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Create password"
            value={form.password}
            onChange={handleChange}
            minLength="6"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
            minLength="6"
            required
          />

          <button type="submit">
            Register
          </button>

        </form>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </div>
  );
};

export default Register;
