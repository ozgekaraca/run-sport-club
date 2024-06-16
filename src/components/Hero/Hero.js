import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h3>Discover the gym closest to you!</h3>
        <div className="search-bar">
          <input type="text" placeholder="Enter city or town" />
          <button type="button">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
