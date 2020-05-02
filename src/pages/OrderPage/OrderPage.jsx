import React from 'react';
import './OrderPage.css';
import Header from '../../components/Header/Header';
import CartDetail from '../../components/CartDetail/CartDetail';
import Billing from '../../components/Billing/Billing';

const OrderPage = () => {
  return (
    <div className='order-page'>
      <div className='order-page__header'>
        <Header />
      </div>
      <div className='order-page__title'>
        <span>Cart Details</span>
      </div>
      <div className='order-page__main'>
        <div className='order-page__cart'>
          <CartDetail />
        </div>
        <div className='order-page__billing'>
          <Billing />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
