import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions';
import './ListItem.css';

const ListItem = (props) => {
  const handleRemoveFromCart = (event) => {
    const itemId = props.item.id;
    props.removeFromCart(itemId);
  };

  return (
    <li className='shopping-bar__list-item'>
      <span className='list-item__name'>
        {props.item ? props.item.name : 'loading...'}
      </span>
      <span className='list-item__price'>
        <span>{`${'$'} `}</span>
        {props.item ? props.item.price : 'loading...'}
      </span>
      <span className='list-item__action' onClick={handleRemoveFromCart}>
        <button>delete</button>
      </span>
    </li>
  );
};

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(null, mapDispatchToProps)(ListItem);
