import React from 'react';
import './Menu.css';
import ItemCard from '../ItemCard/ItemCard';

const list = [
  {
    title: 'margarita',
    ingredients: [
      'ingredient 1',
      'ingredient 2',
      'ingredient 3',
      'ingredient 4',
      'ingredient 5',
      'ingredient 6',
      'ingredient 7',
    ],
    price: 45,
    image: 'itemImage',
  },
  {
    title: 'pepperoni',
    ingredients: [
      'ingredient 1',
      'ingredient 2',
      'ingredient 3',
      'ingredient 4',
      'ingredient 5',
      'ingredient 6',
      'ingredient 7',
    ],
    price: 45,
    image: 'itemImage',
  },
  {
    title: 'vegan',
    ingredients: [
      'ingredient 1',
      'ingredient 2',
      'ingredient 3',
      'ingredient 4',
      'ingredient 5',
      'ingredient 6',
      'ingredient 7',
    ],
    price: 45,
    image: 'itemImage',
  },
];

const Menu = () => {
  const menuList = list.map((item) => (
    <li className='menu__list--item'>
      <ItemCard key={item.title} item={item} />
    </li>
  ));

  return (
    <div className='menu'>
      <div className='menu__side menu__side-left'></div>
      <div className='menu__content'>
        <div className='menu__slider'>
          <ul className='menu__list'>{menuList}</ul>
        </div>
      </div>
      <div className='menu__side menu__side-right'></div>
    </div>
  );
};

export default Menu;
