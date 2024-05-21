import React from "react";
import Property from "../PropertyCards/Property";
import "./propertysec.css";

function PropertySection() {
  return (
    <div className="property-section-wraper">
      <div className="property-sec-container">
        <Property />
        <Property />
        <Property />
        <Property />
      </div>
    </div>
  );
}

export default PropertySection;
