import React from 'react';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div className='welcome-page'>
      <div className='welcome-page__banner'>
        <Banner title='Welcome to Yummi Pizza' />
      </div>
      <Footer />
    </div>
  );
};

export default WelcomePage;
