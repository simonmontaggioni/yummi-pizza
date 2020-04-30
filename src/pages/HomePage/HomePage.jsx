import React from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';

const HomePage = () => {
  return (
    <div className='home-page'>
      <div className='home-page__header'>
        <Header />
      </div>
      <div className='home-page__menu'> menu </div>
      <div className='home-page__shopping-cart'> shopping cart </div>
    </div>
  );
};

export default HomePage;
