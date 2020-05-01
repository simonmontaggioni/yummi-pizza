import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <div className='nav__title'>
          <span>The Yummi Pizza</span>
        </div>
        <div className='nav__item'>login</div>
        <div className='nav__item nav__item--middle'>signup</div>
        <div className='nav__item'>coin</div>
      </nav>
    </header>
  );
};

export default Header;
