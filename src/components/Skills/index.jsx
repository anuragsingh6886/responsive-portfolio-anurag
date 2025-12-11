import React from 'react';
import skillsData from '../../data/skills';
import { SkillCard } from './SkillCard';
import './style.scss';

export const Skills = () => {
  return (
    <section className="container px-3 py-4 d-flex" id="skills">
      <div>
        <span className="description">
          <span className="heading">Skills:</span>
        </span>
        <div className="card-map">
          {skillsData.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} img={skill.img} />
          ))}
        </div>
      </div>
    </section>
  );
};
