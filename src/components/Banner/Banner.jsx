import React from 'react';
import './Banner.css';

const Banner = (props) => {
  return (
    <div className='banner'>
      <h1 className='banner__title'>
        Welcome to <span>{props.title}</span>
      </h1>
      <button className='banner__button'>Enjoy a Pizza</button>
    </div>
  );
};

export default Banner;
