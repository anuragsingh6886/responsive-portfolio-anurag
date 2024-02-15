import React from "react";
import projectData from "./projects";
import Project from "./Project";

export function Portfolio() {

  return (
    <section className="container p-3" id="portfolio-section">
      <div className="portofoloio-about">
        <p className="heading">Portfolio</p>
        <div className="description-head">
          <span>Let's have a look at my portfolio</span>
          <a href="" alt="">
            <p>See All</p>
          </a>
        </div>
      </div>
      {/* Loop all avilable Project and show it in card */}

      <div className="portfolio-cards row">
          {projectData.map((prod) => (
            <Project
              key={prod.name}
              name={prod.name}
              description={prod.description}
              img={prod.img}
            />
          ))}
      </div>
    </section>
  );
}
