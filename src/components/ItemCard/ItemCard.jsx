import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../actions';
import { coinFactor, coinSymbol } from '../../utils';

import './ItemCard.css';
import pizza from '../../assets/static/images/pizza-1.png';

const ItemCard = (props) => {
  const item = props.item;

  const handleAddToCart = (event) => {
    props.addToCart(item);
  };

  return (
    <div className='item-card'>
      <div className='item-card__price'>
        <span className='item-card__price--coin'>
          {coinSymbol(props.coinType)}
        </span>
        <span className='item-card__price--cost'>
          {coinFactor(props.coinType, item.price)}
        </span>
      </div>
      <div className='item-card__image'>
        <img src={pizza} alt='pizza' />
      </div>
      <div className='item-card__title'>
        <span>{item.name}</span>
      </div>
      <div className='item-card__footer'>
        <button className='item-card__button' onClick={handleAddToCart}>
          <span className='button__title'>Add to cart</span>
          <span className='button-badge'>0</span>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { coinType: state.coinType };
};
const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);
