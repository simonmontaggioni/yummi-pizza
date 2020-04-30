import React from 'react';
import './ShoppingBar.css';

const ShoppingBar = () => {
  return (
    <div className='shopping-bar'>
      <div className='shopping-bar__cart'> cart </div>
      <div className='shopping-bar__item-list'> items list</div>
      <div className='shopping-bar__total-amount'>total</div>
      <div className='shopping-bar__payment-button'>
        <button>go to pay</button>
      </div>
    </div>
  );
};

export default ShoppingBar;
