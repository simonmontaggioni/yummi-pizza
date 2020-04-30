import React from 'react';
import './Banner.css';

const Banner = (props) => {
  return (
    <div className='banner'>
      <h1 className='banner__title'>
        Welcome to <span>{props.title}</span>
      </h1>
      <div>
        <button className='banner__button'>Enjoy a Pizza</button>
      </div>
    </div>
  );
};

export default Banner;
