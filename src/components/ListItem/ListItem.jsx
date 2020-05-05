import React from 'react';
import { connect } from 'react-redux';
import { coinFactor, coinSymbol } from '../../utils';
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
        <span>{coinSymbol(props.coinType)}</span>
        {props.item
          ? coinFactor(props.coinType, props.item.price)
          : 'loading...'}
      </span>
      <span className='list-item__action' onClick={handleRemoveFromCart}>
        <button>delete</button>
      </span>
    </li>
  );
};
const mapStateToProps = (state) => {
  return { coinType: state.coinType };
};
const mapDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
