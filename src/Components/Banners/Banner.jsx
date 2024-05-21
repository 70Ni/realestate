import React from "react";
import "./Banner.css";

import BannerImg from "../Images/BannerImage.png";

function Banner() {
  return (
    <div
      className="Banner-wrapper"
      style={{ backgroundImage: `url(${BannerImg})` }}>
      <div className="Text-content">
        <div className="Header1">Easy way to find a perfect property</div>
        <div className="paragraph">
          We provide a complete service for the sale,
          <br />
          purchase or rental of real estate.
        </div>
      </div>
      <div className="Action-wrapper"></div>
    </div>
  );
}

export default Banner;
