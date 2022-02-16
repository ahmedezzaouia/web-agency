import React from "react";
import "./styles.scss";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <span>MARKETS & RESOURCES</span>
          <h1>We Take Care Your Business Growth</h1>
          <button className="btn-quote">Get a Quote</button>
        </div>
        <div className="hero-img">
          <img src="./images/hero2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
