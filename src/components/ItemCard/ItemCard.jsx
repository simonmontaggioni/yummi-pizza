import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../actions';
import { coinFactor, coinSymbol } from '../../utils';

import './ItemCard.css';
import margarita from '../../assets/static/images/margarita.svg';
import stagioni from '../../assets/static/images/stagioni.svg';
import mexicana from '../../assets/static/images/mexicana.svg';
import primavera from '../../assets/static/images/primavera.svg';
import pastorella from '../../assets/static/images/pastorella.svg';
import hawaiana from '../../assets/static/images/hawaiana.svg';
import napolitana from '../../assets/static/images/napolitana.svg';
import lamarinara from '../../assets/static/images/lamarinara.svg';
import Spinner from '../Spinner/Spinner';

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

const ItemCard = (props) => {
  const [loading, setLoading] = useState(true);
  const item = props.item;

  const handleAddToCart = (event) => {
    props.addToCart(item);
  };

  const singleItemsInCart = () => {
    const singleItemsInCart = props.cartItems.filter(
      (item) => item.id === props.item.id
    );
    return singleItemsInCart.length;
  };

  const handleImageLoadEvent = () => {
    setLoading(false);
  };

  return (
    <div className='item-card'>
      <div className='item-card__price'>
        <span className='item-card__price--coin'>
          {coinSymbol(props.coinType)}
        </span>
        <span className='item-card__price--cost'>
          {item.price === null ? 0 : coinFactor(props.coinType, item.price)}
        </span>
      </div>
      <div className='item-card__image'>
        {item.image === null ? (
          ''
        ) : (
          <img
            src={pizzaImages[item.image]}
            alt='pizza'
            className='responsive'
            onLoad={handleImageLoadEvent}
          />
        )}
        {loading && (
          <span className='spinner'>
            <Spinner />
          </span>
        )}
      </div>
      <div className='item-card__title'>
        <span>{item.name === null ? 'loading...' : item.name}</span>
      </div>
      <div className='item-card__footer'>
        <button className='item-card__button' onClick={handleAddToCart}>
          <span className='button__title'>Add to cart</span>
          <span className='button-badge'>{singleItemsInCart()}</span>
        </button>
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
const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);
