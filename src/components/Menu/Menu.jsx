import React, { useRef, useState, useEffect } from 'react';
import './Menu.css';
import ItemCard from '../ItemCard/ItemCard';
import Api from '../../Api';

const Menu = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  const apiProductsRequest = async () => {
    let data = null;
    try {
      data = await Api.products.list();
      setList(data);
      setLoading(false);
    } catch (error) {}
    return data;
  };

  useEffect(() => {
    apiProductsRequest();
  }, []);

  let menuList = null;
  if (!loading) {
    menuList = list.map((item, index) => (
      <li key={item.name + index.toString()} className='menu__list--item'>
        <ItemCard
          item={
            loading
              ? {
                  name: null,
                  price: null,
                  ingredients: [],
                  id: null,
                  image: null,
                }
              : item
          }
        />
      </li>
    ));
  }

  const myRef = useRef(null);
  const step = 100;
  let interval = null;

  const stopMove = () => {
    clearInterval(interval);
  };

  const moveSlide = (direction) => {
    interval = setInterval(() => {
      if (direction === 'right') {
        myRef.current.scrollLeft += step;
      } else {
        myRef.current.scrollLeft -= step;
      }
    }, 100);
  };

  return (
    <div className='menu'>
      <div className='menu__side'>
        <div
          className='menu__side-left-arrow'
          onMouseDown={() => moveSlide('left')}
          onMouseUp={stopMove}
        ></div>
      </div>
      <div className='menu__content'>
        <div ref={myRef} className='menu__slider'>
          {loading ? (
            <div className='loading-text text-shadow-drop-center'>
              Loading...
            </div>
          ) : (
            <ul className='menu__list slide-in-bck-center'>{menuList}</ul>
          )}
        </div>
      </div>
      <div className='menu__side'>
        <div
          className='menu__side-right-arrow'
          onMouseDown={() => moveSlide('right')}
          onMouseUp={stopMove}
        ></div>
      </div>
    </div>
  );
};

export default Menu;
