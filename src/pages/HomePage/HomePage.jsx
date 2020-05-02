import React from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import ShoppingBar from '../../components/ShoppingBar/ShoppingBar';

const HomePage = () => {
  return (
    <div className='home-page'>
      <div className='home-page__header'>
        <Header />
      </div>
      <div className='home-page__title'>
        <span>Choose your favorite flavour</span>
      </div>
      <div className='home-page__menu'>
        <Menu />
      </div>
      <div className='home-page__shopping-bar'>
        <ShoppingBar />
      </div>
    </div>
  );
};

export default HomePage;
