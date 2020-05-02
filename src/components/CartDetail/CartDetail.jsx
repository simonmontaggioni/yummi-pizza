import React from 'react';
import './CartDetail.css';
import CartItem from '../CartItem/ CartItem';

const CartDetail = () => {
  return (
    <div className='cart-detail'>
      <div className='cart-detail__title'>
        <span>Cart Details</span>
      </div>
      <div className='cart-detail__list-container'>
        <ul className='cart-detail__list'>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </ul>
      </div>
    </div>
  );
};

export default CartDetail;
