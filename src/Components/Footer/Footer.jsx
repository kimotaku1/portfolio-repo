import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.svg";
import theme_pattern from "../../assets/theme_pattern.svg";
import { BiLogoLinkedin, BiLogoGithub, BiLogoInstagram } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <img src={theme_pattern} alt="" className="footer-theme" />
          <p>
            Let's connect and create something amazing together! When I’m not
            coding, I’m pushing boundaries in Mobile Legends: Bang Bang as a pro
            player. Feel free to reach out to collaborate on coding projects or
            chat about gaming strategies.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2024 Bibek Bhandari. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
      <div className="footer-social">
        <div>
          <BiLogoGithub size={30}/>
          <a
            href="https://github.com/kimotaku1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>github/kimotaku1</span>
          </a>
        </div>
        <div>
          <BiLogoInstagram size={30}/>
          <a
            href="https://www.instagram.com/yahallo.02/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>instagram/yahallo.02</span>
          </a>
        </div>
        <div>
          <BiLogoLinkedin size={30}/>
          <a
            href="https://www.linkedin.com/in/bibek-841246334/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>linkedin/bibek</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
