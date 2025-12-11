import React from 'react';
import profileImg from '../../assets/images/profile/profile.jpg';
import downloadIcon from '../../assets/images/icons/download.svg';
import './style.scss';

const resumePath = require('../../assets/files/anurag-profile.pdf');

export const AboutMe = () => {
  const handleHireMeClick = () => {
    const url = 'https://www.linkedin.com/in/anuragsingh6886/';
    window.open(url, '_blank');
  };

  return (
    <section className="container d-flex px-3 py-4" id="about-section">
      <div className="about-top d-flex mt-2">
        <img src={profileImg} alt="Anurag Singh" />
        <span className="greet-text">Hi, I’m Anurag Singh.✌🏻</span>
        <h4 className="about-heading">I build things for the Web.</h4>
        <span className="description-text">
          I am a Software Engineer with 2+ years of experience, working as a SFCC Developer at{' '}
          <b>Cloud Odyssey</b>. I Have proven experience in managing and developing projects for
          cross-platform e-commerce websites.
        </span>
      </div>
      <div className="about-action-btns d-flex">
        <button className="hire-me-btn" onClick={handleHireMeClick}>
          Hire Me
        </button>
        <a href={resumePath} download="resume-anurag" className="download-cv-btn">
          Download CV <img className="download-cv" src={downloadIcon} alt="Download" />
        </a>
      </div>
    </section>
  );
};
