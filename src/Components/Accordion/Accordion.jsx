import React, { useState } from "react";
import "./accordion.css";

const properties = ["Apartment", "MultiFamily", "House", "Retail", "Land"];

function Accordion({ items }) {
  return (
    <div className="accordion-wrapper">
      {properties.map((x) => (
        <div className="items Navigationtext">{x}</div>
      ))}
    </div>
  );
}

export default Accordion;
