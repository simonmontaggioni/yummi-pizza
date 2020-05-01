import React from 'react';
import './OrderPage.css';
import Header from '../../components/Header/Header';
import CartDetail from '../../components/CartDetail/CartDetail';

const OrderPage = () => {
  return (
    <div className='order-page'>
      <div className='order-page__header'>
        <Header />
      </div>
      <div className='order-page__main'>
        <div className='order-page__cart'>
          <CartDetail />
        </div>
        <div className='order-page__billing'>billing</div>
      </div>
    </div>
  );
};

export default OrderPage;
