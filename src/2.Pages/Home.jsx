import React from "react";
import { Link } from "react-router-dom";
import "../3.Styles/Home.scss";

const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}

      <section className="hero">

        <div className="hero-content">

          <h1>
            Share Food, <span>Spread Happiness!</span>
          </h1>

          <p>
            Don't waste food. Share your extra food with people
            who need it. Together, let's build a hunger-free world.
          </p>

          <div className="hero-buttons">

            <Link to="/addfood" className="donate-btn">
              Donate Food
            </Link>

            <Link to="/foodlist" className="explore-btn">
              Explore Food
            </Link>

          </div>

        </div>

      </section>


      {/* About Section */}

      <section className="home-about">

        <h1>Welcome to FoodRescue</h1>

        <p>
          FoodRescue is a food donation platform that connects
          food donors with people in need. Our mission is to reduce
          food waste and make surplus food available to everyone.
        </p>

      </section>


      {/* How It Works */}

      <section className="how-it-works">

        <h1>How FoodRescue Works</h1>

        <div className="steps">

          <div className="step-card">
            <h2>🥗</h2>
            <h3>1. Donate Food</h3>
            <p>
              Add your extra food details through our donation form.
            </p>
          </div>

          <div className="step-card">
            <h2>🔍</h2>
            <h3>2. Find Food</h3>
            <p>
              Browse available food and find what you need.
            </p>
          </div>

          <div className="step-card">
            <h2>❤️</h2>
            <h3>3. Spread Happiness</h3>
            <p>
              Help reduce food waste and support your community.
            </p>
          </div>

        </div>

      </section>


      {/* Why Choose Us */}

      <section className="why-choose">

        <h1>Why Choose FoodRescue?</h1>

        <div className="features">

          <div>
            <h2>🌱</h2>
            <h3>Reduce Food Waste</h3>
            <p>Save surplus food instead of throwing it away.</p>
          </div>

          <div>
            <h2>🤝</h2>
            <h3>Help Others</h3>
            <p>Share food and support people in your community.</p>
          </div>

          <div>
            <h2>🌍</h2>
            <h3>Save Environment</h3>
            <p>Build a sustainable and hunger-free society.</p>
          </div>

        </div>

      </section>


      {/* Final CTA */}

      <section className="home-cta">

        <h1>Every Meal Matters!</h1>

        <p>
          Your small contribution can make a big difference.
        </p>

        <Link to="/addfood">
          Start Donating
        </Link>

      </section>

    </div>
  );
};

export default Home;