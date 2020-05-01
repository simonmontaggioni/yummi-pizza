import React from 'react';
import './ItemList.css';

const ItemList = () => {
  return (
    <div className='list-container'>
      <ul className='shopping-bar__items-list'>
        <li className='shopping-bar__list-item'>item 1</li>
        <li className='shopping-bar__list-item'>item 2</li>
        <li className='shopping-bar__list-item'>item 3</li>
        <li className='shopping-bar__list-item'>item 4</li>
        <li className='shopping-bar__list-item'>item 5</li>
        <li className='shopping-bar__list-item'>item 6</li>
      </ul>
    </div>
  );
};

export default ItemList;
