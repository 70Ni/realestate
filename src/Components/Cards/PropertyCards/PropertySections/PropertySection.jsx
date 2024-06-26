import React from "react";
import Property from "../PropertyCards/Property";
import "./propertysec.css";

function PropertySection() {
  return (
    <div className="property-section-wraper">
      <div className="property-Header-container">
        <div className="Header">Recently Added</div>
        <div className="cardtext">See more</div>
      </div>
      <div className="prop-content-flex">
        <div className="property-sec-container">
          <Property />
          <Property />
          <Property />
          <Property />
        </div>
      </div>
    </div>
  );
}

export default PropertySection;
