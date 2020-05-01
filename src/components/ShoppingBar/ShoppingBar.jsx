import React from 'react';
import './ShoppingBar.css';
import ItemsList from '../ItemsList/ItemsList';

const ShoppingBar = () => {
  return (
    <div className='shopping-bar'>
      <div className='shopping-bar__cart'>
        <span className='cart-badge'>0</span>
      </div>
      <div className='shopping-bar__item-list'>
        <ItemsList />
      </div>
      <div className='shopping-bar__total-amount'>
        <div className='total-amount__title'>
          <span>total</span>
        </div>
        <div className='total-amount__price'>
          <div>
            <span className='total-amount__coin'>$</span>
            <span className='total-amount__cost'>45</span>
          </div>
        </div>
      </div>
      <div className='shopping-bar__payment'>
        <button className='shopping-bar__payment-button'>go to pay</button>
      </div>
    </div>
  );
};

export default ShoppingBar;
