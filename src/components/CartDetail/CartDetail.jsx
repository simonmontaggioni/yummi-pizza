import React from 'react';
import { connect } from 'react-redux';
import './CartDetail.css';
import CartItem from '../CartItem/ CartItem';

const CartDetail = (props) => {
  const cartItemsList = props.cartItems.map((cartItem, index) => (
    <CartItem
      key={cartItem.item.title + index.toString()}
      item={cartItem.item}
    />
  ));
  return (
    <div className='cart-detail'>
      <div className='cart-detail__list-container'>
        <ul className='cart-detail__list'>{cartItemsList}</ul>
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
