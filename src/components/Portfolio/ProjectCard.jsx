import linkLogo from '../assets/images/icons/link_3_line.svg';
import React from "react";

const Product = (props) => {
  // project data
  const { name, description, img, url } = props;

  return (
      <div className="card-data col-12 col-md-4 p-3">
        <div className="card-wrapper h-100">
          <img className="card-img-top" src={img} alt="project-img" />
          <div className="project-detail m-3">
            <a href={url} alt="project-url">
              <span className="project-name">{name} <img src={linkLogo} alt="link-logo"></img></span>
            </a>
            <p className="project-description">{description}</p>
          </div>
        </div>
      </div>
  );
};

export default Product;
