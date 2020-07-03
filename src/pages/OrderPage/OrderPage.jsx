import React from 'react';
import './OrderPage.css';
import CartDetail from '../../components/CartDetail/CartDetail';
import Billing from '../../components/Billing/Billing';
import { Link } from 'react-router-dom';

const OrderPage = () => {
  return (
    <div className={`order-page slide-in-right`}>
      <div className='order-page__title'>
        <span>Cart Details</span>
        <Link to='/home'>
          <button className='back-button'>go back</button>
        </Link>
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
