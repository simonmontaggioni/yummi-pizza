import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions';
import { coinFactor, coinSymbol } from '../../utils';
import './ CartItem.css';
import margarita from '../../assets/static/images/margarita.svg';
import stagioni from '../../assets/static/images/stagioni.svg';
import mexicana from '../../assets/static/images/mexicana.svg';
import primavera from '../../assets/static/images/primavera.svg';
import pastorella from '../../assets/static/images/pastorella.svg';
import hawaiana from '../../assets/static/images/hawaiana.svg';
import napolitana from '../../assets/static/images/napolitana.svg';
import lamarinara from '../../assets/static/images/lamarinara.svg';

const pizzaImages = {
  margarita: margarita,
  stagioni: stagioni,
  mexicana: mexicana,
  primavera: primavera,
  pastorella: pastorella,
  hawaiana: hawaiana,
  napolitana: napolitana,
  lamarinara: lamarinara,
};

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
          <img
            className='responsive-img'
            src={pizzaImages[props.item.image]}
            alt='item'
          />
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
