import React from 'react';
import './Menu.css';
import ItemCard from '../ItemCard/ItemCard';

const Menu = () => {
  return (
    <div className='menu'>
      <div className='menu__side menu__side-left'></div>
      <div className='menu__content'>
        <div className='menu__title'> Choose your favorite flavour</div>
        <div className='menu__slider'>
          <ul className='menu__list'>
            <li className='menu__list--item'>
              <ItemCard title='pizza 1' />
            </li>
            <li className='menu__list--item'>
              <ItemCard title='pizza 2' />
            </li>
            <li className='menu__list--item'>
              <ItemCard title='pizza 3' />
            </li>
            <li className='menu__list--item'>
              <ItemCard title='pizza 4' />
            </li>
            <li className='menu__list--item'>
              <ItemCard title='pizza 5' />
            </li>
            <li className='menu__list--item'>
              <ItemCard title='pizza 6' />
            </li>
            <li className='menu__list--item'>
              <ItemCard title='pizza 7' />
            </li>
            <li className='menu__list--item'>
              <ItemCard title='pizza 8' />
            </li>
          </ul>
        </div>
      </div>
      <div className='menu__side menu__side-right'></div>
    </div>
  );
};

export default Menu;
