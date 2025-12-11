import React from 'react';
import PropTypes from 'prop-types';

export const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

Mailto.propTypes = {
  email: PropTypes.string.isRequired,
  subject: PropTypes.string,
  body: PropTypes.string,
  children: PropTypes.node.isRequired,
};
