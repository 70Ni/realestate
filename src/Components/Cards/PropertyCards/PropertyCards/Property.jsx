import React from "react";
import './property.css'
import Img from '../../../Images/BannerImage.png'


function Property() {
  return (
    <div className="Property-card">
      <div className="property-image">
        <img src={Img} alt="" className="propImg" />
      </div>
      <div className="property-content-wrpr">
        <div className="property-Header cardheader">103/143 West Street, Crows Nest</div>
        <div className="property-content">
          <div className="property-tag cardtext">10 Bedroom</div>
          <div className="property-tag cardtext">150 M</div>
          <div className="property-tag cardtext">2 Garage</div>
        </div>
        <div className="property-Hold-details">
          <div className="postDetwrpr">
            <div className="posted-by cardtext">Posted By</div>
            <div className="postee-name cardtext">Builder</div>
          </div>
          <div className="pricing cardtext">$45,545</div>
        </div>
      </div>
    </div>
  );
}

export default Property;
