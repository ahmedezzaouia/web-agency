import React, { useState, useEffect } from "react";
import "./styles.scss";
const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  console.log("width", width);
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="navigation-area">
      <div className="brand-logo">
        <img style={{ width: "80%", height: "80%" }} src="./images/logo.png" alt="brand logo" />
      </div>
      <div className="primary-area">
        <div className="top-nav">
          <div className="info-container">
            <p>
              <span>
                <i class="fa-solid fa-phone"></i>
              </span>{" "}
              +1 888-452-1505
            </p>
            <p>
              <span>
                <i class="fa-solid fa-envelope"></i>
              </span>{" "}
              info@website.com
            </p>
          </div>
          <div className="follow-btns">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
        <div className="nav-menu">
          <ul className="menu-items">
            <li>Home</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <button className="btn-quote">Get a Quote</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
