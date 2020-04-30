import React from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import ShoppingBar from '../../components/ShoppingBar/ShoppingBar';

const HomePage = () => {
  return (
    <div className='home-page'>
      <div className='home-page__header'>
        <Header />
      </div>
      <div className='home-page__menu'> menu </div>
      <div className='home-page__shopping-bar'>
        <ShoppingBar />
      </div>
    </div>
  );
};

export default HomePage;
