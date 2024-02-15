import React from "react";

export function Footer(props) {
  return (
    <section className="d-flex" id="footer-head">
      <div className="footer-top d-flex mt-2">
        <span>Have an idea?</span>
        <span>Let’s talk about it</span>
      </div>
      <div className="footer-bottom d-flex">
        <div className="footer-bottom-left">
          <span className="email-address">{props.email}</span>
          <span className="address-line-1">Whitefield, Bangalore</span>
          <span className="address-line-2">Karnataka, India, 560048</span>
        </div>
        <div className="footer-bottom-right">
          <div className="social-top-icons">
            <a href="" alt="">
              <span>LinkedIn</span>
            </a>
            <a href="" alt="">
              <span>Twitter</span>
            </a>
            <a href="" alt="">
              <span>Leetcode</span>
            </a>
          </div>
          <div className="social-bottom-icons">
            <a href="" alt="">
              <span>Gihutb</span>
            </a>
            <a href="" alt="">
              <span>Pinterest</span>
            </a>
            <a href="" alt="">
              <span>Youtube</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
