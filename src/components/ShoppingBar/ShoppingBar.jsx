import React from 'react';
import { connect } from 'react-redux';
import { coinFactor, coinSymbol } from '../../utils';
import './ShoppingBar.css';
import ItemsList from '../ItemsList/ItemsList';
import { Link } from 'react-router-dom';

const ShoppingBar = (props) => {
  const calculateTotal = (cartItems) => {
    let total = 0;
    for (let item of cartItems) {
      total += item.price;
    }
    return total;
  };

  return (
    <div className='shopping-bar'>
      <div
        className={`shopping-bar__cart ${
          props.cartItems.length > 0
            ? 'shopping-bar__cart--full'
            : 'shopping-bar__cart--empty'
        }`}
      >
        <span className='cart-badge'>
          {props.cartItems ? props.cartItems.length : 0}
        </span>
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
            <span className='total-amount__coin'>
              {coinSymbol(props.coinType)}
            </span>
            <span className='total-amount__cost'>
              {coinFactor(props.coinType, calculateTotal(props.cartItems))}
            </span>
          </div>
        </div>
      </div>
      <div className='shopping-bar__payment'>
        <Link to='/order' className='block-link'>
          <button className='shopping-bar__payment-button'>go to pay</button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
    coinType: state.coinType,
  };
};

export default connect(mapStateToProps, null)(ShoppingBar);
