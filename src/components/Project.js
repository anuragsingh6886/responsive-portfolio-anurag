import githubLogo from "../assets/images/icons/github.svg";
import React from "react";

const Product = (props) => {
  // project data
  const { name, description, img, url } = props;


  return (
      <div className="card-data col-12 col-md-4">
        <img className="card-img-top" src={img} alt="" />
        <div className="project-detail m-3">
          <a href={url} alt="">
            <img src={githubLogo} alt="" />
            <span className="project-name">{name}</span>
          </a>
          <p className="project-description">{description}</p>
        </div>
      </div>
  );
};

export default Product;
