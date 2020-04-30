import React from 'react';
import PropTypes from 'prop-types';
import './FooterIcon.css';

const FooterIcon = (props) => {
  const { icon, link, alt } = props;
  return (
    <span className='footer-icon'>
      <a href={link}>
        <img src={icon} alt={alt} />
      </a>
    </span>
  );
};

FooterIcon.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string,
  alt: PropTypes.string,
};

export default FooterIcon;
