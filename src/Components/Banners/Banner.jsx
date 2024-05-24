import React from "react";
import "./Banner.css";
import Search from "../Search/Search";
import Accordion from "../Accordion/Accordion";
import Button from "../Button/Button";

function Banner({ backImg, action }) {
  return (
    <div className="banner">
      <div
        className="Banner-wrapper"
        style={{ backgroundImage: `url(${backImg})` }}
      >
        <div className="banner-content">
          <div className="Text-content">
            <div className="Header1">Easy way to find a perfect property</div>
            <div className="paragraph">
              We provide a complete service for the sale,
              <br />
              purchase or rental of real estate.
            </div>
          </div>
        </div>
        <div className="Action-wrapper">{action ==false ? <Search /> : <Button />}</div>
      </div>
    </div>
  );
}

export default Banner;
