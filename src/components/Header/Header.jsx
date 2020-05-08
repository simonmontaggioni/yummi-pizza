import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import CoinSelector from '../CoinSelector/CoinSelector';
import Login from '../Login/Login';

const Header = () => {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <div className='nav__title'>
          <Link to='/'>
            <span>The Yummi Pizza</span>
          </Link>
        </div>
        <div className='nav__item'>
          <Login />
        </div>
        <div className='nav__item nav__item--middle'>Signup</div>
        <div className='nav__item'>
          <CoinSelector />
        </div>
      </nav>
    </header>
  );
};

export default Header;
