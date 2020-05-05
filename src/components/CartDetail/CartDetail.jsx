import React from 'react';
import { connect } from 'react-redux';
import './CartDetail.css';
import CartItem from '../CartItem/ CartItem';

const CartDetail = (props) => {
  const cartItemsList = props.cartItems.map((cartItem, index) => (
    <CartItem key={cartItem.name + index.toString()} item={cartItem} />
  ));
  return (
    <div className='cart-detail'>
      <div className='cart-detail__list-container'>
        {props.cartItems.length > 0 ? (
          <ul className='cart-detail__list'>{cartItemsList}</ul>
        ) : (
          <div className='cart-detail__empty-list'>
            <p className='cart-detail__empty-message'>
              You're no added items yet!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps, null)(CartDetail);
