import React from 'react';
import './ItemsList.css';
import ListItem from '../ListItem/ListItem';

const ItemsList = () => {
  return (
    <div className='list-container'>
      <ul className='shopping-bar__items-list'>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </div>
  );
};

export default ItemsList;
