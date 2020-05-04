import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
  return (
    <li className='shopping-bar__list-item'>
      <span className='list-item__name'>
        {props.item ? props.item.title : 'loading...'}
      </span>
      <span className='list-item__price'>
        <span>{`${'$'} `}</span>
        {props.item ? props.item.price : 'loading...'}
      </span>
      <span className='list-item__action'>d</span>
    </li>
  );
};

export default ListItem;
