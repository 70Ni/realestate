import React from "react";
import Counties from "./CountryCard/Counties";
import "./ConntrySec.css";
import america from "../../Images/BannerImage.png";
import france from "../../Images/France.png";
import spain from "../../Images/Spain.png";
import london from "../../Images/London.png";
function CountrySection() {
  return (
    <div className="countries-wrapper">
      <div className="Header countHeader">
        We are available in many well-known countries
      </div>
      <div className="countries-section">
        <Counties text="AMERICA" img ={america} />
        <Counties text="SPAIN"  img ={spain}/>
        <Counties text="LONDON"  img ={london}/>
        <Counties text="FRANCE" img ={france} />
      </div>
    </div>
  );
}

export default CountrySection;
