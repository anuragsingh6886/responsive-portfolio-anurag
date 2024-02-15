import React from "react";
import emailLogo from "../assets/images/icons/email.svg";
import hamburgerMenueMobile from "../assets/images/icons/hamburger-menu.svg";
export function Navbar(props) {
  return (
    <section className="container d-flex py-3" id="navbar-head">
      <div className="header-left d-flex">
        <img src={emailLogo} alt="" />
        <span>{props.email}</span>
      </div>
      <div className="header-right d-none d-md-flex">
        <div className="about-nav">
          <a href="">
            <span>About</span>
          </a>
        </div>
        <div className="service-nav">
          <a href="">
            <span>Services</span>
          </a>
        </div>
        <div className="portfolio-nav">
          <a href="">
            <span>Portfolio</span>
          </a>
        </div>
        <div className="contact-nav">
          <a href="">
            <span>Contact</span>
          </a>
        </div>
      </div>
      <div className="header-right-mobile d-md-none">
        <img src={hamburgerMenueMobile} alt="" />
      </div>
    </section>
  );
}
