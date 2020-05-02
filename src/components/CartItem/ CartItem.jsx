import React from 'react';
import './ CartItem.css';
import itemImage from '../../assets/static/images/pizza-1.png';

const pizza = {
  title: 'margarita',
  ingredients: [
    'ingredient 1',
    'ingredient 2',
    'ingredient 3',
    'ingredient 4',
    'ingredient 5',
    'ingredient 6',
    'ingredient 7',
  ],
  price: 45,
  image: itemImage,
};

const setItemsList = pizza.ingredients.map((ingredient) => (
  <li key={ingredient.title + ingredient} className='order-cart-item'>
    <span>{ingredient}</span>
  </li>
));

const CartItem = () => {
  return (
    <li className='cart-item'>
      <div className='cart-item__card'>
        <div className='cart-item__title'>
          <span>{pizza.title}</span>
        </div>
        <div className='cart-item__image-wrapper'>
          <img className='responsive-img' src={pizza.image} alt='item' />
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
          <span className='coin'>$</span>
          {pizza.price}
        </span>
        <button className='cart-item__button--remove'>remove from cart</button>
      </div>
    </li>
  );
};

export default CartItem;
