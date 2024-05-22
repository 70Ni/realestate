import React, { useState } from "react";
import "./search.css";

import location from "../Images/Instagram - Original.svg";
import arrw from "../Images/ArrowDown.svg";
import searchbutton from "../Images/search button.svg";
import Accordion from "../Accordion/Accordion";

const properties = ["Apartment", "MultiFamily", "House", "Retail", "Land"];

function Search() {
  const [open, setopen] = useState(false);


  return (
    <div className="search-wrapper">
      <div className="Inputs-wraper">
        <div className="location-wraper">
          <div className="input-header footertext">Location</div>
          <div className="input-set">
            <input
              type="text"
              className="Navigationtext"
              id="searchInput"
              placeholder="Select your City"
            />
            <img src={location} alt="" s />
          </div>
        </div>
        <div className="Property-wraper" onClick={() => setopen(!open)}>
          <div className="input-header footertext">Property Type</div>
          <div className="input-set">
            <div className="footerpara">Choose property type</div>
            <img src={arrw} alt="" />
            {open ? (
              <Accordion
                items={properties}
              />
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="price-wraper">
          <div className="input-header footertext">Price Range</div>
          <div className="input-set">
            <input
              type="text"
              className="Navigationtext"
              id="searchInput"
              placeholder="Choose price range"
            />
            <img src="" alt="" />
          </div>
        </div>
        <div className="search-icon">
          <img src={searchbutton} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Search;
