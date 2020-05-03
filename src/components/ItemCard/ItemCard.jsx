import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../actions';

import './ItemCard.css';
import pizza from '../../assets/static/images/pizza-1.png';

const ItemCard = (props) => {
  const item = props.item;

  const handleAddToCart = (event) => {
    props.addToCart({ item });
  };

  return (
    <div className='item-card'>
      <div className='item-card__price'>
        <span className='item-card__price--coin'>$</span>
        <span className='item-card__price--cost'>{item.price}</span>
      </div>
      <div className='item-card__image'>
        <img src={pizza} alt='pizza' />
      </div>
      <div className='item-card__title'>
        <span>{item.title}</span>
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

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(ItemCard);
