import React from 'react';
import './CartDetail.css';

const CartDetail = () => {
  return (
    <div className='cart-detail'>
      <div className='cart-detail__list-container'>
        <ul className='cart-detail__list'>
          <li className='cart-detail__item'>item1</li>
          <li className='cart-detail__item'>item2</li>
          <li className='cart-detail__item'>item3</li>
          <li className='cart-detail__item'>item4</li>
          <li className='cart-detail__item'>item5</li>
          <li className='cart-detail__item'>item6</li>
          <li className='cart-detail__item'>item7</li>
          <li className='cart-detail__item'>item8</li>
          <li className='cart-detail__item'>item9</li>
        </ul>
      </div>
    </div>
  );
};

export default CartDetail;
