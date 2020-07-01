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

  const [rotate, setRotate] = useState('flip-front');

  const handleFlipBackClick = () => {
    setRotate('flip-back');
  };
  const handleFlipFrontClick = () => {
    setRotate('flip-front');
  };

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

  const setItemsList = props.item.ingredients.map((ingredient) => (
    <li key={ingredient.title + ingredient} className='order-cart-item'>
      <span>{ingredient}</span>
    </li>
  ));

  return (
    <div className='item-flip-card'>
      <div className={`item-flip-card-inner ${rotate}`}>
        <div className='item-card item-flip-card-front'>
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
          <div className='item-card__info-section'>
            <span className='item-card__item-title'>
              {item.name === null ? 'loading...' : item.name}
            </span>
            <span
              className='item-card__ingredients-button'
              onClick={handleFlipBackClick}
            >
              Ingredients
            </span>
          </div>
          <div className='item-card__footer'>
            <button className='item-card__button' onClick={handleAddToCart}>
              <span className='button__title'>Add to cart</span>
              <span className='button-badge'>{singleItemsInCart()}</span>
            </button>
          </div>
        </div>
        <div
          className='item-card-back item-flip-card-back'
          onClick={handleFlipFrontClick}
        >
          <div className='item-card__details-title'>
            <span>Ingredients</span>
          </div>
          <ul className='item-card__details-list'>{setItemsList}</ul>
        </div>
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
