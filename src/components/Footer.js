import React from "react";
// import copyLogo from "../assets/images/icons/copy-link-icon.svg";
import copyLogo from "../assets/images/icons/icons8-copy.png";
import countryLogo from "../assets/images/icons/in.svg";
import linkedIn from "../assets/images/social/linkedin_fill.svg"
import medium from "../assets/images/social/medium_fill.svg"
import github from "../assets/images/social/github_fill.svg"
import twitter from "../assets/images/social/social_x_fill.svg"
import leetcode from "../assets/images/social/leetcode.svg"


export function Footer(props) {
  return (
    <section className="d-flex" id="footer-head">
      <div className="footer-top d-flex mt-2">
        <span>Have an idea?</span>
        <span>Let’s talk about it</span>
      </div>
      <div className="footer-bottom d-flex">
        <div className="footer-bottom-left">
          <span className="email-address">
            {props.email}
            <button className="copy-btn" onClick={() => navigator.clipboard.writeText(props.email)}>
              <img src={copyLogo} alt="" />
            </button>
          </span>
          <span className="mobile-number">
            <img className="country-flag" src={countryLogo} alt=""></img>
            <span>+91 9696151328</span>
            <button className="copy-btn" onClick={() => navigator.clipboard.writeText("9696151328")}>
              <img src={copyLogo} alt="" />
            </button>
          </span>
          <span className="address-line-1">Whitefield, Bangalore</span>
          <span className="address-line-2">Karnataka, India, 560048</span>
        </div>
        <div className="footer-bottom-right">
          <div className="social-top-icons">
            <a href="https://www.linkedin.com/in/anuragsingh6886/" alt="LinkedIn">
              <span><img src={linkedIn} alt="LinkedIn" /></span>
            </a>
            <a href="https://twitter.com/anurags_me" alt="twitter">
              <span><img src={twitter} alt="twitter" /></span>
            </a>
            <a href="https://github.com/anuragsingh6886" alt="Github">
              <span><img src={github} alt="Github" /></span>
            </a>
            <a href="https://medium.com/@anurags-me" alt="Medium">
              <span><img src={medium} alt="Medium" /></span>
            </a>
            <a href="https://leetcode.com/anurags-me/" alt="LeetCode">
              <span><img src={leetcode} alt="LeetCode" /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
