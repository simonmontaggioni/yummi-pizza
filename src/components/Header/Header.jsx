import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import CoinSelector from '../CoinSelector/CoinSelector';

const Header = () => {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <div className='nav__title'>
          <Link to='/'>
            <span>The Yummi Pizza</span>
          </Link>
        </div>
        <div className='nav__item'>login</div>
        <div className='nav__item nav__item--middle'>signup</div>
        <div className='nav__item'>
          <CoinSelector />
        </div>
      </nav>
    </header>
  );
};

export default Header;
