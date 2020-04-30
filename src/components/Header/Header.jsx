import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <div className='nav__title'>title</div>
        <div className='nav__item'>login</div>
        <div className='nav__item'>signup</div>
        <div className='nav__item'>coin</div>
      </nav>
    </header>
  );
};

export default Header;
