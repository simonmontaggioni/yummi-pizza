import React from 'react';
import { connect } from 'react-redux';
import './ItemsList.css';
import ListItem from '../ListItem/ListItem';

const ItemsList = (props) => {
  let items = props.cartItems.map((object, index) => (
    <ListItem key={object.item.title + index.toString()} item={object.item} />
  ));
  return (
    <div className='list-container'>
      <ul className='shopping-bar__items-list'>{items}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps, null)(ItemsList);
