import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import { Mailto } from '../common/Mailto';
import emailLogo from '../../assets/images/icons/email.svg';
import hamburgerMenueMobile from '../../assets/images/icons/hamburger-menu.svg';
import downloadIcon from '../../assets/images/icons/downloads-white.svg';
import './style.scss';

// Ideally, this should be imported from a constants file or assets map
const resumePath = require('../../assets/files/anurag-profile.pdf');

export const Navbar = ({ email }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="d-flex py-3" id="navbar-head">
      <div className="container d-flex navbar-wrap">
        <div className="header-left d-flex">
          <Mailto email={email} subject="Subject Here" body="Hi, Anurag...">
            <img src={emailLogo} alt="Email" />
            <span>{email}</span>
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
          <span
            onClick={handleShow}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleShow()}
          >
            <img src={hamburgerMenueMobile} alt="Menu" />
          </span>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className="modal-custom-style">
        <Modal.Header closeButton>
          <Modal.Title>Anurag Singh</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="about-nav">
            <a href="#about-section" onClick={handleClose}>
              <span>About</span>
            </a>
          </div>
          <div className="service-nav">
            <a href="#skills" onClick={handleClose}>
              <span>Skills</span>
            </a>
          </div>
          <div className="portfolio-nav">
            <a href="#portfolio-section" onClick={handleClose}>
              <span>Portfolio</span>
            </a>
          </div>
          <div className="service-nav">
            <a href="#services" onClick={handleClose}>
              <span>Services</span>
            </a>
          </div>
          <div className="contact-nav">
            <a href="#footer-head" onClick={handleClose}>
              <span>Contact</span>
            </a>
          </div>
          <hr />
          <a href={resumePath} download="resume-anurag" className="download-cv-btn-a">
            <button className="download-cv-btn">
              <img src={downloadIcon} alt="Download" />
              Download CV
            </button>
          </a>
        </Modal.Body>
      </Modal>
    </section>
  );
};

Navbar.propTypes = {
  email: PropTypes.string.isRequired,
};
