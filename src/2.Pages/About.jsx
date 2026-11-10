import React from "react";
import "../3.Styles/About.scss";

const About = () => {
  return (
    <div className="about">

      <section className="about-header">
        <h1>About FoodRescue</h1>
        <p>Sharing Food, Caring People, Saving the Planet.</p>
      </section>

      <section className="about-content">

        <h2>Who We Are</h2>

        <p>
          FoodRescue is a food donation platform designed to
          connect food donors with people in need. Our platform
          helps reduce food waste by allowing users to share
          surplus food with their communities.
        </p>

      </section>

      <section className="mission-vision">

        <div className="about-card">
          <h2>🎯 Our Mission</h2>
          <p>
            Our mission is to reduce food waste and make
            surplus food accessible to people who need it.
          </p>
        </div>

        <div className="about-card">
          <h2>🌍 Our Vision</h2>
          <p>
            Our vision is to create a hunger-free society
            where food is shared and nobody goes hungry.
          </p>
        </div>

      </section>

      <section className="objectives">

        <h2>Our Objectives</h2>

        <ul>
          <li>Reduce food wastage.</li>
          <li>Encourage food donation.</li>
          <li>Connect food donors with needy people.</li>
          <li>Promote community support.</li>
          <li>Build a sustainable environment.</li>
        </ul>

      </section>

    </div>
  );
};

export default About;