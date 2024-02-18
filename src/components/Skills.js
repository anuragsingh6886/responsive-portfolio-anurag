import React from "react";
import skillsData from "./skillsData";
import Skills from "./Skill";

export function Skill() {
  return (
    <section className="container px-3 py-4 d-flex" id="skills">
      <div>
        <span className="description"> <span className="heading">Skills</span> - The skills, tools and technologies, which I am really good at:</span>
        <div className="card-map">
          {skillsData.map((props) => (
            <Skills key={props.name} name={props.name} img={props.img} />
          ))}
        </div>
      </div>
    </section>
  );
}
