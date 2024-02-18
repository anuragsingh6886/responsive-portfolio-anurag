import React from "react";
import codelogo from "../assets/images/icons/front-end.svg";
import uilogo from "../assets/images/icons/ui-ux.svg";

export function Services() {
  return (
    <section className="container px-3 py-4 d-flex" id="services">
      <div className="services-left">
        <div className="serivce-tab">
          <img src={uilogo} alt="" />
          <div className="serivce-tab-detail d-flex">
            <span>UI/UX Design</span>
            <span>Design a Website or App with Figma</span>
          </div>
        </div>
        <div className="serivce-tab">
          <img src={codelogo} alt="" />
          <div className="serivce-tab-detail d-flex">
            <span>Front-End Develop</span>
            <span>Coding front-end with Bootstrap, SASS/SCSS, React JS</span>
          </div>
        </div>
        <div className="serivce-tab">
          <img src={codelogo} alt="" />
          <div className="serivce-tab-detail d-flex">
            <span>Back-End Develop</span>
            <span>Coding back-end with JavaScript, Node JS</span>
          </div>
        </div>
      </div>
      <div className="services-right">
        <p className="head-text">Services</p>
        <h3 className="main-heading-text">My Awesome Service</h3>
        <p className="detail-text">
          As a dedicated UI designer and web developer, I offer a range of
          services that elevate your online presence. I am passionate about
          development and possess strong debugging and problem-solving
          abilities. Additionally, I have knowledge of developing standardized
          methodologies, techniques, and tools.
        </p>
        <div className="special-service d-flex">
          <div className="special-service-tab">
            <span>5+</span>
            <span>Project completed</span>
          </div>
          <div className="special-service-tab">
            <span>1.5+</span>
            <span>Year experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
