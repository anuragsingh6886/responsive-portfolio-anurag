import React from "react";
import projectData from './projects';
import Project from './Project';

export function Portfolio() {
  return (
    <section className="container" id="portfolio-section">
      <div className="portofoloio-about">
        <p className="heading">Portfolio</p>
        <div>
          <span>Let's have a look at my portfolio</span>
          <a href="" alt=""><span>See All</span></a>
        </div>
      </div>
      {/* Loop all avilable Project and show it in card */}
      {projectData.map(prod =>
            (
              <Project key={prod.name} name={prod.name} description={prod.description} img={prod.img}/>
            )
      )}
    </section>
  );
}
