import React from 'react'
import '../CountryCard/Countries.css'
import America from "../../../Images/BannerImage.png";

function Counties({text}) {
  return (  
    <div className="country-card-wrapper"
    style={{ backgroundImage: `url(${America})` }}>
        <div className="country-name subHeader">{text}</div>
    </div>
  )
}   

export default Counties