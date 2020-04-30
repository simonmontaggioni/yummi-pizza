import React from 'react';
import Footer from '../../components/Footer/Footer';
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div className='welcome-page'>
      <div className='welcome-page__banner'>
        banner
        <button className='welcome-page__button'>Enjoy a Pizza</button>
      </div>
      <Footer />
    </div>
  );
};

export default WelcomePage;
