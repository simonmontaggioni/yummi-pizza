import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions';
import { coinFactor, coinSymbol } from '../../utils';
import './ CartItem.css';
import itemImage from '../../assets/static/images/pizza-1.png';

const CartItem = (props) => {
  const setItemsList = props.item.ingredients.map((ingredient) => (
    <li key={ingredient.title + ingredient} className='order-cart-item'>
      <span>{ingredient}</span>
    </li>
  ));

  const handleRemoveFromCart = (event) => {
    const itemId = props.item.id;
    props.removeFromCart(itemId);
  };

  return (
    <li className='cart-item'>
      <div className='cart-item__card'>
        <div className='cart-item__title'>
          <span>{props.item.name}</span>
        </div>
        <div className='cart-item__image-wrapper'>
          <img className='responsive-img' src={itemImage} alt='item' />
        </div>
      </div>
      <div className='cart-item__details'>
        <div className='cart-item__details-title'>
          <span>Ingredients</span>
        </div>
        <ul className='cart-item__details-list'>{setItemsList}</ul>
      </div>
      <div className='cart-item__payment-info'>
        <span className='unit-price'> Unit Price</span>
        <span className='price'>
          <span className='coin'>{coinSymbol(props.coinType)}</span>
          {coinFactor(props.coinType, props.item.price)}
        </span>
        <button
          className='cart-item__button--remove'
          onClick={handleRemoveFromCart}
        >
          remove from cart
        </button>
      </div>
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    coinType: state.coinType,
  };
};
const mapDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
