import React from 'react';
import emailLogo from '../assets/images/icons/email.svg';

export function Navbar(props) {
  return (
    <section className="container">
      <div>
        <div className="header-left">
          <img src={emailLogo} alt=""/>
          <p>{props.email}</p>
        </div>
        <div className="header-right">
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
      </div>
    </section>
  );
}
