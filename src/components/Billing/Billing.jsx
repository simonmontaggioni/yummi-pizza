import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Billing.css';
import Invoice from '../Invoice/Invoice';
import DeliveryForm from '../DeliveryForm/DeliveryForm';

const Billing = (props) => {
  const [rotate, setRotate] = useState('flip-front');

  const handleFlipBackClick = () => {
    setRotate('flip-back');
  };
  const handleFlipFrontClick = () => {
    setRotate('flip-front');
  };

  const checkForEmptyInputValue = () => {
    for (let inputField in props.deliveryData) {
      if (props.deliveryData[inputField] === '') {
        return true;
      }
    }
    return false;
  };

  const checkForm = () => {
    return checkForEmptyInputValue();
  };

  const checkEmptyCart = () => {
    return props.cartItems.length < 1 ? true : false;
  };

  let ifErrorOnOrder = checkForm() || checkEmptyCart();

  return (
    <div className='billing flip-card'>
      <div className={`flip-card-inner ${rotate}`}>
        <div className='billing-front flip-card-front'>
          <div className='invoice-details'>
            <Invoice />
          </div>
          <div>
            <button
              className='invoice__payment-button'
              onClick={handleFlipBackClick}
            >
              Process order
            </button>
          </div>
        </div>
        <div className='billing-rear flip-card-back'>
          <div className='form'>
            <DeliveryForm />
          </div>
          <div className='buttons-group'>
            <button
              className='invoice__payment-button--check'
              onClick={handleFlipFrontClick}
            >
              Check Order
            </button>
            <button
              className={`${
                ifErrorOnOrder ? 'disabled-button' : 'invoice__payment-button '
              }`}
              onClick={ifErrorOnOrder ? null : () => console.log('done!!')}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
    deliveryData: state.deliveryData,
  };
};

export default connect(mapStateToProps, null)(Billing);
