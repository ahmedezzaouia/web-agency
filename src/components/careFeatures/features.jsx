import React from "react";
import "./styles.scss";

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature-image">
        <div className="image-container">
          <img src="https://webtend.net/demo/html/datapro/assets/img/about-us.jpg" alt="professional" />
        </div>
      </div>
      <div className="features-content">
        <div className="container">
          <span>CARE FEATURES</span>
          <h2>We Are A Professional Creative Agency</h2>
          <p className="featuur-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.
            Vivamus vel molestie nisi. Aliquam maximus maximus velit, id scelerisque urna elem
          </p>
          {/* item feature  */}
          <div className="feature-item">
            <div className="check-box">
              <i class="fa-solid fa-check"></i>
            </div>
            <div className="feature-item-content">
              <h5>Ligula molestie</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
          <div className="feature-item">
            <div className="check-box">
              <i class="fa-solid fa-check"></i>
            </div>
            <div className="feature-item-content">
              <h5>Ligula molestie</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
