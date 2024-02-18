import React from "react";

const Skills = (props) => {
  // skills data
  const { name, img } = props;

  return (
    <div className="card-data p-3">
      <div className="card-wrapper">
        <img className="card-img-top" src={img} alt="" />
        <div className="project-detail m-3">
          <span className="project-name">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
