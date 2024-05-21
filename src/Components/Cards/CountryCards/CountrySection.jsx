import React from "react";
import Counties from "./CountryCard/Counties";
import "./ConntrySec.css";

function CountrySection() {
  return (
    <div className="countries-wrapper">
      <div className="Header countHeader">
        We are available in many well-known countries
      </div>
      <div className="countries-section">
        <Counties text="AMERICA" />
        <Counties text="SPAIN" />
        <Counties text="LONDON" />
        <Counties text="FRANCE" />
      </div>
    </div>
  );
}

export default CountrySection;
