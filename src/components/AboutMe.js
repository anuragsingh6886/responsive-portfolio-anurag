import React from "react";
import profileImg from '../assets/images/profile/profile.jpg';
import download from '../assets/images/icons/download.svg';

export function AboutMe() {

  function raiseInvoiceClicked () {
    const url = 'https://www.linkedin.com/in/anuragsingh6886/';
    window.open(url, '_blank');
  }

  return (
    <section className="container d-flex px-3 py-4" id="about-section">
      <div className="about-top d-flex mt-2">
        <img src={profileImg} alt=""></img>
        <span className="greet-text">Hi, I’m Anurag Singh.✌🏻</span>
        <h4 className="about-heading">I build things for the Web.</h4>
        <span className="description-text">I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, e-commerce, usre-centered websites/products at Cloud Odyssey.</span>
      </div>
      <div className="about-action-btns d-flex">
        <button className="hire-me-btn" onClick={raiseInvoiceClicked}>Hire Me</button>
        <a href={require("../assets/files/anurag-profile.pdf")} download="resume-anurag" className="download-cv-btn">Download CV <img className="download-cv" src={download} alt="" /></a>
      </div>
    </section>
  );
}
