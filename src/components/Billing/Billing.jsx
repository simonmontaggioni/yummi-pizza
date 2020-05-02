import React from 'react';
import './Billing.css';
import Invoice from '../Invoice/Invoice';

const Billing = () => {
  return (
    <div className='billing'>
      <div className='billing-front'>
        <div className='invoice-details'>
          <Invoice />
        </div>
        <div>
          <button className='invoice__payment-button'>Process order</button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
