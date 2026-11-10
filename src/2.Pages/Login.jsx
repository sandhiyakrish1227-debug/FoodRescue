
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../3.Styles/Login.scss";

const Login = () => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Get registered users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check registered email and password
    const user = users.find(
      (item) =>
        item.email === form.email &&
        item.password === form.password
    );

    if (user) {

      alert("Login Successful!");

      // Save logged-in user
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
      );

      navigate("/dashboard");

    } else {

      alert("Invalid Email or Password!");

    }
  }

  return (
    <div className="login">

      <div className="login-box">

        <h1>Welcome Back!</h1>

        <p>Login to FoodRescue</p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </div>

    </div>
  );
};

export default Login;
