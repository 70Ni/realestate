import React from 'react'
import '../CountryCard/Countries.css'
import America from "../../../Images/BannerImage.png";
import France from "../../../Images/France.png";
import spain from "../../../Images/Spain.png";
import london from "../../../Images/London.png";

function Counties({text,img}) {
  return (  
    <div className="country-card-wrapper"
    style={{ backgroundImage: `url(${img})` }}>
        <div className="country-name subHeader">{text}</div>
    </div>
  )
}   

export default Counties