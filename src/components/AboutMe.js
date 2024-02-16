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
        <span className="greet-text">Hi, I’m Anurag✌🏻</span>
        <h4 className="about-heading">Website design & maintain Developer.</h4>
        <span className="description-text">a junior UI and Web Designer. I specialize in UI design, responsive web design and visual development.</span>
      </div>
      <div className="about-action-btns d-flex">
        <button className="hire-me-btn" onClick={raiseInvoiceClicked}>Hire Me</button>
        <a href={require("../assets/files/anurag-profile.pdf")} download="resume-anurag" className="download-cv-btn">Download CV <img className="download-cv" src={download} alt="" /></a>
      </div>
    </section>
  );
}
