import React from "react";
import "./footer.css";
import logo from "../Images/Logo.svg";
import insta from "../Images/Instagram - Original.svg";
import Linkdin from "../Images/LinkedIn - Original.svg";
import Twitter from "../Images/Twitter - Original.svg";
import face from "../Images/Facebook - Original.svg";
import Next from "../Images/Next.svg";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="about-company-wrappe">
        <img
          src={logo}
          alt=""
          style={{ height: "52px", marginBottom: "20px" }}
        />
        <div className="footerpara">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <div className="social-icons">
          <img src={face} alt="" className="socialIcon" />
          <img src={Twitter} alt="" className="socialIcon" />
          <img src={Linkdin} alt="" className="socialIcon" />
          <img src={insta} alt="" className="socialIcon" />
        </div>
        <div className="footerpara">© 2021 . All rights reserved.</div>
      </div>
      <div className="links-wrapper">
        <div className="take-tour-section">
          <div className="footerHeader">Take a tour</div>
          <div className="footertext">Feautes</div>
          <div className="footertext">Partners</div>
          <div className="footertext">Pricing</div>
          <div className="footertext">Product</div>
          <div className="footertext">Support</div>
        </div>
        <div className="ourcompany-section">
          <div className="footerHeader">Our Company</div>

          <div className="footertext">About Us</div>
          <div className="footertext">Agent</div>
          <div className="footertext">Blog</div>
          <div className="footertext">Media</div>
          <div className="footertext">Contact Us</div>
        </div>
        <div className="subscribe-section">
          <div className="footerHeader">Subscribe</div>

          <div className="footerpara">
            Subscribe to latest property, blog news from us
          </div>
          <div className="blog-input">
            <div className="inputcontainer">
              <input type="text" />
              <img src={Next} alt="" className="socialIcon" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="main">
        <div className="sub">1</div>
        <div className="sub">2</div>
        <div className="sub2">3</div>
        <div className="sub">4</div>
        <div className="sub">5</div>
        <div className="sub"></div>
      </div> */}
    </div>
  );
}

export default Footer;
