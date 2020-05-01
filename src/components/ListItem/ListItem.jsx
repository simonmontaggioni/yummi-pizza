import React from 'react';
import './ListItem.css';

const ListItem = () => {
  return (
    <li className='shopping-bar__list-item'>
      <span className='list-item__name'>item name</span>
      <span className='list-item__price'>
        <span>$</span>price
      </span>
      <span className='list-item__action'>d</span>
    </li>
  );
};

export default ListItem;
