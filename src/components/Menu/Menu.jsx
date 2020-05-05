import React from 'react';
import './Menu.css';
import ItemCard from '../ItemCard/ItemCard';

const list = [
  {
    name: 'margarita',
    price: 45,
    ingredients: ['tomato paste', 'mozarrella cheese'],
    id: 'pizza-1',
    image: 'margarita',
  },
  {
    name: 'stagioni',
    price: 45,
    ingredients: [
      'mozarrella cheese',
      'parmesan cheese',
      'basil',
      'mushrooms',
      'ham',
      'artichokes',
      'olives',
    ],
    id: 'pizza-2',
    image: 'stagioni',
  },
  {
    name: 'mexicana',
    price: 45,
    ingredients: [
      'onion',
      'paprika',
      'ground beef',
      'mozarrella cheese',
      'avocado',
    ],
    id: 'pizza-3',
    image: 'mexicana',
  },
  {
    name: 'primavera',
    price: 45,
    ingredients: ['mozzarella cheese', 'paprika', 'corn', 'egg', 'tomato'],
    id: 'pizza-4',
    image: 'primavera',
  },
  {
    name: 'pastorella',
    price: 45,
    ingredients: [
      'cottage cheese',
      'mozzarella cheese',
      'salame',
      'basil',
      'paprika',
    ],
    id: 'pizza-5',
    image: 'pastorella',
  },
  {
    name: 'hawaiana',
    price: 45,
    ingredients: ['pineapple', 'ham', 'tomato', 'mozzarella cheese', 'spices'],
    id: 'pizza-6',
    image: 'hawaiana',
  },
  {
    name: 'napolitana',
    price: 45,
    ingredients: [
      'tomato paste',
      'tomato',
      'mozzarella cheese',
      'parsley',
      'green olives',
    ],
    id: 'pizza-7',
    image: 'napolitana',
  },
  {
    name: 'la marinara',
    price: 45,
    ingredients: ['tomato paste', 'oregano', 'garlic', 'basil'],
    id: 'pizza-8',
    image: 'lamarinara',
  },
];

const Menu = () => {
  const menuList = list.map((item, index) => (
    <li key={item.name + index.toString()} className='menu__list--item'>
      <ItemCard item={item} />
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
