import React, { useState } from "react";
import "../3.Styles/Contact.scss";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Thank you for contacting FoodRescue!");

    setForm({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <div className="contact">

      <h1>Contact Us</h1>

      <p>We would love to hear from you!</p>

      <div className="contact-container">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>📧 Email: foodrescue@gmail.com</p>

          <p>📍 Location: Bengaluru, Karnataka</p>

          <p>❤️ Together, let's reduce food waste.</p>

        </div>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
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

          <textarea
            name="message"
            placeholder="Enter your message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
};

export default Contact;