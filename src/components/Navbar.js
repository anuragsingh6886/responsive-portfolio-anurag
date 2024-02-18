import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import emailLogo from "../assets/images/icons/email.svg";
import hamburgerMenueMobile from "../assets/images/icons/hamburger-menu.svg";

export function Navbar(props) {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="d-flex py-3" id="navbar-head">
      <div className="container d-flex navbar-wrap">
        <div className="header-left d-flex">
          <Mailto
            email={props.email}
            subject="Subject Here"
            body="Hi, Anurag..."
          >
            <img src={emailLogo} alt="" />
            <span>{props.email}</span>
          </Mailto>
        </div>
        <div className="header-right d-none d-md-flex">
          <div className="about-nav">
            <a href="#about-section">
              <span>About</span>
            </a>
          </div>
          <div className="service-nav">
            <a href="#skills">
              <span>Skills</span>
            </a>
          </div>
          <div className="portfolio-nav">
            <a href="#portfolio-section">
              <span>Portfolio</span>
            </a>
          </div>
          <div className="service-nav">
            <a href="#services">
              <span>Services</span>
            </a>
          </div>
          <div className="contact-nav">
            <a href="#footer-head">
              <span>Contact</span>
            </a>
          </div>
        </div>
        <div className="header-right-mobile d-md-none">
          <span onClick={handleShow}>
            <img src={hamburgerMenueMobile} alt="" />
          </span>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className="modal-custom-style">
        <Modal.Header closeButton >
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      </Modal>
    </section>
  );
}
