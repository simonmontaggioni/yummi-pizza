import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div className='menu'>
      <div className='menu__side menu__side-left'>{'<'}</div>
      <div className='menu__content'>
        <div className='menu__title'> Choose your favorite flavour</div>
        <div className='menu__slider'>
          <ul className='menu__list'>
            <li className='menu__list--item'> pizza 1</li>
            <li className='menu__list--item'> pizza 2</li>
            <li className='menu__list--item'> pizza 3</li>
            <li className='menu__list--item'> pizza 4</li>
            <li className='menu__list--item'> pizza 5</li>
            <li className='menu__list--item'> pizza 6</li>
            <li className='menu__list--item'> pizza 7</li>
            <li className='menu__list--item'> pizza 8</li>
          </ul>
        </div>
      </div>
      <div className='menu__side menu__side-right'>{'>'}</div>
    </div>
  );
};

export default Menu;
