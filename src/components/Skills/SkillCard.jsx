import React from 'react';
import PropTypes from 'prop-types';

export const SkillCard = ({ name, img }) => {
  return (
    <div className="card-data p-3">
      <div className="card-wrapper">
        <img className="card-img-top" src={img} alt={name} />
        <div className="project-detail m-3">
          <span className="project-name">{name}</span>
        </div>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
