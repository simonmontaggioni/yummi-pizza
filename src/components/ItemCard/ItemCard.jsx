import React from 'react';
import './ItemCard.css';
import pizza from '../../assets/static/images/pizza-1.png';

const ItemCard = (props) => {
  return (
    <div className='item-card'>
      <div className='item-card__price'>
        <span className='item-card__price--coin'>$</span>
        <span className='item-card__price--cost'>{props.price}</span>
      </div>
      <div className='item-card__image'>
        <img src={pizza} alt='pizza' />
      </div>
      <div className='item-card__title'>
        <span>{props.title}</span>
      </div>
      <div className='item-card__footer'>
        <button className='item-card__button'>
          <span className='button__title'>Add to cart</span>
          <span className='button-badge'>0</span>
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
