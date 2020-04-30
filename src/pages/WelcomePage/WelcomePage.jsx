import React from 'react';
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div className='welcome-page'>
      <div className='welcome-page__banner'>
        banner
        <button className='welcome-page__button'>Enjoy a Pizza</button>
      </div>
      <footer className='welcome-page__footer'>footer</footer>
    </div>
  );
};

export default WelcomePage;
