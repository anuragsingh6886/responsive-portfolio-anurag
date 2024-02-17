import React from "react";
import emailLogo from "../assets/images/icons/email.svg";
import hamburgerMenueMobile from "../assets/images/icons/hamburger-menu.svg";
export function Navbar(props) {

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <section className="container d-flex py-3" id="navbar-head">
      <div className="header-left d-flex">
        <Mailto email={props.email} subject="Subject Here" body="Hi, Anurag...">
          <img src={emailLogo} alt="" />
          <span>{props.email}</span>
        </Mailto>
      </div>
      <div className="header-right d-none d-md-flex">
        <div className="about-nav">
          <a href="#about">
            <span>About</span>
          </a>
        </div>
        <div className="service-nav">
          <a href="#services">
            <span>Services</span>
          </a>
        </div>
        <div className="portfolio-nav">
          <a href="#portfolio-section">
            <span>Portfolio</span>
          </a>
        </div>
        <div className="contact-nav">
          <a href="#footer-head">
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
