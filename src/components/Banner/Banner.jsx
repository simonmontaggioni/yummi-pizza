import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = (props) => {
  return (
    <div className='banner'>
      <h1 className='banner__title'>
        <span>{props.title}</span>
      </h1>
      <div>
        <Link to='/home'>
          <button className='banner__button'>Enjoy a Pizza</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
