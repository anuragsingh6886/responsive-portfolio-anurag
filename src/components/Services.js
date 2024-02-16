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
            <span>Design a website or app with Figma</span>
          </div>
        </div>
        <div className="serivce-tab">
          <img src={codelogo} alt="" />
          <div className="serivce-tab-detail d-flex">
            <span>Front-End Develop</span>
            <span>Coding front-end with Tailwind CSS, React JS</span>
          </div>
        </div>
        <div className="serivce-tab">
          <img src={codelogo} alt="" />
          <div className="serivce-tab-detail d-flex">
            <span>Back-End Develop</span>
            <span>Coding back-end with PHP Laravel</span>
          </div>
        </div>
      </div>
      <div className="services-right">
        <p className="head-text">Services</p>
        <h3 className="main-heading-text">My Awesome Service</h3>
        <p className="detail-text">
          Bring your digital vision to life through a seamless fusion of
          creativity and functionality. As a dedicated UI designer and web
          developer, <br />I offer a range of services that elevate your online
          presence.
        </p>
        <div className="special-service d-flex">
          <div className="special-service-tab">
            <span>15+</span>
            <span>Project complete</span>
          </div>
          <div className="special-service-tab">
            <span>1+</span>
            <span>Year ecperience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
